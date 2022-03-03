<?php

include ("Connect.php");

    $select="SELECT SUM(valoracion), valoracion.id, peliculas.titulo, peliculas.imagen FROM valoracion JOIN peliculas ON valoracion.id=peliculas.id GROUP BY id ORDER BY valoracion DESC LIMIT 10;";
    $resultado = mysqli_query($conn, $select);

    $array = [];

    while ($columna = mysqli_fetch_array($resultado)) {

        array_push($array, array('id' => "$columna[id]", 'titulo' => "$columna[titulo]" , 'imagen' => "$columna[imagen]"));
    }
    $myJSON = json_encode($array);

    echo $myJSON;

    mysqli_close($conn);
