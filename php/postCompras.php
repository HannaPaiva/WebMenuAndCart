<?php

  session_start();  
  $produtos = $_POST["produtos"];
  $total = $_POST["total"];

  $produtosArray = json_decode($produtos, true);

  if(isset($_SESSION["nomeSessao"])){
    $cliente = $_SESSION["nomeSessao"];
  }else{
    $cliente = "default";
  }
  
  require_once "conexao.php";


  $stmt = $pdo->prepare("INSERT INTO compras VALUES (DEFAULT,'$cliente', '$total')");

  $stmt->execute();



  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);


  $idCompra = $pdo->lastInsertId();

  // foreach ($produtosArray as $produto) {
  //   $nomeProduto = $produto["product"];
  //   $precoProduto = $produto["price"];
  
  //   $stmt = $pdo->prepare("INSERT INTO carrinho (idProduto, precoProduto, idCompra) VALUES (:idProduto, :precoProduto, :idCompra)");
  //   $stmt->bindParam(':idProduto', $nomeProduto);
  //   $stmt->bindParam(':precoProduto', $precoProduto);
  //   $stmt->bindParam(':idCompra', $idCompra);
  //   $stmt->execute();
  // }


foreach ($produtosArray as $produto) {
  $nomeProduto = $produto["product"];
  $precoProduto = $produto["price"];

  // Obter o ID real do produto da tabela 'produtos'
  $stmtProduto = $pdo->prepare("SELECT id FROM produtos WHERE name = :nomeProduto");
  $stmtProduto->bindParam(':nomeProduto', $nomeProduto);
  $stmtProduto->execute();
  $produtoInfo = $stmtProduto->fetch(PDO::FETCH_ASSOC);

  if ($produtoInfo) {
    $idProduto = $produtoInfo['id'];

    // Inserir na tabela 'carrinho'
    $stmtCarrinho = $pdo->prepare("INSERT INTO carrinho (idProduto, precoProduto, idCompra) VALUES (:idProduto, :precoProduto, :idCompra)");
    $stmtCarrinho->bindParam(':idProduto', $idProduto);
    $stmtCarrinho->bindParam(':precoProduto', $precoProduto);
    $stmtCarrinho->bindParam(':idCompra', $idCompra);
    $stmtCarrinho->execute();
  }
}

echo ("sucesso");
