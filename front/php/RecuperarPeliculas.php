<?php

include ("Connect.php");

/*session_start();
if (isset($_SESSION['usuario'])) {
    $user = $_SESSION['usuario'];
}
$comentario = $_REQUEST['comentario'];
$favorito = $_REQUEST['favorito'];
$valoracion= $_REQUEST['valoracion'];
*/

$nombre = $_REQUEST['nombre'];
$poster = $_REQUEST['poster'];
$imdbId= $_REQUEST['imdbId'];
$ano= $_REQUEST['ano'];




    $insert = "INSERT INTO peliculas (id, titulo, imagen, ano) VALUES ('$imdbId', '$nombre', '$poster', '$ano')";
    $resultado =  mysqli_query( $conn, $insert );

mysqli_close($conn);

/*$comprobar = "SELECT * FROM peliculas WHERE id = '$imdbId'";
$result = mysqli_query($conn, $comprobar);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);*/

/*$consulta = "SELECT * FROM peliculas";
$resultado =  mysqli_query( $conn, $consulta );
$array = [];

    while ($columna = mysqli_fetch_array($resultado)) {

        array_push($array, array('id' => "$columna[id]", 'titulo' => "$columna[titulo]", 'imagen' => "$columna[imagen]", 'ano' => "$columna[ano]"));
    }
    $myJSON = json_encode($array);
    $file = "./../json/usuarios.json";
    file_put_contents($file, $myJSON);*/



