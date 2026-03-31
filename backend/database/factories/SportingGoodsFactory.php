<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Category;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\SportingGoods>
 */
class SportingGoodsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
        {
        return [
            'name'         => $this->faker->words(3, true),
            'brand'        => $this->faker->randomElement(['Nike', 'Adidas', 'Puma']),
            'price'        => $this->faker->randomFloat(2, 50, 300),
            'release_year' => $this->faker->numberBetween(2020, 2025),
            'image'        => '/assets/images/Logo.png',
            'category_id'  => $this->faker->randomElement(Category::pluck('id')->toArray()),
            'quantity'     => $this->faker->numberBetween(1, 20),
        ];
    }
}
