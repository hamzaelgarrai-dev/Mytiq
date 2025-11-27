<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = ['title' , 'description','category', 'event_date', 'location', 'price', 'capacity', 'status' , 'aviliable_tickets', 'image_url'];

        public function tickets(){
        
        return $this->hasMany(Ticket::class);
    }
}


