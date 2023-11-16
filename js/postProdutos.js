

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
            console.log(response);
        },
        error: function(error) {
            console.log('Erro na chamada AJAX: ' + error);
        }
    });
}

