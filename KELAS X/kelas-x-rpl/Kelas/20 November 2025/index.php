<form action="" method="POST">
   Email: <input type="email" placeholder="masukkan email" reqiured name="email"><br>
   Password: <input type="password" placeholder="password" required name="password"><br>
    <input type="submit" value="LOGIN" name="login">
</form>

<?php

    session_start();

    if (isset($_POST['login'])) {
            $email = $_POST['email'];
            $password = $_POST['password'];
            $_SESSION['email'] = $email;
            $_SESSION['password'] = $password;
            header("location: login.php");
            exit();

            

            echo "email:". htmlspecialchars($email)." <br>";
            echo "password:". htmlspecialchars($password)."<br>";
           
        }

        $isi = "selamat datang";
        $hasil = isset($isi);
         echo $hasil;

        if (isset($isi)) {
            echo 'variabel ada isi';
        }else {
            echo 'variabel tidak ada isi';
        }

        var_dump($isi);


?>