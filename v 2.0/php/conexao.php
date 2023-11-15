<?php


$servername = "localhost";
$username = "root";
$password = "";
$port = "80";
$dbname = "loja";


$pdo = new PDO('mysql:host=localhost;dbname=loja', 'root', '');

// if ($pdo) {
//     echo "<script> console.log('Conectado a BD com sucesso!') </script> ";
// } else {
//     echo "<script> console.log('Erro ao conectar com o hotel') </script> ";
// }

// ?>