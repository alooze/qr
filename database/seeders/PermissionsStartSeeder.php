<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionsStartSeeder extends Seeder
{
    /**
     * Create some roles and permissions.

     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'upload file']);
        Permission::create(['name' => 'download file']);

        Permission::create(['name' => 'read data']);
        Permission::create(['name' => 'write data']);
        Permission::create(['name' => 'delete data']);

        Permission::create(['name' => 'read log']);
        Permission::create(['name' => 'add user']);
        Permission::create(['name' => 'edit user']);
        Permission::create(['name' => 'delete user']);
        Permission::create(['name' => 'assign roles']);

        Permission::create(['name' => 'make admin']);

        // create roles and assign existing permissions
        $role1 = Role::create(['name' => 'Writer']);
        $role1->givePermissionTo('upload file');
        $role1->givePermissionTo('write data');
        $role1->givePermissionTo('delete data');

        $role2 = Role::create(['name' => 'Reader']);
        $role2->givePermissionTo('download file');
        $role2->givePermissionTo('read data');

        $role0 = Role::create(['name' => 'Admin']);
        $role0->givePermissionTo('upload file');
        $role0->givePermissionTo('write data');
        $role0->givePermissionTo('delete data');
        $role0->givePermissionTo('download file');
        $role0->givePermissionTo('read data');
        $role0->givePermissionTo('read log');
        $role0->givePermissionTo('add user');
        $role0->givePermissionTo('edit user');
        $role0->givePermissionTo('delete user');
        $role0->givePermissionTo('assign roles');

        // super admin
        $role99 = Role::create(['name' => 'Root']);
        $role99->givePermissionTo('make admin');
        $role99->givePermissionTo('upload file');
        $role99->givePermissionTo('write data');
        $role99->givePermissionTo('delete data');
        $role99->givePermissionTo('download file');
        $role99->givePermissionTo('read data');
        $role99->givePermissionTo('read log');
        $role99->givePermissionTo('add user');
        $role99->givePermissionTo('edit user');
        $role99->givePermissionTo('delete user');
        $role99->givePermissionTo('assign roles');

        $admin = \App\Models\User::factory()->create([
            'name' => 'Root',
            'email' => 'admin@admin.com',
        ]);
        $admin->assignRole($role99);

        // create a Admin user
        $user0 = \App\Models\User::factory()->create([
            'name' => 'Admin User',
            'email' => 'admin@user.com',
        ]);
        $user0->assignRole($role0);

        // create a Writer user
        $user1 = \App\Models\User::factory()->create([
            'name' => 'Writer User',
            'email' => 'writer@user.com',
        ]);
        $user1->assignRole($role1);

        // create a Reader user
        $user2 = \App\Models\User::factory()->create([
            'name' => 'Reader User',
            'email' => 'reader@user.com',
        ]);
        $user2->assignRole($role2);        
    }
}
