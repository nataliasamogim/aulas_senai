-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 11/06/2024 às 14:21
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `tointo`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `cadastro`
--

CREATE TABLE `cadastro` (
  `ID_CAD` int(11) NOT NULL,
  `NOME_USUARIO` varchar(100) NOT NULL,
  `EMAIL` varchar(50) NOT NULL,
  `SENHA` varchar(15) NOT NULL,
  `FOTO_PERFIL` blob DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `cadastro`
--

INSERT INTO `cadastro` (`ID_CAD`, `NOME_USUARIO`, `EMAIL`, `SENHA`, `FOTO_PERFIL`) VALUES
(1, '0', 'maria-poli@gmail.com', 'ML12345!', NULL),
(2, 'Natalia', 'natalia@gmail.com', 'Natalia@12345', NULL),
(3, 'Laura', 'laura-figueiredo@gmail.com', 'LAURALINDA', NULL),
(4, 'Júlia Dias', 'julia-dias@gmail.com', 'JU181904', NULL),
(5, 'Marília', 'marília@gmail.com', 'Marilia@1234', NULL),
(6, 'Malu', 'maria-luiza@gmail.br', 'Malu@1234', NULL),
(7, 'Natalia', 'natalia@gmail.br', 'Natalia@12345', NULL),
(8, 'Natalia', 'natalia@gmail.br', 'Natalia@12345', NULL),
(9, '', '', '', NULL),
(10, '', '', '', NULL),
(11, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(12, '', '', '', NULL),
(13, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(14, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(15, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(16, '', '', '', NULL),
(17, 'Malu', 'maria-luiza@gmail.br', 'Malu@123456', NULL),
(18, 'Malu', 'maria-luiza@gmail.br', 'Malu@123456', NULL),
(19, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(20, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(27, 'Malu', 'maria-luiza@gmail.br', 'Laura@2007', NULL),
(28, 'Jonghyun', 'jonghyun@gmail.com', 'Laura@2007', NULL),
(29, 'Marilia', 'marilia@gmail.com', 'Marilia@2006', NULL),
(30, 'Valdirene ', 'valdirene@gmail.com', 'Valdirene@2007', ''),
(31, 'Dean', 'dean@gmail.com', 'Dean_1967', NULL),
(32, 'Julia Dias ', 'juliadias@gmail.com', 'JuliaD@1234', NULL),
(33, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(34, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(35, 'Valdirene', 'valdirene@gmail.com', 'Valdirene@12345', NULL),
(36, 'vfvv', 'svvsv@nvnfej.com', '12345678Ma@', NULL),
(37, 'gbthnh', 'nthnht@envefn.com', 'Malu@12345', NULL),
(38, 'djvfiuhv', 'veije@dvif.com', 'Ma@123455', NULL),
(39, 'btgbt', 'rt4bt@hvrfh.v', '123456Aa@', NULL),
(40, 'fghfuygutyu', 'ruryutyu@fgdfg.fdfer', '123456aA#', NULL),
(41, 'ffjfff', 'fff@gdyeg.geh', '123456aA@', NULL),
(42, 'vihuvy', 'tvt5@hv.gcr', '123456Aa@', NULL),
(43, 'Malu', 'malu@gmail.com', 'Malu@1234567', NULL),
(44, 'Laura Figueiredo', 'lauraffigueiredo2007@gmail.com', 'L@ura2007', NULL),
(45, 'Laura Figueiredo', 'laura@gmail.com', 'Laura@2404', NULL);

-- --------------------------------------------------------

--
-- Estrutura para tabela `compras`
--

CREATE TABLE `compras` (
  `id_compra` int(11) NOT NULL,
  `ID_PLANO` int(11) NOT NULL,
  `ID_DADOS_PAG` int(11) DEFAULT NULL,
  `ID_CAD` int(11) NOT NULL,
  `DESC_COMPRA` varchar(200) NOT NULL,
  `VALOR_COMPRA` float(5,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `compras`
--

INSERT INTO `compras` (`id_compra`, `ID_PLANO`, `ID_DADOS_PAG`, `ID_CAD`, `DESC_COMPRA`, `VALOR_COMPRA`) VALUES
(1, 1, 1, 1, 'Comprou o Plano Anual', 109.90),
(2, 2, 2, 2, 'Comprou o Plano Mensal', 7.90),
(3, 3, NULL, 3, 'Comprou o Plano Grátis', 0.00),
(5, 3, NULL, 41, 'Comprou o Plano Grátis', 0.00),
(6, 3, NULL, 43, 'Comprou o Plano Grátis', 0.00),
(7, 3, NULL, 44, 'Comprou o Plano Grátis', 0.00);

-- --------------------------------------------------------

--
-- Estrutura para tabela `compromissos`
--

CREATE TABLE `compromissos` (
  `ID_COMP` int(11) NOT NULL,
  `ID_CAD` int(11) NOT NULL,
  `TITULO_COMP` varchar(200) NOT NULL,
  `DATA_COMP` date NOT NULL,
  `HORARIO_COMP` time NOT NULL,
  `DESCRICAO` varchar(320) DEFAULT NULL,
  `IMPORTANTE` bit(1) DEFAULT NULL,
  `LEMBRETE` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `compromissos`
--

INSERT INTO `compromissos` (`ID_COMP`, `ID_CAD`, `TITULO_COMP`, `DATA_COMP`, `HORARIO_COMP`, `DESCRICAO`, `IMPORTANTE`, `LEMBRETE`) VALUES
(1, 1, 'Jogar bola', '2024-02-22', '19:00:00', 'Será no campo', b'1', 2),
(2, 2, 'Assistir FMF', '2024-02-14', '10:00:00', 'Esperei isso por 3 anos', b'1', 2),
(3, 3, 'Fazer as unhas', '2024-02-21', '15:30:00', 'Fofocar com a manicure', b'1', 3),
(4, 4, 'Albúm da Taylor', '2024-04-19', '18:00:00', 'The Tortured Poets Departament', b'1', 2),
(5, 1, 'Estudar para o exame de matemática', '2024-02-29', '10:00:00', 'Prova de Estatística', b'1', 2),
(6, 5, 'Fazer compras no supermercado', '2024-02-23', '15:30:00', 'Comprar tomate', b'1', 2),
(7, 3, 'Preparar uma apresentação para o trabalho', '2024-02-24', '14:00:00', 'Trabalho de Artes', b'0', 5),
(8, 4, 'Correr por 30 minutos', '2024-03-05', '18:00:00', 'Correr na praça', b'0', 4),
(9, 2, 'Ler dois capítulos do livro atual', '2024-04-23', '20:00:00', 'Fazendo meu filme', b'1', 1),
(10, 3, 'Agendar uma consulta médica', '2024-04-25', '11:30:00', 'Para examinar minha perna', b'0', 6),
(11, 4, 'Enviar e-mails de acompanhamento aos clientes', '2024-02-24', '09:00:00', 'Clientes de hoje', b'0', 3),
(12, 5, 'Aprender uma nova receita culinária', '2024-02-23', '17:00:00', 'Para fazer doces', b'0', 2),
(13, 3, 'Limpar o quarto', '2024-02-22', '14:00:00', 'Para poder estudar depois', b'1', 4),
(14, 2, 'Planejar as férias de verão', '2024-02-25', '16:00:00', 'Em dezembro', b'1', 1);

-- --------------------------------------------------------

--
-- Estrutura para tabela `dados_pag`
--

CREATE TABLE `dados_pag` (
  `ID_DADOS_PAG` int(11) NOT NULL,
  `TIPO_PAG` bit(1) NOT NULL,
  `ID_CAD` int(11) NOT NULL,
  `CPF` varchar(15) NOT NULL,
  `DATA_PAG` date NOT NULL,
  `NUM_CARTAO` varchar(16) DEFAULT NULL,
  `CVV` int(4) DEFAULT NULL,
  `DATA_VENC` date DEFAULT NULL,
  `NOME_CARTAO` varchar(19) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `dados_pag`
--

INSERT INTO `dados_pag` (`ID_DADOS_PAG`, `TIPO_PAG`, `ID_CAD`, `CPF`, `DATA_PAG`, `NUM_CARTAO`, `CVV`, `DATA_VENC`, `NOME_CARTAO`) VALUES
(1, b'1', 1, '123-456-789-01', '2024-01-15', '1234-5678-9012', 1234, '2028-06-08', 'Maria Luiza Poli'),
(2, b'1', 2, '564-785-123-78', '2024-02-25', '3456-7890-1234', 4567, '2029-10-08', 'Natália Samogim'),
(3, b'1', 3, '678-454-675-46', '2024-04-24', '6554-2345-9076', 7890, '2026-04-24', 'Laura Francine'),
(4, b'1', 4, '584-234-289-00', '2024-04-18', '8798-3241-6653', 1357, '2029-04-18', 'Júlia Dias');

-- --------------------------------------------------------

--
-- Estrutura para tabela `historico`
--

CREATE TABLE `historico` (
  `ID_HIST` int(11) NOT NULL,
  `FIRST_ACESS` date NOT NULL,
  `ULTIMO_ACESS` date NOT NULL,
  `ID_CAD` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `historico`
--

INSERT INTO `historico` (`ID_HIST`, `FIRST_ACESS`, `ULTIMO_ACESS`, `ID_CAD`) VALUES
(1, '2023-12-20', '2024-02-22', 1),
(2, '2023-08-06', '2024-01-03', 2),
(3, '2023-04-08', '2024-01-16', 3),
(4, '2023-07-02', '2024-02-18', 4);

-- --------------------------------------------------------

--
-- Estrutura para tabela `opiniao`
--

CREATE TABLE `opiniao` (
  `ID_OPN` int(11) NOT NULL,
  `TEXTO` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `opiniao`
--

INSERT INTO `opiniao` (`ID_OPN`, `TEXTO`) VALUES
(1, 'Muito bom o site de vocês!!!'),
(2, 'Maravilhoso, o melhor do mundo!!!'),
(3, 'Amei, vou usar todos os dias para organizar a minha rotina!!!'),
(4, 'Nunca vi um site tão bom quanto esse, Parabéns!!!');

-- --------------------------------------------------------

--
-- Estrutura para tabela `planos`
--

CREATE TABLE `planos` (
  `ID_PLANO` int(11) NOT NULL,
  `TIPO_PLANO` varchar(10) NOT NULL,
  `VALOR_PLANO` float(5,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `planos`
--

INSERT INTO `planos` (`ID_PLANO`, `TIPO_PLANO`, `VALOR_PLANO`) VALUES
(1, 'Anual', 109.90),
(2, 'Mensal', 7.90),
(3, 'Grátis', 0.00);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `cadastro`
--
ALTER TABLE `cadastro`
  ADD PRIMARY KEY (`ID_CAD`);

--
-- Índices de tabela `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id_compra`),
  ADD KEY `ID_PLANO` (`ID_PLANO`),
  ADD KEY `ID_DADOS_PAG` (`ID_DADOS_PAG`),
  ADD KEY `ID_CAD` (`ID_CAD`);

--
-- Índices de tabela `compromissos`
--
ALTER TABLE `compromissos`
  ADD PRIMARY KEY (`ID_COMP`),
  ADD KEY `ID_CAD` (`ID_CAD`);

--
-- Índices de tabela `dados_pag`
--
ALTER TABLE `dados_pag`
  ADD PRIMARY KEY (`ID_DADOS_PAG`),
  ADD KEY `ID_CAD` (`ID_CAD`);

--
-- Índices de tabela `historico`
--
ALTER TABLE `historico`
  ADD PRIMARY KEY (`ID_HIST`),
  ADD KEY `ID_CAD` (`ID_CAD`);

--
-- Índices de tabela `opiniao`
--
ALTER TABLE `opiniao`
  ADD PRIMARY KEY (`ID_OPN`);

--
-- Índices de tabela `planos`
--
ALTER TABLE `planos`
  ADD PRIMARY KEY (`ID_PLANO`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `cadastro`
--
ALTER TABLE `cadastro`
  MODIFY `ID_CAD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT de tabela `compras`
--
ALTER TABLE `compras`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `compromissos`
--
ALTER TABLE `compromissos`
  MODIFY `ID_COMP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de tabela `dados_pag`
--
ALTER TABLE `dados_pag`
  MODIFY `ID_DADOS_PAG` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `historico`
--
ALTER TABLE `historico`
  MODIFY `ID_HIST` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `opiniao`
--
ALTER TABLE `opiniao`
  MODIFY `ID_OPN` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `planos`
--
ALTER TABLE `planos`
  MODIFY `ID_PLANO` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_ibfk_1` FOREIGN KEY (`ID_PLANO`) REFERENCES `planos` (`ID_PLANO`),
  ADD CONSTRAINT `compras_ibfk_2` FOREIGN KEY (`ID_DADOS_PAG`) REFERENCES `dados_pag` (`ID_DADOS_PAG`),
  ADD CONSTRAINT `compras_ibfk_3` FOREIGN KEY (`ID_CAD`) REFERENCES `cadastro` (`ID_CAD`);

--
-- Restrições para tabelas `compromissos`
--
ALTER TABLE `compromissos`
  ADD CONSTRAINT `compromissos_ibfk_1` FOREIGN KEY (`ID_CAD`) REFERENCES `cadastro` (`ID_CAD`);

--
-- Restrições para tabelas `dados_pag`
--
ALTER TABLE `dados_pag`
  ADD CONSTRAINT `dados_pag_ibfk_1` FOREIGN KEY (`ID_CAD`) REFERENCES `cadastro` (`ID_CAD`);

--
-- Restrições para tabelas `historico`
--
ALTER TABLE `historico`
  ADD CONSTRAINT `historico_ibfk_1` FOREIGN KEY (`ID_CAD`) REFERENCES `cadastro` (`ID_CAD`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
