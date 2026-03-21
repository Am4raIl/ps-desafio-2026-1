<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Throwable;

class SportingGoods extends Model
{
    /** @use HasFactory<\Database\Factories\SportingGoodsFactory> */
    use HasFactory, HasUuids;

    protected $fillable = [
        'name',
        'brand',
        'price',
        'release_year',
        'image',
        'category_id',
        'quantity',
    ];

    public function category(){
        return $this->belongsTo(Category::class, 'category_id', 'id');
    }

    protected static function booted(){
        self::deleted(function(SportingGoods $sportingGoods){
            try{
                $image_name = explode('sporting_goods/', $sportingGoods['image']);
                Storage::disk('public')->delete('sporting_goods/'.$image_name[1]);
            }catch(Throwable){}
        });
    }
}
