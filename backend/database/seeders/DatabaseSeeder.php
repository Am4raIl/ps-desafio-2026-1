<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\SportingGoods;
use App\Models\User;
use Database\Factories\SportingGoodsFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            CategorySeeder::class,
            SportingGoodsSeeder::class,
        ]);
        
        Category::factory(4)->create();
        SportingGoods::factory(4)->create();
        User::factory(10)->create();

        $user = User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
        ]);
        $user->assignPermission('admin');
    }
}
