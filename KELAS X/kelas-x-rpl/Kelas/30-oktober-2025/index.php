<!-- <form action="" method="post">
    <input type="number" name = "tanggal" placeholder= "masukkan tanggal"><br>
    <input type="number" name = "bulan" placeholder= "masukkan bulan"><br>
    <input type="submit" name = "kirim" placeholder= "zodiak anda">
</form> -->

<form action="" method="post">
    <input type="number" name="nomer1" placeholder="Masukan Nomor" >
    <br>
    <input type="number" name="nomer2" placeholder="Masukan Nomor" >
    <br>
    <input type="submit" name="tambah" value="Tambah">
    <input type="submit" name="kurang" value="Kurang">
    <input type="submit" name="kali" value="Kali">
    <input type="submit" name="bagi" value="Bagi">
</form>
<?php

if (isset($_POST['tambah'])){
    $a = (float)$_POST['nomer1'];
    $b = (float)$_POST['nomer2'];
    echo "Hasilpenjumlahan: ". tambah($a, $b);
}

if (isset($_POST['kurang'])){
    $a = (float)$_POST['nomer1'];
    $b = (float)$_POST['nomer2'];
    echo "Hasilpengurangan: ". kurang($a, $b);
}

if (isset($_POST['kali'])){
    $a = (float)$_POST['nomer1'];
    $b = (float)$_POST['nomer2'];
    echo "Hasilperkalian: ". kali($a, $b);
}

if (isset($_POST['bagi'])){
    $a = (float)$_POST['nomer1'];
    $b = (float)$_POST['nomer2'];
    echo "Hasilpembagian: ". bagi($a, $b);
}

// if (isset($_POST["kirim"])){
//     $tanggal = $_POST["tanggal"];
//     $bulan = $_POST["bulan"];

//     zodiak($bulan , $tanggal);
// }


function belajar() {
echo "hari ini saya belajar function";
}
//memanggil function


// function cektanggal( $tanggal) {

// if ($tanggal > 0 && $tanggal < 32) {
//     echo "tanggal benar!";
// } else {
//     echo "tanggal salah!";
// }
// }
// cektanggal(0);
// cektanggal(1);
// cektanggal(100);

function zodiak($tanggal, $bulan){
if ($tanggal > 0 && $tanggal < 32 && $bulan > 0 && $bulan < 12) {
    if ($bulan == 1) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:capricorn";
         }   else {
            echo "zodiak anda : aquarius";
         }
        
    }

    if ($bulan == 2) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:aquarius";
         }   else {
            echo "zodiak anda : pisces";
         }
    }

    if ($bulan == 3) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda: pisces";
         }   else {
            echo "zodiak anda : taurus";
         }
    }
    if ($bulan == 4) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:taurus";
         }   else {
            echo "zodiak anda : gemini";
         }
    }
    if ($bulan == 5) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:gemini";
         }   else {
            echo "zodiak anda : cancer";
         }
    }
    if ($bulan == 6) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:cancer";
         }   else {
            echo "zodiak anda : leo";
         }
    }
    if ($bulan == 7) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:leo";
         }   else {
            echo "zodiak anda : virgo";
         }
    }
    if ($bulan == 8) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:virgo";
         }   else {
            echo "zodiak anda : scorpio";
         }
    }
    if ($bulan == 9) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda: herman";
         }   else {
            echo "zodiak anda : leo";
         }
    }
    if ($bulan == 10) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:aquarius";
         }   else {
            echo "zodiak anda : leo";
         }
    }
    if ($bulan == 11) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:scorpio";
         }   else {
            echo "zodiak anda : sagitarius";
         }
    }
    if ($bulan == 12) {
        if ($tanggal > 0 && $tanggal < 20) {
            echo "zodiak anda:aquarius";
         }   else {
            echo "zodiak anda : libra";
         }
    }

  }  else {
    echo "tanggal atau bulan lahir salah!";
  }
}
//   zodiak(5,3);
//   zodiak(2,4)

// function cekbulan ($bulan) {
//     if ($bulan > 0 && $bulan < 13) {
//         return true;
//      } else {
//         return false;
//      }
// }

// cekbulan (0);
//     if (cekbulan (0))  {
//         echo "bulan benar";
//      } else {
//         echo "bulan salah";
//      }

// function luarpersegipanjang($p,$l) {
//     $luas = $p * $l;
//     return $luas;
// }
// $l = 10;
// $p = 5;
// $t = 3;

// luarpersegipanjang(5 , 2)*15

function tambah($a, $b){
    return $a + $b;
}
function kurang($a , $b){
    return $a - $b;
}
function kali($a , $b){
    return $a * $b;
}
function bagi($a , $b){
    return $a / $b;
}

?>