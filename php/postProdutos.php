<?php


  $name = $_POST["name"];
  $price = $_POST["price"];
  $imgSrc = $_POST["imgSrc"];

  require_once "conexao.php";
  $stmt = $pdo->prepare("INSERT INTO produtos (nome, preco, imgSrc) VALUES ('$name', '$price', '$imgSrc')");

  $stmt->execute();

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

print_r (json_encode($product));
?>

