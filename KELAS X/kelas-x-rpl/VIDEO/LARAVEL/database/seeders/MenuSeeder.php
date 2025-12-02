<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MenuSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('menus')->insert([
            [
                'idkategori' => 1,
                'menu' => 'Bakso',
                'gambar' => 'bakso.jpg',
                'deskripsi' => 'Bakso Enak',
                'harga' => 10000,
            ],
            [
                'idkategori' => 1,
                'menu' => 'Soto',
                'gambar' => 'soto.jpg',
                'deskripsi' => 'Soto Enak',
                'harga' => 50000,
            ],
            [
                'idkategori' => 2,
                'menu' => 'Es Teh',
                'gambar' => 'esteh.jpg',
                'deskripsi' => 'Es Teh Manis',
                'harga' => 30000,
            ],
            [
                'idkategori' => 2,
                'menu' => 'Es Jeruk',
                'gambar' => 'esjeruk.jpg',
                'deskripsi' => 'Es Jeruk Manis',
                'harga' => 30000,
            ],
        ]);
    }
}
