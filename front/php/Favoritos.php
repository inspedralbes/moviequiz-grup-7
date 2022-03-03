<?php

include ("Connect.php");

session_start();
if(isset($_SESSION['usuario'])) {

    $user = $_SESSION['usuario'];

    $select="SELECT valoracion.id, peliculas.titulo, peliculas.imagen FROM valoracion JOIN peliculas ON valoracion.id = peliculas.id WHERE valoracion.usuario = '$user' AND valoracion.favorito=1;";
    $resultado = mysqli_query($conn, $select);

    $array = [];

    while ($columna = mysqli_fetch_array($resultado)) {

        array_push($array, array('id' => "$columna[id]", 'titulo' => "$columna[titulo]" , 'imagen' => "$columna[imagen]"));
    }
    $myJSON = json_encode($array);

    echo $myJSON;

    mysqli_close($conn);
}