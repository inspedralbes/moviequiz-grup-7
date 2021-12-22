<?php

include ("Connect.php");

session_start();
if(isset($_SESSION['usuario'])) {

    $user = $_SESSION['usuario'];
    $contrasena = $_POST['passwd'];


    $update="UPDATE usuarios SET contrasena = '$contrasena' WHERE correo = '$user'";
    $resultado = mysqli_query($conn, $update);

    mysqli_close($conn);
}