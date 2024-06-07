<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Models\Ulist;
use App\Models\UlistLine;
use App\Models\Person;
use Spatie\Permission\Models\Role;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

class IndexController extends Controller
{
    public $user;

    public function __construct()
    {
        $this->user = Auth::user();
    }

    public function index(Request $request)
    {
        $lists = Ulist::get();
        return view('admin.index', compact('lists'));
    }

    public function people()
    {
        $people = Person::orderBy('surname', 'asc')->get();
        return view('admin.people', compact('people'));
    }

    public function search(Request $request)
    {
        $request->validate([
            'search' => ['required', 'string', 'min:3']
        ]);

        $str = $request->search;

        $lineIds = UlistLine::where('lex_data', 'like', '%' . $str . '%')
                        ->pluck('id');
        // dd($lineIds);
        $people = Person::whereIn('ulistline_id', $lineIds)
                    ->orderBy('surname', 'asc')->get();
        return view('admin.search', compact('people', 'str'));
    } 

    public function edit($id)
    {
        $p = Person::findOrFail($id);
        return view('admin.edit', compact('p'));
    } 

    public function save(Request $request, $id)
    {
        if (!auth()->user()->can('write data')) {
            abort(403);
        }

        $p = Person::findOrFail($id);

        $request->validate([
            'name' => ['required', 'string', 'min:3'],
            'surname' => ['required', 'string', 'min:3'],
            'middlename' => ['nullable', 'string', 'min:3'],
            'dob' => ['required', 'string', 'min:4'],
            'email' => ['required', 'email'],
            'phone' => ['required', 'string', 'min:3'],
            'addr' => ['nullable', 'string', 'min:3'],
            'work' => ['required', 'string', 'min:3'],
            'comment' => ['nullable'],
        ]);

        $p->name = $request->name;
        $p->surname = $request->surname;
        $p->middlename = $request->middlename;
        $p->dob = $request->dob;
        $p->email = $request->email;
        $p->phone = $request->phone;
        $p->addr = $request->addr ?? '';
        $p->work = $request->work;
        $p->comment = $request->comment ?? '';
        $p->save();

        return back()->with('status', 'Данные сохранены');
    } 

    public function export($str = null)
    {
        if ($str) {
            $lineIds = UlistLine::where('lex_data', 'like', '%' . $str . '%')
                        ->pluck('id');
            $people = Person::whereIn('ulistline_id', $lineIds)
                    ->orderBy('surname', 'asc')->get();
        } else {
            $people = Person::orderBy('surname', 'asc')->get();
        }
        
        if ($people->count() < 1) {
            return abort(404);
        }

        $spreadsheet = new Spreadsheet();

        // Set document properties
        $spreadsheet->getProperties()->setCreator('Maarten Balliauw')
            ->setLastModifiedBy('Maarten Balliauw')
            ->setTitle('Office 2007 XLSX Test Document')
            ->setSubject('Office 2007 XLSX Test Document')
            ->setDescription('Test document for Office 2007 XLSX, generated using PHP classes.')
            ->setKeywords('office 2007 openxml php')
            ->setCategory('Result file');

        // Add some data
        $spreadsheet->setActiveSheetIndex(0)
            ->setCellValue('A1', 'Фамилия')
            ->setCellValue('B1', 'Имя')
            ->setCellValue('C1', 'E-mail')
            ->setCellValue('D1', 'Номер телефона')
            ->setCellValue('E1', 'Место работы')
            ->setCellValue('F1', 'Дата рождения');
 
        $i = 2;

        foreach($people as $p) {
            $spreadsheet->setActiveSheetIndex(0)
                ->setCellValue('A' . $i, $p->surname)
                ->setCellValue('B' . $i, $p->name)
                ->setCellValue('C' . $i, $p->email)
                ->setCellValue('D' . $i, $p->phone)
                ->setCellValue('E' . $i, $p->work)
                ->setCellValue('F' . $i, $p->dob);
            $i++;
        }

        // Rename worksheet
        $spreadsheet->getActiveSheet()->setTitle('Результаты');

        // Set active sheet index to the first sheet, so Excel opens this as the first sheet
        $spreadsheet->setActiveSheetIndex(0);

        // Redirect output to a client’s web browser (Xlsx)
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment;filename="export.xlsx"');
        header('Cache-Control: max-age=0');
        // If you're serving to IE 9, then the following may be needed
        header('Cache-Control: max-age=1');

        // If you're serving to IE over SSL, then the following may be needed
        header('Expires: Mon, 26 Jul 1997 05:00:00 GMT'); // Date in the past
        header('Last-Modified: ' . gmdate('D, d M Y H:i:s') . ' GMT'); // always modified
        header('Cache-Control: cache, must-revalidate'); // HTTP/1.1
        header('Pragma: public'); // HTTP/1.0

        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        $writer->save('php://output');
        exit;
    }
}
