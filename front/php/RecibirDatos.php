<?php
$data = file_get_contents("./../json/recibir_manual.json");
$products = json_decode($data, true);
echo $data;
?>