<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Role;

class IndexController extends Controller
{
    public $user;

    public function __construct()
    {
        $this->user = Auth::user();
    }

    public function index(Request $request)
    {
        // $request->user()
        return view('admin.index');
    }

    public function roles()
    {
        $roles = Role::get();

        return view('admin.roles', compact('roles'));
    }
}