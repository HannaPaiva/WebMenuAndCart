
// Função para adicionar um item ao carrinho
function addToCart(product, price) {

  let cart = getCart();
  cart.push({ product, price });
  setCart(cart);
  updateCartList();
  CartCount()
}



// Função para obter o carrinho do cookie
function getCart() {
  const cartCookie = getCookie('cart');
  return cartCookie ? JSON.parse(cartCookie) : [];
}

// Função para definir o carrinho no cookie
function setCart(cart) {
  document.cookie = `cart=${JSON.stringify(cart)}; expires=${getCookieExpiration()}; path=/`;
}

// Função para limpar o carrinho
function clearCart() {
  setCart([]);
  updateCartList();
}

// Função para obter o valor de um cookie por nome
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

// Função para calcular a data de expiração do cookie (10 dias a partir de agora)
function getCookieExpiration() {
  const date = new Date();
  date.setDate(date.getDate() + 10);
  // console.log(date.toUTCString())
  return date.toUTCString();
}

// Função para atualizar a lista de carrinho na página
function updateCartList() {
  const cart = getCart();
  const cartListElement = document.getElementById('cart-list');
  const totalLabelElement = document.getElementById('total-label');

  var totalCarrinho = 0

  if (cart.length === 0) {
    cartListElement.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {

      const listItem = document.createElement('li');


      totalCarrinho = parseFloat(totalCarrinho) + parseFloat(item.price)
      listItem.textContent = `${item.product} - ${item.price}€`;


    });


  }

}
window.onload = updateCartList;
