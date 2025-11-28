<?php

namespace App\Listeners;

use App\Events\TicketPurchased;
use App\Mail\TicketPurchasedMail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class SendTicketByEmail implements ShouldQueue
{
    use InteractsWithQueue;

    public function handle(TicketPurchased $event)
    {
        $data = $event->data;
        $ticket = $data['ticket'];
        $user   = $data['user'];
        Mail::to($user->email)->send(new TicketPurchasedMail($ticket, $user));
        

    }
}

