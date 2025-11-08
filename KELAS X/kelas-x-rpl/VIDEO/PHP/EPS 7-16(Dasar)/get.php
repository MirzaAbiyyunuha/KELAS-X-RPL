<form action="" method="get">

    Nama :
    <input type="text" name="Nama">
    Alamat :
    <input type="text" name="Alamat">

    <input type="submit" name="kirim" value="simpan">

</form>

<?php

if (isset($_GET['kirim'])) {
    $nama = $_GET['Nama'];
    $alamat = $_GET['Alamat'];

    echo $nama;
    echo '<br>';
    echo $alamat;

}


?>