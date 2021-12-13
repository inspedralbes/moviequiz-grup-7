<?php

$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "proyecto";


$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

$db = mysqli_select_db($conn, $db_name);

$correo = $_REQUEST['correo'];
$contrasena = $_REQUEST['passwd'];

$insert = "INSERT INTO usuarios (correo, contrasena) VALUES ('$correo', '$contrasena')";

//Consulta a la taula usuaris
$consulta = "SELECT * FROM usuarios";
$resultado =  mysqli_query( $conn, $consulta );

$array = [];

/*
$resultado = mysqli_query( $conn, $consulta );
*/
    while ($columna = mysqli_fetch_array( $resultado )) {

            array_push($array, array('id'=>"$columna[id]",'correo' => "$columna[correo]", 'contrasena' => "$columna[contrasena]"));
    }
        $myJSON = json_encode($array);
        echo $myJSON;
        $file = "./../json/usuarios.json";
        file_put_contents($file, $myJSON);

        if ($conn->query($insert) === TRUE) {
            echo "New record created successfully";
        } else {
            echo "Error: " . $insert . "<br>" . $conn->error;
        }
        mysqli_close( $conn );
        header("Location: ./../html/Pelis.html");
?>