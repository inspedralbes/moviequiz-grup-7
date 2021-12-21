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
    <footer class="page-footer #42a5f5 blue lighten-1">
        <div class="container">
        <div class="row">
            <div class="col l6 s12">
            <h5 class="white-text">MovieQuiz</h5>
            <p class="grey-text text-lighten-4">Marc Lamolla Kevin Hoyos Josthyn Loma</p>
            </div>
            <div class="col l4 offset-l2 s12">
            <h5 class="white-text">Redes Sociales</h5>
            <ul>
                <li><a class="grey-text text-lighten-3" href="https://www.institutpedralbes.cat/%22%3ECampus</a></li>
                <li><a class="grey-text text-lighten-3" href="https://www.instagram.com/inspedralbes/%22%3EInstagram</a></li>
                <li><a class="grey-text text-lighten-3" href="https://twitter.com/inspedralbes%22%3ETwitter</a></li>
            </ul>
            </div>
        </div>
        </div>
        <div class="footer-copyright">
        <div class="container center">
        © 2021 Copyright
        </div>
        </div>
    </footer>



</body>
</html>
