<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    protected array $categories = [
        ['name' => 'Camisetas'],
        ['name' => 'Shorts'],
        ['name' => 'Calças'],
        ['name' => 'Moletons'],
        ['name' => 'Acessórios'],
        ['name' => 'Bolas'],
    ];
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->categories as $category) {
            Category::firstOrCreate(['name' => $category['name']]);
        }
    }
}
