<!-- belajar php -->
<h1>saya belajar php</h1>
<?php
    $nama = "mirza abiyyunuha";
    $kelas = "X-RPL";
    $umur = "15";
    $alamat = "sukorejo";
    $hobi = "badminton dan layangan";
    $enter = "<br>";

echo $nama;
echo $enter;
echo $kelas;

// echo'<h1>saya belajar php</h1>';
echo'saya kelas';
echo'12';
echo'<br>';
echo'nama:mirza abiyyunuha <br>';
echo'kelas:X-RPL <br>';
echo'alamat:sukorejo <br>';
echo'hobi:badminton dan layangan <br>';
echo'umur:15 <br>';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>web mirza</title>
</head>
<body>
    <div>
        <h1>identitas</h1>
        <table>
            <tbody>
                <tr>
                    <td>nama: <?=$nama?></td>
                </tr>
                <tr>
                    <td>kelas: <?=$kelas?></td>
                </tr>
                <tr>
                    <td>umur: <?=$umur?></td>
                </tr>
                <tr>
                    <td>alamat: <?=$alamat?></td>
                </tr>
                <tr>
                    <td>hobi: <?=$hobi?></td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>