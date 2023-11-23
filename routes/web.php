<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\XController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return redirect('/contact');
})->name('home');;


Route::get('/contact', function () {
    return view('Contact');
})->name('ck');

Route::post('/contact', function () {
    return redirect('/next-view');
});

Route::post('/uwu', [XController::class, 'uxux']);

Route::get('/mainpage', function () {
    $successMessage = session('pks'); // Access the 'success' message from the session

    // Use the $successMessage variable as needed
    if ($successMessage) {
        // Do something with the success message
        // For instance, pass it to the view or use it in your logic
        return view('About')->with('success', $successMessage);
    } else {
        // Handle cases where there's no success message
        return view('MainPage'); // Render the view without the success message
    }
})->name('blog');


Route::get('/next-view', [XController::class, 'showNextView'])->name('nextView');

Route::get('/getSessionData', function () {
    $x = json_decode(session('pks'), true);
    return response()->json($x);
});