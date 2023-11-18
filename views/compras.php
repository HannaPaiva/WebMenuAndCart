<?php
require_once "../html/components/head.html";
require_once "../html/components/navbar.html";
require_once "../html/components/sidebarAdmin.html";
?>

<div class="content">

    <div class="row">
        <!-- PRODUTOS DINÂMICOS -->
        <div class="row" id="tabela-produtos" style="padding:20px">

        </div>
    </div>
</div>

</div>






<script src="../js/admin.js"></script>
<script src="../js/listar_compras.js"></script>

<!-- SELECT
  c.nomeCliente AS nome_cliente,
  p.name AS nome_produto,
  p.price AS preco_produto,
  c.total AS total_compra
FROM
  compras c
JOIN
  carrinho cr ON c.idCompra = cr.idCompra
JOIN
  produtos p ON cr.idProduto = p.id
WHERE
  c.nomeCliente = 'NomeDoCliente'; -- Substitua 'NomeDoCliente' pelo nome do cliente desejado -->



  <script>
    /* 
--------------------------------------------------------------------------------------------
    AJAX + JQUERY para devolver as funções principais
--------------------------------------------------------------------------------------------
*/
function getCompras() {
    return $.ajax({
      method: "GET",
      url: "../php/getCompras.php",
      dataType: "json",
    });
  }
  


$(document).ready(function () {
    getCompras()
    .done(function (products) {
      renderProducts(products);
      console.log(products);
    })
    .fail(function (error) {
      console.error("Erro ao obter dados dos produtos.. ", error);
    });
});

function renderProducts(products) {
  // Seletor para o elemento onde você deseja adicionar a tabela
  var tableDiv = document.getElementById("tabela-produtos");

  // Criar a tabela usando um loop forEach
  tableDiv.innerHTML = `

<style>
td{
width: 600px;
}

</style>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">cliente</th>
                <th scope="col">Nome do produto</th>
                <th scope="col">Total</th>
            </tr>
        </thead>
        <tbody>
            ${products
              .map(
                (product) => `
                
                <tr>
             
                    <td>${product.nomeCliente}</td>
                    <td> ${product.produtos_comprados}</td>
                    <td>${product.total}€</td>
                </tr>
            `
              )
              .join("")}
        </tbody>
    </table>
`;
}

renderProducts();


  </script>