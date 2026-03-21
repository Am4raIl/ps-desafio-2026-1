<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSportingGoodsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'min:3', 'max:100', 'string'],
            'brand' => ['required', 'min:3', 'max:100', 'string'],
            'price' => ['required', 'numeric', 'min:0'],
            'release_year' => ['required', 'numeric', 'digits:4', 'max:' .date('Y')],
            'image' => ['file'],
            'category_id' => ['required'],
            'quantity' => ['required', 'integer', 'min:0'],
        ];
    }
}
