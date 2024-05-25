<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index(Request $request)
    {
        return 'index';
    }

    public function add(Request $request)
    {
        return 'add';
    }

    public function save(Request $request, $id)
    {
        // 
    }

    public function update(Request $request, $id)
    {
        // 
    }

    public function delete(Request $request, $id)
    {
        // 
    }

}
