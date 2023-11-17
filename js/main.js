function getProdutos() {
    // Retorna a promessa da solicitação AJAX
    return $.ajax({
        method: "GET",
        url: "../php/getProdutos.php",
        dataType: "json",
    });
}