<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function roles()
    {
        // return $this->hasMany(Comment::class, 'foreign_key', 'local_key');
        // return $this->hasMany(Role::class);
        return $this->hasManyThrough(Role::class, RoleUser::class, 'user_id', 'id');

        // select `roles`.*, `roles_users`.`user_id` as `laravel_through_key` from `roles` inner join `roles_users` on `roles_users`.`id` = `roles`.`role_user_id` where `roles_users`.`user_id` = 1
    }
}
