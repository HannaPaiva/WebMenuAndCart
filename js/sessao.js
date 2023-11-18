$(document).ready(function() {
   

  $.ajax({
      url: '../php/mostrar_sessao.php',
      method: 'GET',
      dataType: 'json',
      success: function(data) {
          $('#h1').text("No momento você, "+ data.nome + ", é: " + data.tipo);
          console.log(data);
          
      },
      error: function() {
          console.log('Erro ao obter a variável de sessão');
      }
  });
});
