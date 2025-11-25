<?php

namespace Database\Factories;

use App\Models\Event;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ticket>
 */
class TicketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id'  => User::inRandomOrder()->first()->id,
            'event_id' => Event::inRandomOrder()->first()->id,
            'qrcode'   => fake()->regexify('QR[A-Z0-9]{10}') 
        ];
    }
}
