// $(document).ready(function () {
//     getProdutos()
//     .done(function (products) {
//       renderProducts(products);
//     })
//     .fail(function (error) {
//       console.error("Erro ao obter dados dos produtos.. ", error);
//     });
// }




let isCartDisplayed = false;

function on_load() {
    if (!isCartDisplayed) {
        mostrar_carrinho();
        isCartDisplayed = true;
    }
}

window.addEventListener('load', on_load);


function mostrar_carrinho() {
const cartContainer = document.getElementById('checkout-container');
const totalLabel = document.getElementById('total-label');
const cart = getCart();
var total_carrinho = 0;

if (cart.length === 0) {
    cartContainer.innerHTML = '<p>O seu carrinho está vazio.</p>';
} else {
    // Criar tabela Bootstrap
    const table = document.createElement('table');
    table.classList.add('table');

    // Adicionar cabeçalho da tabela
    const thead = document.createElement('thead');
    thead.innerHTML = `
        <tr>
            <th scope="col">Produto</th>
            <th scope="col">Preço</th>
            <th scope="col">Ação</th>
        </tr>
    `;
    table.appendChild(thead);

    // Adicionar itens do carrinho como linhas na tabela
    const tbody = document.createElement('tbody');
    cart.forEach((item, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${item.product}</td>
            <td>${item.price}€</td>
            <td>
                <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">
                    <i class="fa fa-trash"></i> Remover
                </button>
            </td>
        `;

        tbody.appendChild(row);
        total_carrinho = parseFloat(total_carrinho) + parseFloat(item.price);



    });

    table.appendChild(tbody);

    // Limpar o conteúdo anterior antes de adicionar o novo
    cartContainer.innerHTML = '';
    cartContainer.appendChild(table);
    totalLabel.textContent = `Total da compra: ${total_carrinho.toFixed(2)}€`;
}
}

function comprar() {
   
}






function removeItem(index) {
    const cart = getCart();

    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        setCart(cart);
        mostrar_carrinho(); // Atualiza a exibição do carrinho após a remoção
    }
}