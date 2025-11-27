<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TicketController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
});


/// Achat
Route::post('/events/{id}/purchase', [TicketController::class, 'purchase'])
    ->middleware('auth:sanctum');

// Téléchargement ticket 
Route::get('/tickets/{id}/download', [TicketController::class, 'download'])
    ->middleware('auth:sanctum');

// Liste tickets par event (admin)
Route::get('/admin/events/{id}/tickets', [TicketController::class, 'eventTickets'])
    ->middleware(['auth:sanctum', 'admin']);

