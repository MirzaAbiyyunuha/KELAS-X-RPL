<?php

    session_start();
    // echo $_SESSION['email'] . "<br>";
    // echo $_SESSION['password'] . "<br>";

    if (isset($_SESSION['email'])) {
        echo $_SESSION['email'];
        echo "<br>";
        echo $_SESSION['password'];
        echo "<br>";
        echo "<a href='logout.php'>logout</a>";
    } else {
        echo "register";
        echo "<br>";
        echo "login";
    }

?>