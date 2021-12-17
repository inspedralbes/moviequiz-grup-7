<?php

include ("Connect.php");

$array = [-15 , -10 , -5 , -2  , 2 , +5 , +10 ,+15];

$sql = "SELECT ano from peliculas";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);

$arr = ($row);
$myJSON = json_encode($arr);
echo $myJSON;

