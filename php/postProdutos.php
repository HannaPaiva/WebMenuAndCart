<?php


  $name = $_POST["name"];
  $price = $_POST["price"];
  $imgSrc = $_POST["imgSrc"];

  require_once "conexao.php";
  $stmt = $pdo->prepare("INSERT INTO produtos (name, price, imageSrc) VALUES ('$name', '$price', '$imgSrc')");

  $stmt->execute();


// Adicione um cookie para contar produtos adicionados
if (!isset($_COOKIE['produtos_adicionados'])) {
  setcookie('produtos_adicionados', 1, time() + 3600, '/');
} else {
  $contador = $_COOKIE['produtos_adicionados'];
  $contador++;
  setcookie('produtos_adicionados', $contador, time() + 3600, '/');
}



  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);



$product = [];

foreach ($result as $row) {
    $product[] = [
        'id'    => $row['id'],
        'name'  => $row['name'],
        'price' => $row['price'],
        // Adicione outros campos conforme necessário
    ];
};


?>

