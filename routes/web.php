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

    Route::controller(App\Http\Controllers\IndexController::class)
    ->group(function() {
        Route::get('/', 'index')->name('i.index');
    });

    // Users management
    Route::prefix('u')
        ->middleware(['role:Root|Admin'])
        ->controller(App\Http\Controllers\UserController::class)
        ->group(function() {
        Route::get('/', 'index')->name('u.index');
        Route::get('/add', 'add')->name('u.add');
        Route::post('/save', 'save')->name('u.save');
        Route::get('/edit/{id}', 'edit')->name('u.edit');
        Route::post('/update/{id}', 'update')->name('u.update');
        Route::get('/delete/{id}', 'delete')->name('u.delete');
    });

    Route::prefix('r')
        ->middleware(['role:Root|Admin'])
        ->controller(App\Http\Controllers\RolesController::class)
        ->group(function() {
        Route::get('/', 'index')->name('r.index');
        Route::post('/saveall', 'saveAll')->name('r.saveall');
        Route::get('/{id}', 'edit')->name('r.edit');
        Route::post('/save/{id}', 'save')->name('r.save');
        Route::get('/delete/{id}', 'delete')->name('r.delete');
    });

    Route::prefix('p')
    ->controller(App\Http\Controllers\ProfileController::class)
    ->group(function() {
        Route::get('/', 'index')->name('p.index');
        Route::post('/save', 'save')->name('p.save');
    });

    // Write
    Route::prefix('w')
        ->middleware(['role:Writer|Admin|Root'])
        ->controller(App\Http\Controllers\WriteController::class)
        ->group(function() {
            Route::get('/', 'form')->name('w.form');
            Route::post('/create', 'create')->name('w.create');
    });
    // Lists
    Route::prefix('l')
        ->middleware(['role:Reader|Admin|Root'])
        ->controller(App\Http\Controllers\ReadController::class)
        ->group(function() {
            Route::get('/', 'index')->name('l.index');
            Route::get('/{id}', 'view')->name('l.view');
            Route::get('/all/{id}', 'all')->name('l.all');
            Route::post('/search/{id?}', 'search')->name('l.search');
            Route::get('/edit/{id}', 'edit')->name('l.edit');
    });
    
    // Process events
});

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->middleware(['auth'])->name('dashboard');

require __DIR__.'/auth.php';
