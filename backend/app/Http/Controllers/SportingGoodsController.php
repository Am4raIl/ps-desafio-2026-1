<?php

namespace App\Http\Controllers;

use App\Http\Requests\BuySportingGoodsRequest;
use App\Models\SportingGoods;
use App\Http\Requests\StoreSportingGoodsRequest;
use App\Http\Requests\UpdateSportingGoodsRequest;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class SportingGoodsController extends Controller
{
    protected $sportingGoods;

    public function __construct(SportingGoods $sportingGoods){
        $this->sportingGoods = $sportingGoods;
    }

    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $sportingGoods = $this->sportingGoods->with('category')->get();
        return response()->json($sportingGoods, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSportingGoodsRequest $request): JsonResponse
    {
        $data = $request->validated();
        
        if($request->hasFile('image')){
            $path = $request->file('image')->store('sporting_goods', 'public');
            $data['image'] = url('storage/' . $path);
        }
        
        $sportingGoods = $this->sportingGoods->create($data);
        $id = $sportingGoods->id;
        $sportingGoods_category = $this->sportingGoods->with('category')->findOrFail($id);

        return response()->json($sportingGoods_category, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($id): JsonResponse
    {
        $sportingGoods = $this->sportingGoods->with('category')->findOrFail($id);
        return response()->json($sportingGoods, Response::HTTP_OK);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSportingGoodsRequest $request, $id): JsonResponse
    {
        $sportingGoods = $this->sportingGoods->with('category')->findOrFail($id);
        $data = $request->validated();

        if($request->hasFile('image')){
            try{
                $image_name = explode('sporting_goods/', $sportingGoods['image']);
                Storage::disk('public')->delete('sporting_goods/' . $image_name[1]);

            } catch (Throwable){

            } finally {
                $path = $request->file('image')->store('sporting_goods', 'public');
                $data['image'] = url('/storage/' . $path);
            }
        }
        $sportingGoods->update($data);

        return response()->json($sportingGoods, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): JsonResponse
    {
        $sportingGoods = $this->sportingGoods->findOrFail($id);
        $sportingGoods->delete();
        return response()->json(['message' => 'Artigo esportivo deletado!']);
    }

    public function buy($id): JsonResponse
    {
        $sportingGoods = $this->sportingGoods->findOrFail($id);
        if($sportingGoods->quantity <= 0){
            return response()->json(['message' => 'Produto indisponível'], Response::HTTP_BAD_REQUEST);
        }
        $sportingGoods->quantity -= 1;
        $sportingGoods->save();
        return response()->json(['data' => $sportingGoods, 'message' => 'Compra realizada com sucesso!'], Response::HTTP_OK);
    }
}
