<?php

namespace App\Http\Controllers;

use App\Models\NewsLetter;
use App\Http\Requests\StoreNewsLetterRequest;
use App\Http\Requests\UpdateNewsLetterRequest;

class NewsLetterController extends Controller
{
    public function subscribe(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:news_letters,email'
        ]);

        try {
            $subscriber = Newsletter::create([
                'email' => $request->email
        
            ]);

            return response()->json([
                'message' => 'Successfully subscribed to newsletter',
                'subscriber' => $subscriber
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Failed to subscribe',
                'error' => $e->getMessage()
            ], 500);
        }
    }

   
    public function index()
    {
        $subscribers = Newsletter::all();
        return response()->json($subscribers);
    }

    
    public function show($id)
    {
        $subscriber = Newsletter::find($id);
        
        if (!$subscriber) {
            return response()->json(['message' => 'Subscriber not found'], 404);
        }
        
        return response()->json($subscriber);
    }

    public function destroy($id)
    {
        $subscriber = Newsletter::find($id);
        
        if (!$subscriber) {
            return response()->json(['message' => 'Subscriber not found'], 404);
        }
        
        $subscriber->delete();
        
        return response()->json(['message' => 'Subscriber removed successfully']);
    }
}