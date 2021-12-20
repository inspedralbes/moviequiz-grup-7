<?php
$data = file_get_contents("./../json/recibir_manual.json");
$resultat = json_decode($data, true);

$id_partida = $resultat['id_partida'];
echo "La id de la partida es: ". $id_partida;
$id_peli1 = $resultat['respostes'][0]['ImdbID'];
echo "La resposta es: " . $id_peli1;


//$sql = "INSERT INTO partida(id_partida, nom_partida, usaurio, respuesta), VALUES ($id_partida, $nom_partida, $respostes)"
?>