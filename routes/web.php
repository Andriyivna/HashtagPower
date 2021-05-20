<?php

use Illuminate\Support\Facades\Route;
use App\Services\SettingsService;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome', [
        'site_name' => SettingsService::get('site_name'),
        'site_description' => SettingsService::get('site_description'),
        'contacts_company_name' => SettingsService::get('contacts_company_name'),
        'contacts_email' => SettingsService::get('contacts_email'),
        'contacts_telephone' => SettingsService::get('contacts_telephone'),
        'contacts_address' => SettingsService::get('contacts_address')
    ]);
});

Auth::routes(['register' => false]);

Route::get('/panel{any}', 'PanelController@index')->name('panel')->where('any', '.*');

