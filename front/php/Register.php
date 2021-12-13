<?php

include ("Connect.php");

$correo = $_REQUEST['correo'];
$contrasena = $_REQUEST['passwd'];

$comprobar = "SELECT * FROM usuarios WHERE correo = '$correo'";
$result = mysqli_query($conn, $comprobar);
$row = mysqli_fetch_array($result, MYSQLI_ASSOC);
$count = mysqli_num_rows($result);
if($count == 1) {
echo "Error, usuario ya registrado";
}
else{
    $consulta = "SELECT * FROM usuarios";
    $resultado =  mysqli_query( $conn, $consulta );
    $insert = "INSERT INTO usuarios (correo, contrasena) VALUES ('$correo', '$contrasena')";
    $array = [];

    while ($columna = mysqli_fetch_array($resultado)) {

        array_push($array, array('id' => "$columna[id]", 'correo' => "$columna[correo]", 'contrasena' => "$columna[contrasena]"));
    }
    $myJSON = json_encode($array);
    $file = "./../json/usuarios.json";
    file_put_contents($file, $myJSON);

    if ($conn->query($insert) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $insert . "<br>" . $conn->error;
    }
    mysqli_close($conn);
    header("Location: ./../html/Pelis.html");
}
?>