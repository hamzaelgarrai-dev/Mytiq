<?php

namespace App\Listeners;

use App\Events\TicketPurchased;
use Illuminate\Support\Facades\Log;

class SendTicketEmail
{
    public function handle(TicketPurchased $event)
    {
        Log::info("Ticket acheté ID : " . $event->ticket->id);
    }
}



