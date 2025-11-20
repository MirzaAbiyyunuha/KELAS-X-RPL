<?php

// Menyambungkan ke database
$host = "localhost";
$user = "root";
$password = '';
$db = "dbsekolah";

$koneksi = mysqli_connect($host, $user, $password, $db);
// ===



// Cek jika disimpan
if (isset($_POST['simpan'])) {
    $nis = $_POST['nis'];
    $nama = $_POST['nama'];
    $alamat = $_POST['alamat'];
    $telpon = $_POST['telepon'];

    // echo $nis,$nama,$alamat,$telepon;

    $sql = "INSERT INTO tblsiswa (nis, nama, alamat, telpon) VALUES ($nis, '$nama','$alamat','$telpon')";
    echo $sql;
    $query = mysqli_query($koneksi, $sql);
    
    header("location:#");

    
}
// ===
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>

    <style>
        body {
            background-color: black;
            color: white;
        }
    </style>
</head>
<body>
    <form action="" method = "post">
    <input type="number" placeholder = "masukkan nis" name = "nis" id = "nis" required>
    <input type="text" placeholder = "masukkan nama" name = "nama" id = "nama" required>
    <input type="text" placeholder = "masukkan alamat" name = "alamat" id = "alamat" >
    <input type="text" placeholder = "masukkan telepon" name = "telepon" id = "telepon" >
    <input type="submit" name="simpan" value="simpan">
</form>

<table border="1">
    <thead>
        <th>Nis</th>
        <th>Nama</th>
        <th>Alamat</th>
        <th>Telepon</th>
    </thead>
    <tbody>
        <?php
            $sql = "SELECT * FROM tblsiswa";
            $query = mysqli_query($koneksi, $sql);

            while ($siswa=mysqli_fetch_array($query)) {
        ?>
        <tr>
            <td><?php echo $siswa['nis'] ?></td>
            <td><?php echo $siswa['nama'] ?></td>
            <td><?php echo $siswa['alamat'] ?></td>
            <td><?php echo $siswa['telpon'] ?></td>
        </tr>
        <?php
            }
        ?>
    </tbody>
</table>
</body>
</html>



