<?php

namespace App\Http\Controllers;

use App\Models\Event;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Events\TicketPurchased;

class TicketController extends Controller
{
    /**
     * Achat d’un ticket
     */
    public function purchase(Request $request, $eventId)
    {
        $event = Event::findOrFail($eventId);

        // Vérifier la capacité
        if ($event->tickets()->count() >= $event->capacity) {
            return response()->json([
                'message' => 'Plus de places disponibles.'
            ], 400);
        }

        // Création du ticket
        $ticket = Ticket::create([
            'user_id' => Auth::id(),
            'event_id' => $event->id,
            'price' => $event->price,
        ]);

        // Déclenche l’événement (notification interne, pas de mail)
        event(new TicketPurchased($ticket));

        return response()->json([
            'message' => 'Achat réussi 🎉',
            'ticket' => $ticket
        ], 201);
    }

    /**
     * Télécharger un PDF 
     */
    public function download($ticketId)
    {
        $ticket = Ticket::with('event', 'user')->findOrFail($ticketId);

        if ($ticket->user_id !== Auth::id()) {
            return response()->json(['message' => 'Accès interdit'], 403);
        }

        return response()->json([
            'message' => 'PDF non disponible car vous utilisez React.',
            'ticket' => $ticket
        ]);
    }

    /**
     * Liste des tickets d’un événement 
     */
    public function eventTickets($eventId)
    {
        $tickets = Ticket::with('user')
            ->where('event_id', $eventId)
            ->get();

        return response()->json($tickets);
    }

}

