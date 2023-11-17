/* 
--------------------------------------------------------------------------------------------
    AJAX + JQUERY para devolver as funções principais
--------------------------------------------------------------------------------------------
*/
function getProdutos() {
    return $.ajax({
      method: "GET",
      url: "../php/getProdutos.php",
      dataType: "json",
    });
  }
  
  function contador() {
    return $.ajax({
      method: "GET",
      url: "../php/cookies.php",
    });
  }
  

$(document).ready(function () {
    getProdutos()
    .done(function (products) {
      renderProducts(products);
    })
    .fail(function (error) {
      console.error("Erro ao obter dados dos produtos.. ", error);
    });

  contador()
    .done(function (counter) {
      $("#counter").text("Produtos adicionados nessa sessão: " + counter);
    })
    .fail(function (error) {
      console.error("Erro ao obter dados do contador", error);
    });
});

function renderProducts(products) {
  // Seletor para o elemento onde você deseja adicionar a tabela
  var tableDiv = document.getElementById("productContainer");

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
                <th scope="col">Imagem</th>
                <th scope="col">Nome</th>
                <th scope="col">Preço</th>
            </tr>
        </thead>
        <tbody>
            ${products
              .map(
                (product) => `
                
                <tr>
                    <td ><img src="${product.imageSrc}" alt="${product.name}" class="img-thumbnail" style="height:100px; width: 100px"></td>
                    <td>${product.name}</td>
                    <td>${product.price}€</td>
                   
                </tr>
            `
              )
              .join("")}
        </tbody>
    </table>
`;
}

renderProducts();

