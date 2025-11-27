<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Http\Requests\StoreEventRequest;
use App\Http\Requests\UpdateEventRequest;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $event = Event::all();
        return response()->json([
        'success' => true,
        'message' => 'event liste',
        'data' => $event]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEventRequest $request)
    {
        $uploadedFileUrl = Cloudinary::upload($request->file('image')->getRealPath())->getSecurePath();

        $event = Event::create([
            'title'=> $request->title,
            'description'=> $request->description,
            'category'=>$request->category,
            'event_date'=> $request->event_date,
            'location'=> $request->location,
            'price'=> $request->price,
            'capacity'=> $request->capacity,
            'status'=> $request->status,
            'aviliable_tickets'=> $request->aviliable_tickets,
            'image_url'=> $uploadedFileUrl


        ]);
        return response()->json([
        'success' => true,
        'message' => 'event created',
        'data' => $event
        ]);

    }

    /**
     * Display the specified resource.
     */
    public function show(Event $event , $id)
    {
        $event = Event::findOrFail($id);
         return response()->json([
        'success' => true,
        'message' => 'event created',
        'data' => $event
        ]);

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEventRequest $request, $id)
    {
        $event = Event::findOrFail($id);
        $event->title = $request->title;
        $event->description = $request->description;
        $event->category = $request->category;
        $event->event_date = $request->event_date;
        $event->location = $request->location;
        $event->price = $request->price;
        $event->capacity = $request->capacity;
        $event->status = $request->status;
        $event->aviliable_tickets = $request->aviliable_tickets;
        if ($request->hasFile('image')) {
        $uploadedFileUrl = Cloudinary::upload($request->file('image')->getRealPath())->getSecurePath();
        $event->image_url = $uploadedFileUrl;

        $event->update();

        return response()->json([
        'success' => true,
        'message' => 'event updated',
        'data' => $event
    ]);

    }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Event $event , $id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        return response()->json([
        'success' => true,
        'message' => 'event deleted',
        
    ]);

    }
}
