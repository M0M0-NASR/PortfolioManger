<?php

namespace Database\Factories;

use App\Models\Setting;
use Illuminate\Database\Eloquent\Factories\Factory;

use function Laravel\Prompts\title;

/**
 * @extends Factory<Setting>
 */
class SettingFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'title' => 'hero_section',
            'content' => json_encode([
                'title' => 'Welcome to My Portfolio',
                'description' => 'I am a passionate developer with experience in building web applications. I specialize in Laravel and Vue.js.',
                'image' => 'https://example.com/hero-image.jpg',
                'cv' => 'https://example.com/my-cv.pdf',
                'whatsapp' => 'https://wa.me/1234567890',
            ]),
        ];
    }
}