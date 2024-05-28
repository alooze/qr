<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Spatie\Permission\Models\Role;

class RolesController extends Controller
{
    public function index()
    {
        // $roles = Role::get();
        // build the user-selector dropdown array for the view
        $select = new User;
        $select->id = 0;
        $select->name = ' Please select';

        $excludeRoles = [];
        // don't allow super-admins to be deleted unless pass the rule defined earlier
        if (!auth()->user()->can('can delete super-admins')) $excludeRoles[] = 'Super-Admin';

        // build a list of roles for dropdown
        $roles = Role::whereNotIn('name', $excludeRoles) // ALERT: agnostic of guard_name here!
            ->with('users')
            ->get();

        // build a list of users for the dropdown
        $users = User::query()
            ->with('roles')
            ->get();

        return view('admin.roles',
            [
                'roles' => $roles,
                'users' => $users->prepend($select),
                'canEdit' => auth()->user()->can('assign roles'),
                'canDeleteAdmins' => auth()->user()->can('can delete admins'),
                'canDeleteSuperAdmins' => auth()->user()->can('can delete super-admins'),
            ]);

        // return view('admin.roles', compact('roles'));
    }

    public function edit(Request $request, $id)
    {
        $user = User::findOrFail($id);

        if ($user->hasRole('Root') && !auth()->user()->hasRole('Root')) {
            abort('403');
        }

        if ($user->hasRole('Admin') && !auth()->user()->can('make admin')) {
            abort('403');
        }

        $roles = Role::all();
        return view('users.role', compact('user', 'roles'));
    }

    public function save(Request $request, $id)
    {
        $user = User::findOrFail($id);
        // dd($request->all());
        
        $roles = Role::all();

        foreach ($roles as $r) {
            $user->removeRole($r);
        }

        if (is_array($request->roles)) {
            foreach ($request->roles as $roleName) {
                $r = Role::where('name', $roleName)->first();
                if ($r) {
                    $user->assignRole($r);
                }
            }
        }
        return redirect()->route('a.u.index')->with('status', 'Роли обновлены');
    }
}
