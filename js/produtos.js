

$(document).ready(function () {
  
  getProdutos()
    .done(function (products) {
      console.log(products);
      renderProducts(products);
    })
    .fail(function (error) {
      console.error("Erro ao obter dados do produto:", error);
    });

  CartCount();
});

function renderProducts(products) {
  const container = document.getElementById("productContainer");

  products.forEach((product) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("col-md-4");

    cardDiv.innerHTML = `
        <div class="card product-card">
            <img src="${product.imageSrc}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text">${product.price}€</p>
                <button class="btn btn-primary carrinho" id="carrinho" onclick="addToCart('${product.name}','${product.price}')">Adicionar ao Carrinho</button>
            </div>
        </div>
    `;

    container.appendChild(cardDiv);
  });
}

// Chame a função para renderizar os produtos
renderProducts();

function CartCount() {
  let cart = getCart();
  let cartCounter = $("#cart-counter");
  let cartCount = cart.length;
  cartCounter.text(cartCount);
}

function getProdutos() {
  // Retorna a promessa da solicitação AJAX
  return $.ajax({
    method: "GET",
    url: "../php/getProdutos.php",
    dataType: "json",
  });
}
