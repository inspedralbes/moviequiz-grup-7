<?php

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "proyecto";


$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

$db = mysqli_select_db($conn, $db_name);

$correo = $_REQUEST['correo'];
$contrasena = $_REQUEST['passwd'];

$consulta = "SELECT * from usuarios WHERE $correo = correo AND $contrasena = contrasena";

$resultado = mysqli_query( $conn, $consulta );

echo $resultado;


mysqli_close( $conn );
//header("Location: ./../html/Pelis.html");