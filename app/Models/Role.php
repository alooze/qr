<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    use HasFactory;

    public const ROLE_ROOT = 99;
    public const ROLE_ADMIN = 88;
    public const ROLE_MANAGER = 77;
    public const ROLE_ORGANIZER = 22;
    public const ROLE_CONTROL = 11;
}
