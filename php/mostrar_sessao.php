<?php

session_start();


if (isset($_SESSION['tipo']) && $_SESSION['tipo'] == "cliente") {

  echo  ($_SESSION["tipo"]);

}elseif(isset($_SESSION['tipo']) && $_SESSION['tipo'] == "admin"){

  // echo  ($_SESSION['tipo']) ;
  echo  ($_SESSION["tipo"]);


}else{
    
    echo "erro";
}


