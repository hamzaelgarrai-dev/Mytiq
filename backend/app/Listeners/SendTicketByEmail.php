<?php

namespace App\Listeners;

use App\Events\TicketPurchased;
use App\Mail\TicketPurchasedMail;
use App\Services\TicketPdfService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendTicketByEmail implements ShouldQueue
{
    use InteractsWithQueue;

    protected $pdfService;

    public function __construct(TicketPdfService $pdfService)
    {
        $this->pdfService = $pdfService;
    }

    public function handle(TicketPurchased $event)
    {
        $data = $event->data;
        $ticket = $data['ticket'];
        $user   = $data['user'];

        // Générer le PDF du billet
        try {
            $pdfPath = $this->pdfService->generateTicketPdf($ticket);
            $ticket->pdf_path = $pdfPath;
            $ticket->save();
        } catch (\Exception $e) {
            Log::error('Erreur génération PDF: ' . $e->getMessage());
        }

        // Envoyer l'email
        Mail::to($user->email)->send(new TicketPurchasedMail($ticket, $user));
    }
}

