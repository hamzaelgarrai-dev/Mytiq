<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class TicketPurchasedMail extends Mailable
{
    use Queueable, SerializesModels;

    public $ticket;
    public $user;
    protected $pdfContents;

    /**
     * Create a new message instance.
     *
     * @param $ticket
     * @param $user
     * @param string|null $pdfContents
     */
    public function __construct($ticket, $user)
    {
        $this->ticket = $ticket;
        $this->user = $user;
        
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $mail = $this->subject("Confirmation d'achat - Ticket #{$this->ticket->id}")
                     ->view('emails.ticket_confirm')
                     ->with([
                         'ticket' => $this->ticket,
                         'user' => $this->user,
                     ]);

     

        return $mail;
    }
}
