$(document).ready(function() {
   

  $.ajax({
      url: '../php/mostrar_sessao.php',
      method: 'GET',
      success: function(data) {
          $('#h1').text("No momento você é: " + data);
          console.log(data);
          
      },
      error: function() {
          console.log('Erro ao obter a variável de sessão');
      }
  });
});
