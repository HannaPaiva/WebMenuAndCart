// Funções relacionadas ao carrinho

function addToCart(product, price) {
  let cart = getCart();
  cart.push({ product, price });
  setCart(cart);
  // updateCartList();
  CartCount();
}

function getCart() {
  const cartCookie = document.cookie.split('; ').find(cookie => cookie.startsWith('cart='));
  return cartCookie ? JSON.parse(cartCookie.split('=')[1]) : [];
}


function setCart(cart) {
  const cookieValue = JSON.stringify(cart);
  document.cookie = `cart=${cookieValue}; expires=${getCookieExpiration()}; path=/`;
}


function clearCart() {
  setCart([]);
  // updateCartList();
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

// function updateCartList() {
//   const cart = getCart();
//   const cartListElement = $('#cart-list');
//   const totalLabelElement = $('#total-label');
//   var totalCarrinho = 0;

//   if (cart.length === 0) {
//   } else {
//     cart.forEach(item => {
//       const listItem = $('<li></li>');
//       totalCarrinho = parseFloat(totalCarrinho) + parseFloat(item.price);
//       listItem.text(`${item.product} - ${item.price}€`);
//       cartListElement.append(listItem);
//     });
//   }
// }

// Funções relacionadas aos produtos

$(document).ready(function () {
  getProdutos()
    .done(function (products) {
   
      renderProducts(products);
    })
    .fail(function (error) {
      console.error("Erro ao obter dados do produto:", error);
    });

  CartCount();
});



function renderProducts(products) {
  const container = $("#productContainer");

  products.forEach((product) => {
    const cardDiv = $('<div></div>').addClass("col-md-4");

    cardDiv.html(`
      <div class="card product-card">
        <img src="${product.imageSrc}" class="card-img-top" alt="${product.name}">
        <div class="card-body">
          <h5 class="card-title">${product.name}</h5>
          <p class="card-text">${product.price}€</p>
          <button class="btn btn-primary carrinho" onclick="addToCart('${product.name}','${product.price}')">Adicionar ao Carrinho</button>
        </div>
      </div>
    `);

    container.append(cardDiv);
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



function postProduto() {
  // Obter dados do formulário

  var imgSrc = $('#imgSrc').val();
  var price = $('#price').val();
  var product = $('#product').val();

  // Realizar chamada AJAX
  $.ajax({
      type: 'POST',
      url: '../php/postProdutos.php',
      data: { imgSrc: imgSrc, price: price, name: product },
      success: function(response) {
       
      },
      error: function(error) {
          console.log('Erro na chamada AJAX: ' + error);
      }
  });
}

