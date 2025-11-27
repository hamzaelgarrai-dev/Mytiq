<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Newsletter extends Model
{
    use HasFactory;

    
    protected $table = 'news_letters';

    
    protected $fillable = [
        'email'
    ];
    
    public function user()
    {
        return $this->belongsTo(User::class, 'email', 'email');
    }
}