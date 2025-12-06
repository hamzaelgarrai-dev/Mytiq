<?php

namespace App\Http\Controllers;

use App\Events\UserRegistered;
use App\Http\Requests\loginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => $request->password,
        ]);

        UserRegistered::dispatch($user);
        return response()->json(['message' => 'created successfully']);
    }
     public function login(loginRequest $request)
    {
        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Logged in',
            'token' => $token,
            'role'=>$user->role
        ]);
    }
    public function logout(Request $request)
    {
       $request->user()->tokens()->delete();

        return response()->json(['message' => 'Logged out']);
         
    }
}
