<?php

  require_once "conexao.php";
  $stmt = $pdo->prepare("SELECT * FROM produtos");

  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);



  // foreach ($result as $row) {
    
  //   echo  $row['id'];
  //   echo  $row['name'];
  //   echo  $row['price'] ;
 
  // }


$product = [];

foreach ($result as $row) {
    $product[] = [
        'id'    => $row['id'],
        'name'  => $row['name'],
        'price' => $row['price'],
        // Adicione outros campos conforme necessário
    ];
};

print_r (json_encode($product));
?>

