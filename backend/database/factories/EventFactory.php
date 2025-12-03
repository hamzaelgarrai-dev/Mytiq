<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title'=>fake()->title(),
            'description'=>fake()->paragraph(),
            'category'=>fake()->randomElement(['sport','culture','music','cinema']),
            'event_date'=>fake()->dateTime(),
            'location'=>fake()->city(),
            'price'=>fake()->randomFloat(2, 100, 1000),
            'capacity'=>fake()->randomNumber(4),
            'status'=>fake()->randomElement(['disponible','terminer']),
            'aviliable_tickets'=>fake()->randomNumber(3),
            'image_url'=>fake()->imageUrl()
            
        ];
    }
}
