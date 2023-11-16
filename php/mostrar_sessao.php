<?php

// session_status()

session_start();


if (isset($_SESSION['tipo']) && $_SESSION['tipo'] == "cliente") {

   
    $_SESSION["nomeSessao"] = "Maria Joaquina";
  echo  ($_SESSION["tipo"]);

}elseif(isset($_SESSION['tipo']) && $_SESSION['tipo'] == "admin"){

  // echo  ($_SESSION['tipo']) ;
  echo  ($_SESSION["tipo"]);


}else{
    
    echo "erro";
}


