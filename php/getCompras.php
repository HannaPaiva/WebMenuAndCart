<?php

  session_start(); 
  require_once "conexao.php";

  $stmt = $pdo->prepare("SELECT
  c.nomeCliente,
  GROUP_CONCAT(p.name) AS produtos_comprados,
  c.total
FROM
  compras c
JOIN carrinho cr ON c.idcompra = cr.idCompra
JOIN produtos p ON cr.idProduto = p.id
GROUP BY
  c.nomeCliente, c.total;
");

  $stmt->execute();

  $result = $stmt->fetchAll(PDO::FETCH_ASSOC);



$carrinho = [];

foreach ($result as $row) {
    $carrinho[] = [
        'produtos_comprados'    => $row['produtos_comprados'],
        'nomeCliente'  => $row['nomeCliente'],
        'total'  => $row['total'],
       
    ];
};


print_r (json_encode($carrinho));
