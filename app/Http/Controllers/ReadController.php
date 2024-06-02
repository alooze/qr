<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ulist;
use App\Models\UlistLine;

class ReadController extends Controller
{
    public function view($id)
    {
        $uList = Ulist::findOrFail($id);
        $firstLine = $uList->lines()->first();
        $cnt = $uList->lines()->count();
        $hdr = $uList->expandHeader();
        $data = $firstLine->expandData();
        // $hdr = json_decode($uList->header, true);
        // $data = json_decode($firstLine->data, true);
        
        return view('read.view', 
            compact('uList', 'firstLine', 'cnt', 'hdr', 'data')
        );
    }

    public function all($id)
    {
        $uList = Ulist::findOrFail($id);
        $lines = $uList->lines()->get();
        $cnt = $uList->lines()->count();
        $full = false;

        return view('read.all', 
            compact('uList', 'lines', 'cnt', 'id', 'full')
        );
    }

    public function search(Request $request, $id = null)
    {
        $request->validate([
            'search' => ['required', 'string', 'min:3']
        ]);

        $str = $request->search;

        if ($id && !isset($request->full)) {
            $uList[] = Ulist::findOrFail($id);
            // $lines[$id] = UlistLine::search($str)->where('uline_id', $id)->get();
            $lines[$id] = UlistLine::where('ulist_id', $id)
                        ->where('lex_data', 'like', '%' . $str . '%')
                        ->get();
        } else {
            // $linesAll = UlistLine::search($str)->get();
            $linesAll = UlistLine::where('lex_data', 'like', '%' . $str . '%')
                        ->get();
            foreach ($linesAll as $l) {
                $lines[$l->ulist_id] = $l;
            }

            $uList = Ulist::whereIn('id', array_keys($lines));
        }
        
        if ($request->full) {
            $full = true;
        } else {
            $full = false;
        }

        return view('read.search', 
            compact('str', 'lines', 'uList', 'full', 'id')
        );
    }

    public function edit($id)
    {
        $line = UlistLine::findOrFail($id);
        dd($line);

        return view('read.all', 
            compact('uList', 'lines', 'cnt', 'id', 'full')
        );
    }
}
