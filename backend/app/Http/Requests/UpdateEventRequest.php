<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateEventRequest extends FormRequest
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
            "title"=> "required|string|max:255",
            "description"=> "required|string|max:255",
            "category"=> "required|string|max:255",
            "event_date"=> "required|date",
            "location"=> "required|string|max:255",
            "price"=> "required|integer",
            "capacity"=> "required|integer",
            "status"=> "required|string|max:255",
            "aviliable_tickets"=> "required|integer",
            "image"=> "required|image|max:4048"
        ];
    }
}
