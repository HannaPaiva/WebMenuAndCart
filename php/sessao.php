<?php

session_start();

if (!isset($_SESSION['nomeSessao'])) {

  $_SESSION["tipo"] = $_GET["tipo"];
  $_SESSION["nomeSessao"] = $_GET["nomeSessao"];
} else {
  session_destroy();
  $_SESSION["tipo"] = $_GET["tipo"];
  $_SESSION["nomeSessao"] = $_GET["nomeSessao"];
}






echo "Olá, " . $_SESSION['nomeSessao'] . "Você é um " . $_SESSION['tipo'];
