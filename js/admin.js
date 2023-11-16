

$(document).ready(function () {
    // Chame a função GetProductData e, em seguida, renderize os produtos na conclusão bem-sucedida
    GetProductData().done(function (products) {
        console.log(products);
        renderProducts(products);
    }).fail(function (error) {
        console.error("Erro ao obter dados do produto:", error);
    });



    contador().done(function (counter) {
        console.log(counter);
        $('#counter').text("Produtos adicionados nessa sessão: "  + counter);

    }).fail(function (error) {
        console.error("Erro ao obter dados do produto:", error);
    });


});

function renderProducts(products) {
const container = document.getElementById("productContainer");

// Seletor para o elemento onde você deseja adicionar a tabela
var tableDiv = document.getElementById('productContainer');

// Criar a tabela usando um loop forEach
tableDiv.innerHTML = `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Imagem</th>
                <th scope="col">Nome</th>
                <th scope="col">Preço</th>
                <th scope="col">Ação</th>
            </tr>
        </thead>
        <tbody>
            ${products.map(product => `
                <tr>
                    <td><img src="${product.imageSrc}" alt="${product.name}" class="img-thumbnail" style="height:100px; width: 100px"></td>
                    <td>${product.name}</td>
                    <td>${product.price}€</td>
                   
                </tr>
            `).join('')}
        </tbody>
    </table>
`;

} 



// Chame a função para renderizar os produtos
renderProducts();


function CartCount() {
  
  let cart = getCart();
  let cartCounter = $('#cart-counter');
  let cartCount = cart.length;
  cartCounter.text(cartCount);


}

function GetProductData() {
    // Retorna a promessa da solicitação AJAX
    return $.ajax({
        method: "GET",
        url: "../php/getProdutos.php",
        dataType: "json",
    });
}

  

function contador(){
   
    return $.ajax({
        method: "GET",
        url: "../php/cookies.php",
        // dataType: "json",
    });


    
}