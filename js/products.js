// Funções relacionadas ao carrinho

function addToCart(product, price) {
  let cart = getCart();
  cart.push({ product, price });
  setCart(cart);
  updateCartList();
  CartCount();
}

function getCart() {
  const cartCookie = getCookie('cart');
  return cartCookie ? JSON.parse(cartCookie) : [];
}

function setCart(cart) {
  document.cookie = `cart=${JSON.stringify(cart)}; expires=${getCookieExpiration()}; path=/`;
}

function clearCart() {
  setCart([]);
  updateCartList();
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
}

function getCookieExpiration() {
  const date = new Date();
  date.setDate(date.getDate() + 10);
  return date.toUTCString();
}

function updateCartList() {
  const cart = getCart();
  const cartListElement = document.getElementById('cart-list');
  const totalLabelElement = document.getElementById('total-label');
  var totalCarrinho = 0;

  if (cart.length === 0) {
    cartListElement.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      const listItem = document.createElement('li');
      totalCarrinho = parseFloat(totalCarrinho) + parseFloat(item.price);
      listItem.textContent = `${item.product} - ${item.price}€`;
    });
  }
}

// Funções relacionadas aos produtos

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
          <button class="btn btn-primary carrinho" onclick="addToCart('${product.name}','${product.price}')">Adicionar ao Carrinho</button>
        </div>
      </div>
    `;

    container.appendChild(cardDiv);
  });
}

// Funções de contagem e AJAX

function CartCount() {
  let cart = getCart();
  let cartCounter = $("#cart-counter");
  let cartCount = cart.length;
  cartCounter.text(cartCount);
}

function getProdutos() {
  return $.ajax({
    method: "GET",
    url: "../php/getProdutos.php",
    dataType: "json",
  });
}
