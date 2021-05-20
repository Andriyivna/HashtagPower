<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddContactsSettings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        DB::table('settings')->insert(
            [
                'name'=>'site_description',
                'value'=>'Best auto repair shop',
                'type'=>'string'
            ]
        );
        DB::table('settings')->insert(
            [
                'name'=>'contacts_company_name',
                'value'=>'Johnson Motors',
                'type'=>'string'
            ]
        );
        DB::table('settings')->insert(
            [
                'name'=>'contacts_email',
                'value'=>'johnson_motors@gmail.com',
                'type'=>'string'
            ]
        );
        DB::table('settings')->insert(
            [
                'name'=>'contacts_telephone',
                'value'=>'8448364195',
                'type'=>'string'
            ]
        );
        DB::table('settings')->insert(
        [
            'name'=>'contacts_address',
            'value'=>'6800 Brooklyn Blvd Minneapolis MN',
            'type'=>'string'
        ]
    );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
