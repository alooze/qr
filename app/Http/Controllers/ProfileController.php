<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;

class ProfileController extends Controller
{
    public function index(Request $request)
    {
        return view('profile.index');
    }

    public function save(Request $request)
    {
        $user = $request->user();

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
}
