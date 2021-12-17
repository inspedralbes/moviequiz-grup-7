<?php

include ("Connect.php");

session_start();
if (isset($_SESSION['usuario'])) {
    $user = $_SESSION['usuario'];
    $comentario = $_REQUEST['comentario'];
    $valoracion = $_REQUEST['valoracion'];
    //$favorito = $_REQUEST['favorito'];
    echo($comentario);
    //echo($favorito);
    echo($valoracion);

    $nombre = $_REQUEST['nombre'];
    $poster = $_REQUEST['poster'];
    $imdbId = $_REQUEST['imdbId'];
    $ano = $_REQUEST['ano'];


    $comprobar = "SELECT * FROM peliculas WHERE id = '$imdbId'";
    $result = mysqli_query($conn, $comprobar);
    $count = mysqli_num_rows($result);
    if ($count == 0) {
        $insertp = "INSERT INTO peliculas (id, titulo, imagen, ano) VALUES ('$imdbId', '$nombre', '$poster', '$ano')";
        $resultadop = mysqli_query($conn, $insertp);

    } else {
        echo "Pelicula ya registrado";
    }
    $insertv = "INSERT INTO valoracion (id, usuario, valoracion, comentario) VALUES ('$imdbId', '$user', '$valoracion', '$comentario')";
    $resultadov = mysqli_query($conn, $insertv);

    echo "Pelicula valorada";
    mysqli_close($conn);
}



