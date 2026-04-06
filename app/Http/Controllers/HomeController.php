<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        //
        $data = [];
        $settings = \App\Models\Setting::get(['title', 'content']);
        foreach ($settings as $setting) {
            $data[$setting->title] = json_decode($setting->content, true);
        }

        // dd($data);


        
        return inertia('home', [
            'content' => $data,
        ]);
    }
}