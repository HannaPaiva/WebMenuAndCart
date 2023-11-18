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

