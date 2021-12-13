<?php
$db_host = "localhost";
$db_user = "root";
$db_pass = "";
$db_name = "proyecto";

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
if(mysqli_connect_errno()) {
    die("Failed to connect with MySQL: ". mysqli_connect_error());
}
?>