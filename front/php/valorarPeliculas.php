<?php

include ("Connect.php");

session_start();
if (isset($_SESSION['usuario'])) {
    $user = $_SESSION['usuario'];
    $comentario = $_POST['comentario'];
    $valoracion = $_POST['valoracion'];
    $favorito = $_POST['favorito'];
    $nombre = $_POST['nombre'];
    $poster = $_POST['poster'];
    $imdbId = $_POST['imdbId'];
    $ano = $_POST['ano'];


    $comprobar = "SELECT * FROM peliculas WHERE id = '$imdbId'";
    $result = mysqli_query($conn, $comprobar);
    $count = mysqli_num_rows($result);
    if ($count == 0) {
        $insertp = "INSERT INTO peliculas (id, titulo, imagen, ano) VALUES ('$imdbId', '$nombre', '$poster', '$ano')";
        $resultadop = mysqli_query($conn, $insertp);


    } else {
        echo "Pelicula ya registrado";
    }
    $insertv = "INSERT INTO valoracion (id, usuario, valoracion, favorito, comentario) VALUES ('$imdbId', '$user', '$valoracion',$favorito, '$comentario')";
    $resultadov = mysqli_query($conn, $insertv);
    echo "Pelicula valorada";
    mysqli_close($conn);
}


