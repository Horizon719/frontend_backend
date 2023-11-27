<?php

namespace App\Http\Controllers;

use App\Models\Choosen;
use Illuminate\Http\Request;

class ChoosenController extends Controller
{
    public function index() {
        return Choosen::all();
    }

    public function store(Request $request) {
        $writer = new Choosen();
        $writer->writer_id = $request->writer_id;
        $writer->nev = $request->nev;
        $writer->szul = $request->szul;
        $writer->save();
    }

    public function delete($id) {
        return Choosen::find($id)->delete();
    }
}
