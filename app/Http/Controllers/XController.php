<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use Illuminate\Http\Request;

class XController extends Controller
{
    public function submit(ContactRequest $req)
    {
        // dd($req);
        // $validation = $req->validate(
        //     [
        //         'subject' => 'required|min:5|max:50',
        //         'message' => 'required|min:15|max:500'
        //     ]
        // );
    }

    public function destroy(Request $request){
        
        $data = [
            "title" => "UWU",
            "author" => "XUX",
        ];
        // // $data = $request->all();

        echo json_encode($data);
        
        return redirect()->route('mainpage')->with('success', '');
    }


    public function uxux(Request $request){ 
        $data = $request->all();
        session()->put("pks", json_encode($data));
        return redirect()->route('blog')->with('posts', json_encode($data));
    }

    public function index(){
        return view('MainPage');
    }


    public function showNextView()
    {
        // Render the next view
        return view('About');
    }
}
