<?php

namespace App\Services;

use App\Models\Ticket;
use Barryvdh\DomPDF\Facade\Pdf;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\Storage;

class TicketPdfService
{
    public function generateTicketPdf(Ticket $ticket)
    {
        // Charger les relations nécessaires
        $ticket->load('event', 'user');

        // Générer le QR code
        $qrCode = $this->generateQrCode($ticket);

        // Générer le PDF
        $pdf = Pdf::loadView('tickets.pdf', [
            'ticket' => $ticket,
            'qrCode' => $qrCode
        ]);

        // Créer le nom du fichier
        $fileName = 'ticket-' . $ticket->id . '.pdf';
        $filePath = 'tickets/' . $fileName;

        // Sauvegarder le PDF dans storage
        Storage::put($filePath, $pdf->output());

        // Retourner le chemin du fichier
        return $filePath;
    }

    private function generateQrCode(Ticket $ticket)
    {
        // Créer le contenu du QR code
        $qrContent = "TICKET-{$ticket->id}-{$ticket->user_id}-{$ticket->event_id}";

        // Générer le QR code en base64
        $qrCode = base64_encode(QrCode::format('png')
            ->size(200)
            ->generate($qrContent));

        return $qrCode;
    }
}
