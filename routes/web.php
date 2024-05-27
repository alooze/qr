<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group([
    'as' => 'a.', 
    'middleware' => ['auth']
],  function() {

    Route::controller(App\Http\Controllers\IndexController::class)->group(function() {
        Route::get('/', 'index')->name('i.index');
    });

    // Users management
    Route::prefix('u')->controller(App\Http\Controllers\UserController::class)->group(function() {
        Route::get('/', 'index')->name('u.index');
        Route::get('/add', 'add')->name('u.add');
        Route::post('/save/{id?}', 'save')->name('u.save');
        Route::get('/update/{id}', 'update')->name('u.update');
        Route::post('/delete/{id}', 'delete')->name('u.delete');
    });

    Route::prefix('r')->controller(App\Http\Controllers\RolesController::class)->group(function() {
        Route::get('/', 'index')->name('r.index');
        Route::post('/add', 'addRole')->name('r.add');
        Route::post('/delete', 'DelRole')->name('r.delete');
    });

    Route::prefix('p')->controller(App\Http\Controllers\ProfileController::class)->group(function() {
        Route::get('/', 'index')->name('p.index');
        Route::post('/save', 'save')->name('p.save');
    });

    // Event management
    // Logs
    // Process events
});

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
