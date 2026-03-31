<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\SportingGoods;

class SportingGoodsSeeder extends Seeder
{
        protected array $products = [
        [
            'name'         => 'Camiseta Cruzeiro',
            'brand'        => 'Nike',
            'price'        => 199.90,
            'release_year' => 2025,
            'image'        => '/assets/images/Camiseta Cruzeiro.jpg',
            'category'     => 'Camisetas',
            'quantity'     => 50,
        ],
        [
            'name'         => 'Camiseta 2 Cruzeiro',
            'brand'        => 'Adidas',
            'price'        => 189.90,
            'release_year' => 2024,
            'image'        => '/assets/images/Camiseta 2 Cruzeiro.jpg',
            'category'     => 'Camisetas',
            'quantity'     => 40,
        ],
        [
            'name'         => 'Short 1 Cruzeiro',
            'brand'        => 'Nike',
            'price'        => 129.90,
            'release_year' => 2025,
            'image'        => '/assets/images/Short 1 Cruzeiro.jpg',
            'category'     => 'Shorts',
            'quantity'     => 35,
        ],
        [
            'name'         => 'Short 2 Cruzeiro',
            'brand'        => 'Puma',
            'price'        => 119.90,
            'release_year' => 2024,
            'image'        => '/assets/images/Short 2 Cruzeiro.jpg',
            'category'     => 'Shorts',
            'quantity'     => 30,
        ],
        [
            'name'         => 'Calça Cruzeiro',
            'brand'        => 'Adidas',
            'price'        => 159.90,
            'release_year' => 2025,
            'image'        => '/assets/images/Calça Cruzeiro.jpg',
            'category'     => 'Calças',
            'quantity'     => 25,
        ],
        [
            'name'         => 'Moletom Cruzeiro',
            'brand'        => 'Nike',
            'price'        => 249.90,
            'release_year' => 2025,
            'image'        => '/assets/images/Moletom Cruzeiro.jpg',
            'category'     => 'Moletons',
            'quantity'     => 20,
        ],
        [
            'name'         => 'Garrafa Cruzeiro',
            'brand'        => 'Nike',
            'price'        => 79.90,
            'release_year' => 2024,
            'image'        => '/assets/images/Garrafa Cruzeiro.jpg',
            'category'     => 'Acessórios',
            'quantity'     => 60,
        ],
        [
            'name'         => 'Bola Cruzeiro',
            'brand'        => 'Adidas',
            'price'        => 299.90,
            'release_year' => 2025,
            'image'        => '/assets/images/Bola Cruzeiro.jpg',
            'category'     => 'Bolas',
            'quantity'     => 15,
        ],
    ];
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach ($this->products as $product) {
            $category = Category::where('name', $product['category'])->firstOrFail();
 
            SportingGoods::firstOrCreate(
                ['name' => $product['name']],
                [
                    'brand'        => $product['brand'],
                    'price'        => $product['price'],
                    'release_year' => $product['release_year'],
                    'image'        => $product['image'],
                    'category_id'  => $category->id,
                    'quantity'     => $product['quantity'],
                ]
            );
        }
    }
}
