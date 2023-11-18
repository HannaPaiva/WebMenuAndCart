# WebMenuAndCart
Trabalho realizado para a disciplina de WEB, contendo um sistema de menus para uma suposta loja online.

#Introdução
	
	Para o meu trabalho de WEB, escolhi desenvolver o tópico referente aos “menus”. Fiz uma série de páginas que simulam operações realizadas em uma loja online, como a de adicionar produtos ao carrinho, permitindo deletá-los desse mesmo carrinho, e, de forma rudimentar, comprá-los.
	Há também a vista de administrador que permite mostrar todas as compras já feitas e adicionar novos produtos a seleção.
	Neste projeto, utilizei como tecnologias principais HTML, CSS (+Bootstrap), Javascript (+Jquery), Ajax, PHP, Mysql, e, como havia a necessidade de usar Cookies, apliquei-os tanto no back como no frontend. 

#Instalação e configuração

	Para conseguir correr a minha aplicação de maneira correta, é necessário ter, antes de tudo, o XAMPP configurado no computador para utilizar o Apache e o Mysql localmente, portanto, o primeiro passo, é ligar ambos esses módulos referidos no XAMPP Control Panel.
	Assim que estiver ligado, descarregar o ficheiro zipado do projeto, e descompactá-lo na pasta, dentro do XAMPP, “htdocs”.
	Depois, basta importar a base de dados “loja”, existente na pasta “database”, e, se for necessário, alterar as configurações da sua base de dados local no php/conexao.php. Pode alterar as variáveis de “$password” e “$user”, se precisar.

#Explicação geral da estrutura

O projeto está definido com as seguintes pastas:
•	assets – onde estão as imagens;
•	css –  as folhas de estilo;
•	database – de onde pode retirar a base de dados;
•	html – onde estão os ficheiros HTML e os components que se repetem por entre os ficheiros (como a navbar e sidebar). 
•	js – onde fica o javascript principal do projeto.
•	php – onde fica os processamentos de php para o backend. 
•	views – onde está as páginas de php que chamam os ficheiros e os componentes HTML. 


#Como usar o site e funcionalidades 


Para abrir o projeto, contanto que esteja na pasta htdocs, basta ir à URL http://localhost:8080/web/views/index.php (altere a porta se precisar).

	Aqui poderá escolher ter a visão de cliente ou de administrador. Se não escolher nenhuma, a visão padrão será de cliente, e o nome padrão da sessão será a “Maria Joaquina”. 
	Se escolher a visão de administrador, a sidebar ganha mais links, e o programa ganha mais funcionalidades. 
	Por default, o cliente pode ver produtos, adicioná-los ao carrinho, e comprá-los. 
Já o administrador pode fazer tudo o que o cliente pode fazer e adicionalmente inserir produtos novos e visualizar todas as compras já realizadas. 
De resto, é só navegar por entre os links e testar. Os produtos são dinâmicos, já que provém da base de dados, e no canto direito será possível ver um contador dos produtos que, ao adicionar produtos novos ao carrinho, este se altera.
O carrinho é guardado em cookies, e só são levados à base de dados e efetivamente “comprados” na página de checkout. É possível também apagar o produto do carrinho, ou apagar todos os produtos do carrinho de uma só vez no botão de limpar carrinho. 
	
