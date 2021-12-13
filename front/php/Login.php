<?php

include ("Connect.php");
session_start();
$correo = $_POST['correo'];
$contrasena = $_POST['passwd'];

$correo = stripcslashes($correo);
$contrasena = stripcslashes($contrasena);
$correo = mysqli_real_escape_string($conn, $correo);
$contrasena = mysqli_real_escape_string($conn, $contrasena);

$consulta = "SELECT * from usuarios WHERE correo = '$correo' AND contrasena = $contrasena";
$result = mysqli_query($conn, $consulta);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);

if($count == 1){
    echo "<h1><center> Login successful </center></h1>";
    $_SESSION['correo'] = $correo;
    $_SESSION['contrasena'] = $contrasena;
}
else{
    echo "<h1> Login failed. Invalid username or password.</h1>";
}

mysqli_close($conn);
//header("Location: ./../html/Pelis.html");
?>