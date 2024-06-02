<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use PhpOffice\PhpSpreadsheet\IOFactory;
use App\Models\Ulist;
use App\Models\UlistLine;


class WriteController extends Controller
{
    public function form()
    {
        return view('write.form');
    }

    public function create(Request $request)
    {
        $file = $request->file('ufile');
 
        $name = $file->getClientOriginalName();
        $extension = $file->getClientOriginalExtension();

        $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'comment' => ['nullable', 'string', 'max:255'],
            'ufile' => ['required', 'file', 'mimes:xlsx' /*'mimetypes:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'*/],
        ]);

        set_time_limit(6000);

        $fName = $file->hashName();
        $path = Storage::putFileAs(
            'ufiles', $request->file('ufile'), $fName
        );

        $inputFileName = storage_path('app/' . $path);
        $spreadsheet = IOFactory::load($inputFileName);
        $sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
        
        $dataStartRow = 2;
        $header = [];

        foreach ($sheetData as $strNum => $colLetter) {
            while (trim($colLetter['A']) == '') {
                continue;
            }

            // читаем заголовки
            $header = $colLetter;
            $dataStartRow = $strNum + 1;
            break;
        }

        // dd($header);

        $uList = Ulist::create([
            'title' => $request->title,
            'comment' => $request->comment ?? '',
            'user_id' => $request->user()->id,
            'filename' => $path,
            'filename_orig' => $name,
            'header' => json_encode($header),
        ]);

        // dd($uList);

        foreach ($sheetData as $strNum => $colLetter) {
            if ($strNum < $dataStartRow) {
                continue;
            }

            UlistLine::create([
                'ulist_id' => $uList->id,
                'line_num' => $strNum,
                'data' => json_encode($colLetter),
                'lex_data' => implode('|', array_values($colLetter)),
            ]);
        }

        // if (auth()->user()->can('read data')) {
            return back()->with('status', 'Список сохранен');
        // }
    }
}
