<?php

include ("Connect.php");
$correo = $_POST['correo'];
$contrasena = $_POST['passwd'];

$correo = stripcslashes($correo);
$contrasena = stripcslashes($contrasena);
$correo = mysqli_real_escape_string($conn, $correo);
$contrasena = mysqli_real_escape_string($conn, $contrasena);

$consulta = "SELECT * from usuarios WHERE correo = '$correo' AND contrasena = $contrasena";
$result = mysqli_query($conn, $consulta);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);

if($count == 1){
    $arr = array('exito' => true, 'correo' => "$correo", 'contrasena' => "$contrasena", 'imagen' => 'https://randomuser.me/api/portraits/men/23.jpg');;
}
else{
    $arr = array ('exito' =>false);
}
$myJSON = json_encode($arr);
echo $myJSON;

mysqli_close($conn);
?>