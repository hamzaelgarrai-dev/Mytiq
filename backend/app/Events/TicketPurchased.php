<?php

namespace App\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class TicketPurchased
{
    use Dispatchable, SerializesModels;

    /**
     * Tableau contenant 'ticket', 'user', 'event', 'payload'...
     *
     * @var array
     */
    public $data;

    /**
     * Create a new event instance.
     *
     * @param array $data
     */
    public function __construct(array $data)
    {
        $this->data = $data;
    }
}

