<?php

include ("Connect.php");

$consulta = "SELECT * FROM peliculas";
$resultado =  mysqli_query( $conn, $consulta );
$array = [];

    while ($columna = mysqli_fetch_array($resultado)) {

        array_push($array, array('id' => "$columna[id]", 'titulo' => "$columna[titulo]", 'imagen' => "$columna[imagen]", 'ano' => "$columna[ano]"));
    }
    $myJSON = json_encode($array);
    echo ($myJSON);

mysqli_close($conn);





