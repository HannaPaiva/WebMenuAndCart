-- --------------------------------------------------------
-- Anfitrião:                    127.0.0.1
-- Versão do servidor:           10.4.28-MariaDB - mariadb.org binary distribution
-- SO do servidor:               Win64
-- HeidiSQL Versão:              12.5.0.6677
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- A despejar estrutura da base de dados para loja
CREATE DATABASE IF NOT EXISTS `loja` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci */;
USE `loja`;

-- A despejar estrutura para tabela loja.carrinho
CREATE TABLE IF NOT EXISTS `carrinho` (
  `idcarrinho` int(11) NOT NULL AUTO_INCREMENT,
  `idProduto` int(11) DEFAULT NULL,
  `precoProduto` double DEFAULT NULL,
  `idCompra` int(11) unsigned DEFAULT NULL,
  PRIMARY KEY (`idcarrinho`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- A despejar dados para tabela loja.carrinho: ~24 rows (aproximadamente)
INSERT INTO `carrinho` (`idcarrinho`, `idProduto`, `precoProduto`, `idCompra`) VALUES
	(1, 2, 50, 1),
	(2, 3, 20, 1),
	(3, 5, 15, 2),
	(4, 7, 60, 3),
	(5, 0, 20, 18),
	(6, 0, 25.99, 19),
	(7, 0, 124, 19),
	(8, 0, 50, 19),
	(9, 0, 50, 19),
	(10, 0, 20, 20),
	(11, 0, 25.99, 20),
	(12, 0, 124, 20),
	(13, 0, 50, 20),
	(14, 0, 50, 20),
	(15, 3, 20, 21),
	(16, 3, 20, 21),
	(17, 4, 25.99, 21),
	(18, 4, 25.99, 22),
	(19, 2, 50, 22),
	(20, 3, 20, 22),
	(21, 4, 25.99, 22),
	(22, 4, 25.99, 23),
	(23, 2, 50, 23),
	(24, 3, 20, 23);

-- A despejar estrutura para tabela loja.compras
CREATE TABLE IF NOT EXISTS `compras` (
  `idcompra` int(11) NOT NULL AUTO_INCREMENT,
  `nomeCliente` varchar(700) DEFAULT NULL,
  `total` double DEFAULT NULL,
  PRIMARY KEY (`idcompra`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- A despejar dados para tabela loja.compras: ~10 rows (aproximadamente)
INSERT INTO `compras` (`idcompra`, `nomeCliente`, `total`) VALUES
	(1, 'Luís', 145),
	(2, 'Maria', 120.5),
	(3, 'Joaquina', 50.75),
	(4, 'Paulo', 30),
	(14, '2612.99', 0),
	(18, 'asas', 2612.99),
	(19, 'asas', 269.99),
	(20, 'asas', 269.99),
	(21, 'zxzx', 65.99),
	(28, 'Marina', 70);

-- A despejar estrutura para tabela loja.produtos
CREATE TABLE IF NOT EXISTS `produtos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `imageSrc` varchar(700) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- A despejar dados para tabela loja.produtos: ~6 rows (aproximadamente)
INSERT INTO `produtos` (`id`, `name`, `price`, `imageSrc`) VALUES
	(2, 'Casaco Quadriculado', 50, '../assets/images/produtos/imagem_produto1.png'),
	(3, 'Moletom preto', 20, '../assets/images/produtos/imagem_produto2.png'),
	(4, 'Calça verde', 25.99, '../assets/images/produtos/imagem_produto3.png'),
	(5, 'Moletom verde coração', 15, '../assets/images/produtos/imagem_produto4.png'),
	(6, 'Bolsa de couro preta', 35, '../assets/images/produtos/imagem_produto5.png'),
	(7, 'Tênis branco', 60, '../assets/images/produtos/imagem_produto6.png');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
