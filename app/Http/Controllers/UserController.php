<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use App\Models\User;
use Spatie\Permission\Models\Role;

class UserController extends Controller
{
    public function __construct()
    {
        // 
    }

    public function index(Request $request)
    {
        $users = User::with('roles')->get();
        return view('users.index',
            compact('users')
        );
    }

    public function add(Request $request)
    {
        $roles = Role::all();
        return view('users.addform', compact('roles'));
    }

    public function save(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', Rule::unique('users')],
            'password' => ['required', Rules\Password::defaults()],
            // 'roles' => ['nullable', 'string', ]
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        if (is_array($request->roles)) {
            foreach ($request->roles as $roleName) {
                $r = Role::where('name', $roleName)->first();
                if ($r) {
                    $user->assignRole($r);
                }
            }
        }

        return redirect()->route('a.u.index')->with('status', 'Пользователь создан');
    }

    public function edit(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if ($user->hasRole('Root') && !auth()->user()->hasRole('Root')) {
            abort(403);
        }

        return view('users.form', compact('user'));
    }

    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        
        if ($user->hasRole('Root') && !auth()->user()->hasRole('Root')) {
            abort(403);
        }

        $request->validate([
            'name' => ['nullable', 'string', 'max:255'],
            'email' => ['nullable', 'string', 'email', 'max:255', Rule::unique('users')->ignore($user->id)],
            'password' => ['nullable', Rules\Password::defaults()],
        ]);

        $upd = null;

        if ($request->name) {
            $upd['name'] = $request->name;
        }

        if ($request->email) {
            $upd['email'] = $request->email;
        }

        if ($request->password) {
            $upd['password'] = Hash::make($request->password);
        }

        if ($upd) {
            $user->update($upd);  
        } 

        return redirect()->back()->with('status', 'Данные обновлены');
    }

    public function delete(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if ($user->hasRole('Root')) {
            abort(403);
        }

        if (!auth()->user()->can('delete user')) {
            abort(403);
        }

        $user->delete();
        return back()->with('status', 'Пользователь удален');
    }

}
