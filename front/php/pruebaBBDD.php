<?php

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "proyecto";


$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

$db = mysqli_select_db( $conn, $db_name);

$consulta = "SELECT * FROM peliculas";

$resultado = mysqli_query( $conn, $consulta );

$array = [];

while ($columna = mysqli_fetch_array( $resultado )) {

  array_push($array, array ('exito'=>true,'id'=>"$columna[id]",'titulo'=>"$columna[titulo]", 'imagen'=>"$columna[imagen]") );

}
$myJSON = json_encode($array);
$file = "./../json/peliculas.json";
file_put_contents($file, $myJSON);

mysqli_close( $conn );




