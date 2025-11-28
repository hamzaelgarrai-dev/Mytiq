<?php

namespace App\Http\Controllers;

use App\Events\TicketPurchased;
use App\Models\Event;
use App\Models\Ticket;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class TicketController extends Controller
{
    /**
     * Achat d’un ticket (Event lancé)
     * POST /api/events/{id}/purchase
     */
    public function purchase(Request $request, $eventId)
    {
        $event = Event::findOrFail($eventId);

        // Vérification capacité
        if ($event->tickets()->count() >= $event->capacity) {
            return response()->json(['message' => 'Complet'], 400);
        }

        // // Création ticket (transactionnel ideal en prod)
        $ticket = Ticket::create([
            'user_id' => Auth::id(),
            'event_id' => $event->id,
            'qrcode' => uniqid('qr_'),
        ]);

        // // Dispatch event dynamique
        event(new TicketPurchased([
            'ticket' => $ticket,
            'user' => $ticket->user,
            'event' => $event,
            'qrcode' => $ticket->qrcode,
            'payload' => [
                'price' => $event->price ?? null,
            ],
        ]));

        return response()->json([
            'message' => 'Achat réussi',
            'ticket' => $ticket,
        ], 201);
    }

    /**
     * Téléchargement direct du PDF (vérifie propriétaire)
     * GET /api/tickets/{id}/download
     */
    public function download($id)
    {
        $ticket = Ticket::with('event','user')->findOrFail($id);

        if ($ticket->user_id !== Auth::id()) {
            return response()->json(['message' => 'Accès interdit'], 403);
        }

        if (empty($ticket->pdf_path) || !Storage::exists($ticket->pdf_path)) {
            // Optionnel : générer à la volée si absent (ici on renvoie erreur)
            return response()->json(['message' => 'PDF non disponible pour le moment'], 404);
        }

        // Téléchargement direct du fichier
        return response()->download(storage_path('app/' . $ticket->pdf_path));
    }

    /**
     * Voir ses propres tickets
     */
    public function myTickets()
    {
        return Ticket::with('event')
            ->where('user_id', Auth::id())
            ->get();
    }

    /**
     * Tous les tickets (admin)
     */
    public function allTickets()
    {
        return Ticket::with('user','event')->get();
    }

    /**
     * Tickets d’un événement (admin)
     */
    public function eventTickets($eventId)
    {
        return Ticket::with('user')
            ->where('event_id', $eventId)
            ->get();
    }
}

