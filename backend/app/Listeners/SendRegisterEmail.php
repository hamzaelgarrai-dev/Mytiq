<?php

namespace App\Listeners;

use App\Events\UserRegisterd;
use App\Events\UserRegistered;
use App\Jobs\RegestringEmail;
use App\Mail\WelcomeEmail;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendRegisterEmail
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(UserRegistered $event): void
    {
        $user = $event->user;

        RegestringEmail::dispatch($user);


      
    }
}
