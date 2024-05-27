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
}
