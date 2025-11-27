<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\EventController;

use App\Http\Controllers\NewsletterController;

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
// Event EndPoints

Route::middleware(['auth:sanctum', 'admin'])->group(function () {
    Route::post('/events' , [EventController::class , 'store']);
    Route::put('/events/{id}' , [EventController::class , 'update']);
    Route::delete('/events/{id}' , [EventController::class , 'destroy']);
});

Route::get('/events' , [EventController::class , 'index']);
Route::get('/events/{id}' , [EventController::class , 'show']);



// Newsletter subscription (public)
Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);

// Newsletter subscribers management (admin only)
Route::get('/newsletter/subscribers', [NewsletterController::class, 'index']);
Route::get('/newsletter/subscribers/{id}', [NewsletterController::class, 'show']);
Route::delete('/newsletter/subscribers/{id}', [NewsletterController::class, 'destroy']);
