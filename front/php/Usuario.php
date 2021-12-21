<?php
    session_start();
if(isset($_SESSION['usuario'])){
    $user = $_SESSION['usuario'];
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</head>
<body>
<?php
    echo "<div id='informacion'>
                    <ul>
                        <li>Correo: $user</li>
                    </ul>
                   </div>";

    echo "          
           <input type='password' name='contrasena' id='contrasena' placeholder='Tu contraseña'>
           <button class='waves-effect waves-light btn' id='boton-contrasena' type='button'>Cambiar Contraseña</button>
           <div class='container'>
                <div class='carousel' id='carousel2'></div>
           </div>
                    
                    ";

?>
<script src="./../js/usuarios.js"></script>
</body>
</html>
