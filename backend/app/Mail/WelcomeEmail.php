<?php

namespace App\Mail;

use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeEmail extends Mailable 
{
    use Queueable, SerializesModels;

    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }

    // Only this method should exist
    public function build()
    {
        return $this->subject('Welcome Email')
                    ->html("
                        <h1>Welcome, {$this->user->name}!</h1>
                        <p>Thank you for joining our platform.</p>
                        <p>We are happy to have you with us!</p>
                    ");
    }
}
