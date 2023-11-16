<?php

session_start();


if (!isset($_SESSION['nomeSessao'])) {

  $_SESSION["tipo"] = $_POST["tipo"];
  $_SESSION["nomeSessao"] = $_POST["nomeSessao"];
} else {
  // session_destroy();
  session_unset();
  $_SESSION["tipo"] = $_POST["tipo"];
  $_SESSION["nomeSessao"] = $_POST["nomeSessao"];
}

header('Location: /web/views/index.php');
  exit();


