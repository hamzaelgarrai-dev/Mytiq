<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\NewsletterController;


// Newsletter subscription (public)
Route::post('/newsletter/subscribe', [NewsletterController::class, 'subscribe']);

// Newsletter subscribers management (admin only)
Route::get('/newsletter/subscribers', [NewsletterController::class, 'index']);
Route::get('/newsletter/subscribers/{id}', [NewsletterController::class, 'show']);
Route::delete('/newsletter/subscribers/{id}', [NewsletterController::class, 'destroy']);