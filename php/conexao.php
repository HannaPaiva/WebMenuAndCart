<?php


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "loja";


$pdo = new PDO("mysql:host={$servername};dbname={$dbname}", $username, $password);
// ?>