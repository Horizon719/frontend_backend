<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Choosen extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $primaryKey = 'writer_id';

    protected $fillable = [
        'writer_id',
        'nev',
        'szul',
    ];
}
