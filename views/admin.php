<?php
require_once "../html/components/head.html";
require_once "../html/components/navbar.html";
require_once "../html/components/sidebarAdmin.html";
?>

<div class="content">
    <div class="mb-3 justify-content-center">
        <h2>Formulário de Inserção de Produtos</h2>

        <h1 id="counter">Produtos adicionados nessa sessão: </h1>
        <form id="produtoForm" style="padding:50px">

            <div class="form-group">
                <label for="imgSrc">URL da Imagem:</label>
                <input type="text" class="form-control" id="imgSrc" name="imgSrc" required>
            </div>

            <!-- Campo de Preço -->
            <div class="form-group">
                <label for="price">Preço:</label>
                <input type="number" class="form-control" id="price" name="price" required>
            </div>

            <!-- Campo de Produto -->
            <div class="form-group">
                <label for="product">Nome do Produto:</label>
                <input type="text" class="form-control" id="product" name="name" required>
            </div>

            <!-- Botão de Envio -->
            <button class="btn btn-primary" onclick="postProduto()">Inserir Produto</button>
        </form>


    </div>


  
    <h2 class="mt-4 mb-4">Produtos</h2>
    <div class="row">
      <!-- PRODUTOS DINÂMICOS -->
      <div class="row" id="productContainer">
        
      </div>
    </div>
  </div>

</div>






<script src="../js/admin.js"></script>
<script src="../js/postProdutos.js"></script>