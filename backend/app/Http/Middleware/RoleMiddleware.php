<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RoleMiddleware
{
    /**
     * Vérifie que l'utilisateur est admin
     */
    public function handle(Request $request, Closure $next)
    {
        $user = Auth::user();

        if ($user->role !== 'admin') {
            return response()->json(['message' => 'Accès interdit'], 403);
        }

        return $next($request);
    }
}
