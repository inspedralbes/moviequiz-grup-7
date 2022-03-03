<?php

include ("Connect.php");

$sumasrestas = [-15 , -10 , -5 , -2  , 2 , +5 , +10 ,+15];
$random = array_rand($sumasrestas, 3);
$sql = "SELECT id, titulo, imagen, ano from peliculas ORDER BY RAND() LIMIT 5";
$result = mysqli_query($conn, $sql);
for($i =0; $i<$result->num_rows;$i++){
    $rows[$i]=$result->fetch_assoc();
}

$random = range(1,4);
shuffle($random);
$pos = array_slice($random, 0, 4);

for($i=0; $i<count($rows);$i++){

    $anys[1]=$rows[$i]['ano']+0;
    $anys[2]=$rows[$i]['ano']+$sumasrestas[$random[0]];
    $anys[3]=$rows[$i]['ano']+$sumasrestas[$random[1]];
    $anys[4]=$rows[$i]['ano']+$sumasrestas[$random[2]];

    $nouArray[$i]['id'] = $rows[$i]['id'];
    $nouArray[$i]['titulo'] = $rows[$i]['titulo'];
    $nouArray[$i]['imagen'] = $rows[$i]['imagen'];
    $nouArray[$i]['any1'] = (string)$anys[$pos[0]];
    $nouArray[$i]['any2'] = (string)$anys[$pos[1]];
    $nouArray[$i]['any3'] = (string)$anys[$pos[2]];
    $nouArray[$i]['any4'] = (string)$anys[$pos[3]];
}


$insertar = "INSERT into partida (nom_partida) VALUES ('NULL')";
$result3 = mysqli_query($conn, $insertar);
$id_partida = "SELECT id_partida from partida";
$result2 = mysqli_query($conn, $id_partida);
$row = mysqli_fetch_array($result2, MYSQLI_ASSOC);
$peliculas['peliculas'] = $nouArray;
$resultado = array_merge($row, $peliculas);
echo json_encode($resultado);
