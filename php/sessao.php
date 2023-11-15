<?php

session_start();

if (!isset($_SESSION['user'])){

  $_SESSION["user"] = $_GET["sessao"];
  
}






echo "Olá, " . $_SESSION['user'];

// if (!isset($_SESSION['user']) || $_SESSION['user'] !== 'admin') {
//   header("Location: index.php");
//   exit();


// }
