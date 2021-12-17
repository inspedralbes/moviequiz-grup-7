<?php

include ("Connect.php");
$correo = $_POST['correo'];
$contrasena = $_POST['passwd'];

if($correo == NULL){
    if($contrasena == NULL){
        $arr = array ('exito' =>false, 'mensaje' =>"Correo y contrasena no definidos");
        $myJSON = json_encode($arr);
        echo $myJSON;
    }
    else {
        $arr = array('exito' => false, 'mensaje' => "Correo no definido");
        $myJSON = json_encode($arr);
        echo $myJSON;
    }
}
else if($contrasena == NULL){
    $arr = array ('exito' =>false, 'mensaje' =>"Contrasena no definida");
    $myJSON = json_encode($arr);
    echo $myJSON;
}
else{
    $correo = stripcslashes($correo);
    $contrasena = stripcslashes($contrasena);
    $correo = mysqli_real_escape_string($conn, $correo);
    $contrasena = mysqli_real_escape_string($conn, $contrasena);

    $consulta = "SELECT * from usuarios WHERE correo = '$correo' AND contrasena = $contrasena";
    $result = mysqli_query($conn, $consulta);
    $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
    $count = mysqli_num_rows($result);

    if($count == 1){
        session_start();
        $arr = array('exito' => true, 'correo' => "$correo", 'imagen' => 'https://randomuser.me/api/portraits/men/18.jpg');;
        $_SESSION['usuario'] = $correo;
    }
    else{
        $arr = array ('exito' =>false , 'mensaje' => "Correo o Contraseña incorrectos");
    }
    $myJSON = json_encode($arr);
    echo $myJSON;

    mysqli_close($conn);
}
?>