<?php

  session_start(); 
  require_once "conexao.php";

  $stmt = $pdo->prepare("SELECT
  c.nomeCliente AS nome_cliente,
  p.name AS nome_produto,
  p.price AS preco_produto,
  c.total AS total_compra
FROM
  compras c
JOIN
  carrinho cr ON c.idCompra = cr.idCompra
JOIN
  produtos p ON cr.idProduto = p.id");

  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);



$carrinho = [];

foreach ($carrinho as $row) {
    $carrinho[] = [
        'nome_produto'    => $row['nome_produto'],
        'nome_cliente'  => $row['nome_cliente'],
        'preco_produto'  => $row['preco_produto'],
        'total_compra'  => $row['total_compra'],
       
    ];
};

print_r (json_encode($product));
