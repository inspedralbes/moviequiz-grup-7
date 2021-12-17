<?php

include ("Connect.php");

session_start();
if (isset($_SESSION['usuario'])) {
    $user = $_SESSION['usuario'];
}
//$comentario = $_REQUEST['comentario'];
//$favorito = $_REQUEST['favorito'];
//$valoracion= $_REQUEST['valoracion'];
//echo($comentario);
//echo($favorito);
//echo($valoracion);

$nombre = $_REQUEST['nombre'];
$poster = $_REQUEST['poster'];
$imdbId= $_REQUEST['imdbId'];
$ano= $_REQUEST['ano'];


$comprobar = "SELECT * FROM peliculas WHERE id = '$imdbId'";
$result = mysqli_query($conn, $comprobar);
$count = mysqli_num_rows($result);
if($count == 0) {
    $insert = "INSERT INTO peliculas (id, titulo, imagen, ano) VALUES ('$imdbId', '$nombre', '$poster', '$ano')";
    $resultado = mysqli_query($conn, $insert);

}else {
    echo "Error, pelicula ya registrado";
}

mysqli_close($conn);




