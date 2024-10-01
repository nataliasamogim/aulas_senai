-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01/10/2024 às 13:49
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
(11, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(32, 'Julia Dias ', 'juliadias@gmail.com', 'JuliaD@1234', NULL),
(33, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(34, 'Malu', 'maria-luiza@gmail.br', 'Malu@12345', NULL),
(36, 'vfvv', 'svvsv@nvnfej.com', '12345678Ma@', NULL),
(37, 'gbthnh', 'nthnht@envefn.com', 'Malu@12345', NULL),
(38, 'djvfiuhv', 'veije@dvif.com', 'Ma@123455', NULL),
(39, 'btgbt', 'rt4bt@hvrfh.v', '123456Aa@', NULL),
(40, 'fghfuygutyu', 'ruryutyu@fgdfg.fdfer', '123456aA#', NULL),
(41, 'ffjfff', 'fff@gdyeg.geh', '123456aA@', NULL),
(42, 'vihuvy', 'tvt5@hv.gcr', '123456Aa@', NULL),
(43, 'Malu', 'malu@gmail.com', 'Malu@1234567', NULL),
(44, 'Laura Figueiredo', 'lauraffigueiredo2007@gmail.com', 'L@ura2007', NULL),
(45, 'Laura Figueiredo', 'laura@gmail.com', 'Laura@2404', NULL),
(46, 'Malu Poli', 'malugp.senai@gmail.com', 'Malu@6767', NULL),
(47, 'Maria Poli', 'mariapoli@gmail.com', 'MariaP@1234', NULL),
(48, 'Natalia Samogim', 'natisamogim@gmail.com', 'Nati@1234', NULL),
(49, 'Laura Figueiredo F', 'lauraffff@gmail.com', 'Laura@1234', NULL),
(50, 'Olivia Figueiredo ', 'oliviaf@gmail.com', 'Olivia@1212', NULL),
(51, 'Érica Silvia Goulart ', 'ericasgoulart@gmail.com', 'Erica@2727', NULL),
(52, 'Xavier Figueiredo', 'xavier@gmail.com', 'Xavier@1111', NULL),
(53, 'Olavo ', 'olavof@gmail.com', 'Olavo@2323', NULL),
(54, 'rthtyjuyk', 'ef3gf@fff.com', 'Ac@12345', NULL),
(56, 'Alice ', 'alice@gmail.com', 'Alice@1212', NULL),
(57, 'Flavia ', 'flavia@gmail.com', 'Flavia@2323', NULL),
(58, 'Natalia Ap', 'nataliaap@gmail.com', 'Natalia@3434', NULL),
(59, 'Ana Clara', 'anaclara@gmail.com', 'Ana@2020', NULL),
(60, 'Sabrina', 'sabrina@gmail.com', 'Sabrina#4545', NULL),
(61, 'Aló', 'alo@gmail.com', 'Alo@123456', NULL),
(62, 'Lili', 'lili@gmail.com', 'Lili@1234', NULL),
(63, 'sxggxhge', 'deded@ge3g.com', 'Aa@12345', NULL),
(64, 'dhdhdhhde', 'Vagag@djr.com', 'Aa@12345', NULL),
(65, 'gfhftyetyerty', 'xdfsgtdrtsrt|@zdfst.bhg', 'As@12345', NULL),
(66, 'uttuttt', 'trtrtrt@dgdg.com', 'Ad@12345', NULL),
(67, 'xfgdfgdgdf', 'sdststs@dfhdfh.bgydty', 'Af@232323', NULL),
(68, 'fgdgd', 'dgdg@cgfhh.gydty', '@123Abcde', NULL),
(69, 'sdfsrfs', 'serwer@zdfsf.xxddrt', 'Ga@121212', NULL),
(70, 'sdfsrfsxfcgdfg', 'serwer@zdfsf.xxddrtfg', 'Ga@121212', NULL),
(71, 'Julia dias', 'juliadl@gmail.com', 'Julia@1313', NULL),
(72, 'Lais', 'lais@gmail.com', 'Lais@2222', NULL),
(73, 'Lucas', 'lucas@gmail.com', 'Lucas@1212', NULL),
(74, 'Gabriel', 'gabriel@gmail.com', 'Gabriel123@', NULL),
(75, 'Aline Santos', 'alinesantos@gmail.com', 'Alinesantos@1', NULL),
(76, 'rgrgrg', '4g4tg@gdhw.com', 'Malu@12345', NULL),
(77, 'ADADADa', 'tg@gdhw.com', 'Malu@123455', NULL),
(78, 'ADADADagftt', 'tg@gdhw.comtete', 'Malu@123455', NULL),
(79, 'ADADADagfttdfgrdr', 'tstrg@gdhw.comtete', 'Malu@123455', NULL),
(80, 'xdgdgurykfftwetsetr', 'adfwetset@fgdrdydrd.xfgrst', '123456@aS', NULL),
(81, 'xdgdgurykfftwetsetr', 'adfet@fgdrdd.xfgrst', '123456@aS', NULL),
(82, 'fhfhdfhd', 'adffggget@fgdrdd.xfgrst', '123456@aS', NULL),
(83, 'fhfhdfhd', 'adffet@fgdrdd.xfgrst', '123456@aS', NULL),
(84, 'João ', 'joao@gmail.com', 'Joao@1212', NULL),
(85, 'Olivia ', 'olivia@gmail.com', 'Olivia@3434', NULL),
(86, 'Olivia Rodrigo', 'oliviarodrigo@gmail.com', 'OliviaR@22', NULL),
(87, 'Olivia Rodrigo', 'oliviarodrigo3@gmail.com', 'OliviaR@22', NULL),
(88, 'Claudia ', 'claudia@gmail.com', 'Claudia@123', NULL),
(89, 'Claudia', 'claudia5@gmail.com', 'Claudia@234', NULL),
(90, 'Claudia', 'claudia8@gmail.com', 'Claudia@234', NULL),
(91, 'Arthur', 'arthur@gmail.com', 'Arthur@12345', NULL),
(92, 'Arthur', 'arthur4@gmail.com', 'Arthur@12345', NULL),
(93, 'Claudia Leite ', 'claudialeite@gmail.com', 'ClaudiaL@123', NULL),
(94, 'Fernando ', 'frenando@gmail.com', 'Fernando@2323', NULL),
(95, 'Valda', 'valda@gmail.com', 'Valda@1212', NULL),
(96, 'Carlos', 'carlos@gmail.com', 'Carlos@12345', NULL),
(97, 'João Carlos', 'joaocarlos@gmail.com', 'JoaoC@12345', NULL),
(99, 'Marielza ', 'marielza@gmail.com', 'Marielza@12345', NULL),
(100, 'Otávio Leal', 'otavioleal@gmail.com', 'OtavioL@123', NULL),
(101, 'Junior Garcia', 'juniorgarcia@gmail.com', 'JuniorG@123', NULL),
(102, 'Marilinda', 'marilindamara@gmail.com', 'Marilinda<3', NULL),
(103, 'Marilinda', 'marilinda@gmail.com', 'Marilinda@2006', NULL),
(104, 'Marilia Bellini', 'mariliambellini@gmail.com', 'Marilinda@2006', NULL),
(105, 'Marilia Martins Bellini', 'mariliamartinsbellini@gmail.com', 'Marili@2006', NULL),
(106, 'Laura F F', 'lauraff2007@gmail.com', 'Laura@2007', NULL),
(107, 'Sam ', 'sam@gmail.com', 'Sam@1967', NULL),
(108, 'Junior', 'juniorg@gmail.com', 'JuniorG@123', NULL),
(109, 'Ivete Sangalo', 'ivetesangalo@gmail.com', 'Ivete@123', NULL),
(110, 'Rita Lee', 'ritalee@gmail.com', 'Rita@123', NULL),
(111, 'Elis Regina', 'elisregina@gmail.com', 'Elis@1234', NULL),
(112, 'Chico', 'chico@gmail.com', 'Chico@1234', NULL),
(113, 'Chico Buarque', 'chicobuarque@gmail.com', 'Chico@1234', NULL),
(114, 'Chico Buarque', 'chicobuarque@gmail.com', 'Chico@1234', NULL),
(115, 'Augusto', 'augusto@gmail.com', 'Augusto@2323', NULL),
(116, 'Augusto Figueiredo', 'augustof@gmail.com', 'Augustof@1212', NULL),
(117, 'Lais L', 'laisl@gmail.com', 'Lais@3434', NULL),
(118, 'Lais L', 'laisl@gmail.com', 'Lais@3434', NULL),
(119, 'Maite', 'maite@gmail.com', 'Maite@1212', NULL),
(120, 'Maite', 'maite@gmail.com', 'Maite@1212', NULL),
(121, 'Davi', 'davi@gmail.com', 'Davi@1313', NULL),
(122, 'Davi', 'davi@gmail.com', 'Davi@1313', NULL),
(123, 'Nat', 'nat@gmail.com', 'Nat@4545', NULL),
(124, 'Aldrei', 'aldrei@gmail.com', 'Aldrei@12345', NULL),
(125, 'Samanta', 'samanta@gmail.com', 'Samanta@12345', NULL),
(126, 'Samara', 'samara@gmail.com', 'Samara@12345', NULL),
(127, 'Sarah ', 'sarah@gmail.com', 'Sarah@123', NULL),
(128, 'Lilas', 'lilas@gmail.com', 'Lilas@12345', NULL),
(129, 'Amanda Rodrigues', 'amandar@gmail.com', '#Amanda123', NULL),
(130, 'Toly', 'toly@gmail.com', 'Toly@1212', NULL),
(131, 'Pombinha Branca', 'pombinha@gmail.com', 'Pombinha@123', NULL),
(132, 'Xjdjd', 'fjfjfj@gmail.com', 'Aaaaa@12345', NULL),
(133, 'Eloá Miquelini ', 'eloam@gmail.com', 'Eloa@12345', NULL),
(134, 'Anna Lindona Perfeita', 'annalindasarahchata@gmail.com', '@Perfeita314', NULL),
(135, 'Malula', 'malluuu@gmail.com', '@Malu123', NULL),
(136, 'Anna Clara ', 'annalinda@gmail.com', 'AnnaL@123', NULL),
(137, 'Jullyheder', 'jullyheder@gmail.com', 'Jtointo#123', NULL),
(138, 'Barléria', 'barleria@gmail.com', 'Barleria#123', NULL),
(139, 'Sarah chata', 'sarahchata@gmail.com', 'Sarah@12345', NULL),
(140, 'Arthur Vitório ', 'arthurvitorio@gmail.com', 'Arthur@1234', NULL),
(141, 'Julia Dias', 'julia@gmail.com', 'Julia@123', NULL),
(142, 'Melissa Balbieri Dias', 'melissa.balbieri@gmail.com', 'Nin@M3l28', NULL),
(143, 'Niele qndreuzzi', 'nieleandreuzzi@gmail.com', 'Niele3010!', NULL),
(144, 'Anderson Poli', 'andersonpolibr@gmail.com', '@Malu130507', NULL),
(145, 'Erica Silvia Goulart ', 'ericas@gmail.com', 'Erica@1234', NULL),
(146, 'Alanis Laura Figueiredo', 'alanislaura@gmail.com', 'Alanis@123', ''),
(147, 'Anna Clara ', 'annalindona@gmail.com', '@Anna3144', NULL),
(148, 'Anna Clara', 'annaclara@gmail.com', '#Annaclara123', NULL),
(149, 'AAAAAAA', 'maria-luiza2@gmail.br', 'Malu@123', NULL),
(150, 'mmm', 'maria-luiza3@gmail.br', 'Malu@123', NULL),
(151, 'Malu', 'mmmmmmmmmmmmmmmmmmmmmmmm@a.g', 'Malu@12345', NULL),
(152, 'Malu', 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'Malu@123', NULL),
(153, 'Malu', 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'Malu@123', NULL),
(154, 'Malu', 'mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'Malu@123', NULL),
(155, 'Malu Poli', 'maria-luiza8@gmail.br', 'Malu#12345', NULL),
(156, 'Maluuuuuuu', 'maria-luiza10@gmail.br', 'M @a 123', NULL),
(157, 'Maluuuuuuu', 'maria-luiza19@gmail.br', 'Malu@1236', NULL),
(158, 'Maluuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu', 'malu2@gmail.com', 'Malu@1234', ''),
(159, 'Malu Poli', 'malugoulart@gmail.com', 'Malu@123', NULL),
(160, 'Malu Poli', 'malugoulart1@gmail.com', 'Malu@123', NULL),
(161, 'Malu Poli', 'malugoulart13@gmail.com', 'Malu@123', NULL),
(162, 'Malu Poli', 'malugoulart10@gmail.com', 'Malu@123', NULL),
(163, 'Malu Poli', 'malugoulart19@gmail.com', 'Malu@123', NULL),
(164, 'Natalia Samogim', 'nataliasamogim88@gmail.com', 'Natalia@123', NULL),
(165, 'Junior', 'junior@gmail.com', 'Junior@123', NULL),
(166, 'Laura ', 'laura2@gmail.com', 'Laura@1234', NULL),
(167, 'Julia Dias', 'julia77@gmail.com', 'Julia@777', NULL),
(168, 'Marilia', 'marilia44@gmail.com', 'Marilia@12345', NULL),
(169, 'Damon Salvatore', 'damonsalvatore@gmail.com', 'Damon@123', NULL),
(170, 'Stefan Salvatore', 'stefansalvatore@gmail.com', 'Stefan@123', NULL),
(171, 'Maria Helena ', 'mariahelena@gmail.com', 'MariaHelena@1', NULL),
(172, 'Arthur Poli', 'arthurpoli@gmail.com', 'ArthurPoli@12', NULL),
(173, 'Otavio Goulart ', 'otaviogoulart@gmail.com', 'Otavio@123', NULL),
(174, 'Orminda ', 'orminda@gmail.com', 'Orminda@123', NULL),
(175, 'Alice Fernanda', 'alice3@gmail.com', 'Alice@123', NULL),
(176, 'Valda Goulart', 'valdagoulart@gmail.com', 'Valda@123', NULL),
(177, 'Laura Francine', 'laurafrancine@gmail.com', 'Laura@12345', NULL),
(178, 'Laura Francine', 'laurafrancine10@gmail.com', 'Laura@2323', NULL),
(179, 'Laura Francine', 'laurafrancine2@gmail.com', 'Laura@1010', NULL),
(180, 'Laura Francine', 'laurafrancine22@gmail.com', 'Laura@1010', NULL),
(181, 'Alice Fernanda', 'alice33@gmail.com', 'Alice@123', NULL),
(182, 'Alice Fernanda', 'alice333@gmail.com', 'Alice@123', NULL),
(183, 'Alice Fernanda', 'alice8989@gmail.com', 'Alice@2323', NULL),
(184, 'Alice Fernanda', 'alice8888@gmail.com', 'Alice@1212', NULL),
(185, 'Malu', 'maria-luiza2323@gmail.com', 'Malu@1212', NULL),
(186, 'Amanda', 'amanda@gmail.com', 'Amanda@123', NULL),
(187, 'Samuel', 'samuel@gmail.com', 'Samuel@1212', NULL),
(188, 'Samanta ', 'samanta2323@gmail.com', 'Samanta@1212', NULL),
(189, 'Gustavo ', 'gustavo@gmail.com', 'Gustavo@123', NULL),
(190, 'Flor', 'flor@gmail.com', 'Flor@123', NULL),
(191, 'Gustavo ', 'gustavo1@gmail.com', 'Gustavo@123', NULL),
(192, 'Daniel', 'daniel@gmail.com', 'Daniel@123', NULL);

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
(2, 1, 2, 2, 'comprou plano gratis', 7.90),
(3, 3, NULL, 3, 'Comprou o Plano Grátis', 0.00),
(5, 3, NULL, 41, 'Comprou o Plano Grátis', 0.00),
(6, 3, NULL, 43, 'Comprou o Plano Grátis', 0.00),
(7, 3, NULL, 44, 'Comprou o Plano Grátis', 0.00),
(8, 3, NULL, 46, 'Comprou o Plano Grátis', 0.00),
(9, 2, NULL, 83, 'Comprou o Plano Grátis', 0.00),
(10, 3, NULL, 84, 'Comprou o Plano Grátis', 0.00),
(11, 2, NULL, 85, 'Comprou o Plano Mensal', 7.90),
(12, 3, NULL, 109, 'Comprou o Plano Grátis', 0.00),
(13, 2, NULL, 111, 'Comprou o Plano Mensal', 7.90),
(14, 1, 37, 125, 'Comprou o Plano Anual', 109.90),
(15, 1, 38, 125, 'Comprou o Plano Anual', 109.90),
(16, 1, 40, 126, 'Comprou o Plano Anual', 109.90),
(17, 1, 41, 127, 'Comprou o Plano Anual', 109.90),
(18, 1, 43, 127, 'Comprou o Plano Anual', 109.90),
(19, 2, 45, 128, 'Comprou o Plano Mensal', 7.90),
(20, 2, NULL, 129, 'Comprou o Plano Mensal', 7.90),
(21, 2, 46, 129, 'Comprou o Plano Mensal', 7.90),
(22, 2, 47, 129, 'Comprou o Plano Mensal', 7.90),
(23, 1, 48, 131, 'Comprou o Plano Anual', 109.90),
(24, 2, 49, 132, 'Comprou o Plano Mensal', 7.90),
(25, 1, 50, 133, 'Comprou o Plano Anual', 109.90),
(26, 1, 51, 133, 'Comprou o Plano Anual', 109.90),
(27, 1, 52, 133, 'Comprou o Plano Anual', 109.90),
(28, 1, 53, 137, 'Comprou o Plano Anual', 109.90),
(29, 1, 54, 137, 'Comprou o Plano Anual', 109.90),
(30, 1, 55, 137, 'Comprou o Plano Anual', 109.90),
(31, 1, 56, 137, 'Comprou o Plano Anual', 109.90),
(32, 1, 57, 138, 'Comprou o Plano Anual', 109.90),
(33, 1, 58, 138, 'Comprou o Plano Anual', 109.90),
(34, 1, 59, 138, 'Comprou o Plano Anual', 109.90),
(35, 1, 60, 138, 'Comprou o Plano Anual', 109.90),
(36, 1, 61, 138, 'Comprou o Plano Anual', 109.90),
(37, 1, 62, 138, 'Comprou o Plano Anual', 109.90),
(38, 1, 63, 139, 'Comprou o Plano Anual', 109.90),
(39, 2, 64, 140, 'Comprou o Plano Mensal', 7.90),
(40, 1, 65, 141, 'Comprou o Plano Anual', 109.90),
(41, 3, NULL, 142, 'Comprou o Plano Grátis', 0.00),
(42, 3, NULL, 143, 'Comprou o Plano Grátis', 0.00),
(43, 3, NULL, 145, 'Comprou o Plano Grátis', 0.00),
(44, 3, NULL, 148, 'Comprou o Plano Grátis', 0.00),
(45, 1, 66, 158, 'Comprou o Plano Anual', 109.90),
(46, 3, NULL, 168, 'Comprou o Plano Grátis', 0.00),
(47, 1, 67, 169, 'Comprou o Plano Anual', 109.90),
(48, 1, 68, 170, 'Comprou o Plano Anual', 109.90),
(49, 1, 69, 171, 'Comprou o Plano Anual', 109.90),
(50, 1, 70, 174, 'Comprou o Plano Anual', 109.90),
(51, 1, 71, 175, 'Comprou o Plano Anual', 109.90),
(52, 1, 72, 175, 'Comprou o Plano Anual', 109.90),
(53, 2, 73, 175, 'Comprou o Plano Mensal', 7.90),
(54, 2, 74, 176, 'Comprou o Plano Mensal', 7.90),
(55, 3, NULL, 180, 'Comprou o Plano Grátis', 0.00),
(56, 3, NULL, 185, 'Comprou o Plano Grátis', 0.00),
(57, 3, NULL, 186, 'Comprou o Plano Grátis', 0.00),
(58, 3, NULL, 187, 'Comprou o Plano Grátis', 0.00),
(59, 3, NULL, 188, 'Comprou o Plano Grátis', 0.00),
(60, 2, 85, 189, 'Comprou o Plano Mensal', 7.90),
(61, 2, 86, 189, 'Comprou o Plano Mensal', 7.90),
(62, 2, 87, 189, 'Comprou o Plano Mensal', 7.90),
(63, 2, 88, 189, 'Comprou o Plano Mensal', 7.90),
(64, 2, 89, 189, 'Comprou o Plano Mensal', 7.90),
(65, 1, 90, 191, 'Comprou o Plano Anual', 109.90),
(66, 2, 91, 192, 'Comprou o Plano Mensal', 7.90),
(67, 2, 92, 192, 'Comprou o Plano Mensal', 7.90),
(68, 2, 93, 192, 'Comprou o Plano Mensal', 7.90),
(69, 2, 94, 192, 'Comprou o Plano Mensal', 7.90),
(70, 2, 95, 192, 'Comprou o Plano Mensal', 7.90);

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
  `LEMBRETE` int(11) DEFAULT NULL,
  `DATA_CRIACAO` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `compromissos`
--

INSERT INTO `compromissos` (`ID_COMP`, `ID_CAD`, `TITULO_COMP`, `DATA_COMP`, `HORARIO_COMP`, `DESCRICAO`, `IMPORTANTE`, `LEMBRETE`, `DATA_CRIACAO`) VALUES
(1, 1, 'Jogar bola', '2024-02-22', '19:00:00', 'Será no campo', b'1', 2, '2024-09-24'),
(2, 2, 'Assistir FMF', '2024-02-14', '10:00:00', 'Esperei isso por 3 anos', b'1', 2, '2024-09-24'),
(3, 3, 'Fazer as unhas', '2024-02-21', '15:30:00', 'Fofocar com a manicure', b'1', 3, '2024-09-24'),
(4, 4, 'Albúm da Taylor', '2024-04-19', '18:00:00', 'The Tortured Poets Departament', b'1', 2, '2024-09-24'),
(5, 1, 'Estudar para o exame de matemática', '2024-02-29', '10:00:00', 'Prova de Estatística', b'1', 2, '2024-09-24'),
(6, 5, 'Fazer compras no supermercado', '2024-02-23', '15:30:00', 'Comprar tomate', b'1', 2, '2024-09-24'),
(7, 3, 'Preparar uma apresentação para o trabalho', '2024-02-24', '14:00:00', 'Trabalho de Artes', b'0', 5, '2024-09-24'),
(8, 4, 'Correr por 30 minutos', '2024-03-05', '18:00:00', 'Correr na praça', b'0', 4, '2024-09-24'),
(9, 2, 'Ler dois capítulos do livro atual', '2024-04-23', '20:00:00', 'Fazendo meu filme', b'1', 1, '2024-09-24'),
(10, 3, 'Agendar uma consulta médica', '2024-04-25', '11:30:00', 'Para examinar minha perna', b'0', 6, '2024-09-24'),
(11, 4, 'Enviar e-mails de acompanhamento aos clientes', '2024-02-24', '09:00:00', 'Clientes de hoje', b'0', 3, '2024-09-24'),
(12, 5, 'Aprender uma nova receita culinária', '2024-02-23', '17:00:00', 'Para fazer doces', b'0', 2, '2024-09-24'),
(13, 3, 'Limpar o quarto', '2024-02-22', '14:00:00', 'Para poder estudar depois', b'1', 4, '2024-09-24'),
(14, 2, 'Planejar as férias de verão', '2024-02-25', '16:00:00', 'Em dezembro', b'1', 1, '2024-09-24'),
(15, 75, 'Fazer as unhas', '2024-08-13', '15:30:00', 'Ir na manicure depois da aula', b'1', 15, '2024-09-24'),
(16, 99, 'Trabalhar', '2024-08-15', '21:00:00', 'Ir para o restaurante', b'1', 60, '2024-09-24'),
(17, 99, 'Chegar em casa', '2024-08-15', '06:00:00', 'Fazer o café da manhã', b'1', 720, '2024-09-24'),
(18, 131, 'Casamento', '2024-08-29', '05:00:00', 'Se trocar, se arrumar, ir na janela', b'1', 60, '2024-09-24'),
(19, 129, 'Dbdhdj', '2024-09-17', '10:37:00', 'Dndjdj', b'1', 720, '2024-09-24'),
(20, 129, 'Rudjsjd', '2024-09-17', '06:55:00', 'Xndjsj', b'1', 1440, '2024-09-24'),
(28, 129, 'Afbfqba', '2024-09-18', '11:10:00', 'Ca ca', b'0', 0, '2024-09-24'),
(29, 129, 'Acabfnd', '2024-09-18', '11:10:00', 'Cacanca', b'1', 0, '2024-09-24'),
(30, 129, 'Fafa', '2024-09-18', '11:11:00', 'Ac wfb', b'0', 0, '2024-09-24'),
(31, 129, 'Dv vê nbsc s', '2024-09-18', '11:17:00', 'Aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', b'0', 0, '2024-09-24'),
(32, 134, 'Apresentação senai', '2024-09-18', '11:00:00', 'Opus lindo', b'1', 15, '2024-09-24'),
(45, 133, 'Apresentação ', '2024-09-18', '15:08:00', 'Jeiebeidhr', b'0', 0, '2024-09-24'),
(47, 133, 'Nothing', '2024-09-19', '12:30:00', 'App ', b'1', 30, '2024-09-24'),
(48, 133, 'hokjopkgopjkdpoj', '2024-12-12', '12:21:00', 'erkhokeohj', b'1', 0, '2024-09-24'),
(50, 139, 'Apresentação Senai', '2024-09-18', '09:30:00', 'Sesi de portas abertas', b'1', 30, '2024-09-24'),
(52, 140, 'Apresentação Senai', '2024-09-18', '10:15:00', 'Sesi de portas abertas', b'1', 60, '2024-09-24'),
(60, 141, 'Apresentação Senai', '2024-09-18', '10:15:00', 'Sesi de portas abertas', b'1', 15, '2024-09-24'),
(63, 144, 'Apresentação Sesi', '2024-09-18', '12:25:00', 'Apresentação Sesi', b'1', 15, '2024-09-24'),
(64, 145, 'Natal', '2024-12-25', '09:30:00', 'Churrasco ', b'1', 15, '2024-09-24'),
(73, 141, 'Estrela', '2024-09-18', '14:43:00', 'Ujajai', b'1', 0, '2024-09-24'),
(74, 148, 'Ahhhh', '2024-10-10', '22:50:00', 'Aaaaaa', b'1', 30, '2024-09-24'),
(75, 157, 'gwgwwg', '2024-09-07', '13:12:00', 'wdgwgweg', b'1', 15, '2024-09-24'),
(76, 157, 'fghklkjhgfd', '2024-09-19', '12:12:00', 'hdtjjtgk', b'1', 0, '2024-09-24'),
(77, 157, ',kmkoi', '2024-09-19', '12:01:00', 'kj09j', b'0', 0, '2024-09-24'),
(78, 157, 'oit', '2024-09-19', '12:12:00', '', b'0', 0, '2024-09-24'),
(79, 157, 'mmm', '2024-09-19', '08:09:00', '', b'0', 0, '2024-09-24'),
(80, 157, 'xxx', '2024-09-19', '12:12:00', '', b'0', 0, '2024-09-24'),
(81, 168, 'teste malu', '2024-09-25', '18:00:00', 'teste insert', b'1', 30, '2024-09-24'),
(82, 168, 'gjouhghg', '2024-09-24', '12:12:00', 'rgkjihrhh', b'0', 0, '2024-09-24'),
(83, 168, 'lefjw0jgwig', '2024-09-18', '12:12:00', '', b'0', 0, '2024-09-24'),
(84, 168, 'vlwkb-0krb', '2024-09-26', '12:12:00', 'wgporjr', b'0', 0, '2024-09-24'),
(85, 168, 'fg-o3jo53j', '2024-09-26', '12:12:00', 'gçe~,g´m', b'1', 0, '2024-09-24'),
(86, 168, 'j2gi0h52', '2024-09-26', '12:12:00', 'ffwgfw', b'1', 0, '2024-09-24'),
(87, 168, 'g,owephpi', '2024-09-20', '15:01:00', 'fpkeg-jorg', b'0', 0, '2024-09-24'),
(88, 168, '24jg02hg', '2024-09-20', '12:02:00', 'rbprbmom', b'0', 0, '2024-09-24'),
(89, 168, 'jvijbwi', '2024-09-27', '04:05:00', 'ehrehr', b'0', 0, '2024-09-24'),
(90, 168, 'gjwgjhg', '2024-09-27', '12:01:00', '', b'0', 0, '2024-09-24'),
(91, 168, 'dsvsdbs', '2024-09-07', '03:02:00', 'dwdvwgv', b'0', 0, '2024-09-24'),
(94, 169, 'qgiwerjhi', '2024-09-24', '04:56:00', 'whkejh', b'0', 0, '2024-09-24'),
(96, 169, 'egpekhokr', '2024-09-24', '12:01:00', '', b'0', 0, '2024-09-24'),
(97, 169, 'whrjrwhj', '2024-09-04', '12:04:00', '', b'0', 0, '2024-09-24'),
(98, 169, 'wkowrjbw', '2024-09-04', '23:33:00', 'fb´fkhjo', b'0', 0, '2024-09-24'),
(99, 169, 'w,gpwrkhoj-w', '2024-09-04', '03:04:00', '', b'0', 0, '2024-09-24'),
(100, 169, 'jwihgwhrg', '2024-09-24', '03:03:00', '', b'0', 0, '2024-09-24'),
(101, 170, 'wdijviwj', '2024-09-24', '03:02:00', 'jfiegjwjqg', b'1', 720, '2024-09-24'),
(102, 170, 'gnngggg', '2024-09-24', '12:01:00', 'ggggg', b'0', 0, '2024-09-24'),
(103, 170, 'engndgdn', '2024-09-24', '03:23:00', 'dhddhg', b'0', 0, '2024-09-24'),
(104, 171, 'fiw9gjwg0j', '2024-09-24', '03:23:00', 'jvijb', b'0', 0, '2024-09-24'),
(105, 171, 'wojvwijbijwr', '2024-09-24', '03:23:00', 'mvadvim', b'0', 0, '2024-09-24'),
(106, 171, 'jwgiwbj', '2024-09-24', '04:44:00', 'wogewoegj', b'0', 0, '2024-09-24'),
(107, 171, 'enenjetgjrjt', '2024-09-24', '03:33:00', '', b'0', 0, '2024-09-24'),
(108, 174, 'wigwrihw', '2024-09-24', '03:03:00', 'kwfowjgj', b'0', 0, '2024-09-24'),
(113, 174, 'çgjwjgrhw', '2024-09-25', '12:01:00', '', b'0', 0, '2024-09-24'),
(114, 174, 'jgrgrw89gyr', '2024-09-25', '22:44:00', '', b'0', 0, '2024-09-24'),
(115, 174, 'kewogeogje2', '2024-09-25', '22:02:00', '', b'0', 0, '2024-09-24'),
(116, 174, 'hhdfhfhdhf', '2024-09-24', '04:44:00', '', b'0', 0, '2024-09-24'),
(117, 174, 'pjgiejj', '2024-09-24', '03:03:00', 'bjpobjeb', b'0', 0, '2024-09-24'),
(118, 174, 'kkokok', '2024-09-24', '15:01:00', '', b'0', 0, '2024-09-24'),
(119, 174, 'rkgor3gj', '2024-09-24', '04:45:00', '', b'0', 0, '2024-09-24'),
(120, 174, 'jfwghwg', '2024-09-24', '22:02:00', 'rg2rijg', b'0', 0, '2024-09-24'),
(121, 174, 'wogvkwjwb', '2024-09-25', '03:03:00', 'wkgijr', b'0', 0, '2024-09-24'),
(122, 174, 'j3rgrijg', '2024-09-25', '03:33:00', '', b'0', 0, '2024-09-24'),
(123, 174, 'jgrjig', '2024-09-26', '04:45:00', '', b'0', 0, '2024-09-24'),
(124, 174, 'jrgrgjjg', '2024-09-26', '03:03:00', '', b'0', 0, '2024-09-24'),
(125, 174, 'ijvibfibni', '2024-09-26', '05:56:00', '', b'0', 0, '2024-09-24'),
(126, 174, 'wigjrgihgrh', '2024-09-26', '03:03:00', '', b'0', 0, '2024-09-24'),
(127, 174, 'eegggrgegr', '2024-09-26', '03:03:00', '', b'0', 0, '2024-09-24'),
(128, 174, '3333dd', '2024-09-26', '03:03:00', '', b'0', 0, '2024-09-24'),
(129, 174, 'fbfggss', '2024-09-27', '04:04:00', '', b'0', 0, '2024-09-24'),
(130, 174, 'fgdgsdsdgs', '2024-09-27', '04:33:00', '', b'0', 0, '2024-09-24'),
(131, 174, 'rg9rgjr', '2024-09-27', '11:01:00', '', b'0', 0, '2024-09-24'),
(132, 174, 'gje0irjgejg', '2024-09-27', '22:02:00', '', b'0', 0, '2024-09-24'),
(133, 174, 'gkokgkrokg', '2024-09-27', '05:05:00', '', b'0', 0, '2024-09-24'),
(134, 174, 'rgjrgjirjg', '2024-09-27', '06:06:00', '', b'0', 0, '2024-09-24'),
(135, 174, 'owgjiwjgij', '2024-09-28', '07:07:00', '', b'0', 0, '2024-09-24'),
(136, 174, 'giorgwrhg', '2024-09-28', '08:08:00', '', b'0', 0, '2024-09-24'),
(137, 174, 'wgjiwjgi', '2024-09-28', '09:09:00', 'nggjrj', b'0', 0, '2024-09-24'),
(138, 174, 'fjewjf0wg', '2024-09-28', '00:00:00', 'wegwgwr', b'0', 0, '2024-09-24'),
(139, 174, 'pojut09u42g', '2024-09-28', '23:02:00', '', b'0', 0, '2024-09-24'),
(140, 174, 'wgjwgowihg', '2024-09-28', '21:22:00', '', b'0', 0, '2024-09-24'),
(141, 174, 'gurg', '2024-09-29', '03:03:00', '', b'0', 0, '2024-09-24'),
(142, 174, 'giw0ghwg', '2024-09-29', '03:03:00', '', b'0', 0, '2024-09-24'),
(143, 174, 'ggu09rhg', '2024-09-29', '03:03:00', '', b'0', 0, '2024-09-24'),
(144, 174, 'fwekgwjgu', '2024-09-29', '05:05:00', '', b'0', 0, '2024-09-24'),
(145, 174, 'fwughurg', '2024-09-29', '05:05:00', '', b'0', 0, '2024-09-24'),
(146, 174, 'pjwdgoihwg', '2024-09-01', '03:03:00', '', b'0', 0, '2024-09-24'),
(147, 174, 'oehge2igu', '2024-09-01', '04:05:00', '', b'0', 0, '2024-09-24'),
(148, 174, 'fwohgoruh', '2024-09-01', '03:03:00', '', b'0', 0, '2024-09-24'),
(149, 174, 'gpwghohwg', '2024-09-01', '04:04:00', '', b'0', 0, '2024-09-24'),
(150, 174, 'epogjeoih', '2024-09-01', '06:05:00', 'gfgegeggg', b'0', 0, '2024-09-24'),
(151, 174, 'igrhg', '2024-09-01', '00:07:00', '', b'0', 0, '2024-09-24'),
(152, 174, 'gqwighquwgh', '2024-09-01', '05:55:00', '', b'0', 0, '2024-09-24'),
(153, 174, 'gejigh', '2024-09-02', '04:04:00', 'egjoieh', b'0', 0, '2024-09-24'),
(154, 174, 'grw9ugyrfffffff', '2024-09-02', '03:03:00', '', b'0', 0, '2024-09-24'),
(155, 174, 'oy8ytytwytytwytyt7', '2024-09-02', '05:05:00', '', b'0', 0, '2024-09-24'),
(156, 174, 'aaaaasssssssssssssss', '2024-09-02', '04:44:00', '', b'0', 0, '2024-09-24'),
(157, 174, 'Apresentação Senaii', '2024-09-02', '22:33:00', '', b'0', 0, '2024-09-24'),
(158, 174, 'koegjgjwwwwwwwwww', '2024-09-02', '03:33:00', '', b'0', 0, '2024-09-24'),
(159, 174, 'mamamamamamamamamama', '2024-09-02', '04:43:00', '', b'0', 0, '2024-09-24'),
(160, 174, 'éitjj2jgj294', '2024-09-24', '03:33:00', '', b'0', 0, '2024-09-24'),
(161, 174, '2jg0rg8y', '2024-09-03', '07:59:00', '', b'0', 0, '2024-09-24'),
(162, 174, 'pofqehgqge', '2024-09-03', '22:11:00', '', b'0', 0, '2024-09-24'),
(163, 174, 'eje9yg8wg', '2024-09-03', '11:11:00', '', b'0', 0, '2024-09-24'),
(164, 174, 'jgpihrg', '2024-09-03', '06:59:00', '', b'0', 0, '2024-09-24'),
(165, 174, 'fjighwrgh', '2024-09-03', '05:45:00', '', b'0', 0, '2024-09-24'),
(166, 174, 'wtjwijt', '2024-09-03', '04:44:00', '', b'0', 0, '2024-09-24'),
(167, 174, 'fwohgwhg', '2024-09-04', '04:43:00', '', b'0', 0, '2024-09-24'),
(168, 174, 'rghorhg', '2024-09-04', '03:33:00', '', b'0', 0, '2024-09-24'),
(169, 174, 'gpojwgpj', '2024-09-04', '11:00:00', '', b'0', 0, '2024-09-24'),
(170, 174, 'rpghiorhg', '2024-09-04', '23:00:00', '', b'0', 0, '2024-09-24'),
(171, 174, 'rgjrgh3rg', '2024-09-04', '03:30:00', '', b'0', 0, '2024-09-24'),
(172, 174, 'fgidhguwi', '2024-09-05', '03:03:00', '', b'0', 0, '2024-09-24'),
(173, 174, 'w	gjpihgw', '2024-09-05', '02:22:00', '', b'0', 0, '2024-09-24'),
(174, 174, 'ç        ejopew', '2024-09-05', '21:22:00', '', b'0', 0, '2024-09-24'),
(175, 174, 'poqjfoihqg', '2024-09-05', '22:34:00', '', b'0', 0, '2024-09-24'),
(176, 174, 'hgueg', '2024-09-06', '22:32:00', '', b'0', 0, '2024-09-24'),
(177, 174, 'ihfoihwg', '2024-09-06', '22:22:00', '', b'0', 0, '2024-09-24'),
(178, 174, 'jwgoiogqh', '2024-09-06', '14:59:00', '', b'0', 0, '2024-09-24'),
(179, 174, 'gwoiywyg', '2024-09-06', '04:44:00', '', b'0', 0, '2024-09-24'),
(180, 174, 'tgoprgy', '2024-09-06', '05:59:00', '', b'0', 0, '2024-09-24'),
(181, 174, 'whewoietuywt', '2024-09-07', '01:00:00', '', b'0', 0, '2024-09-24'),
(182, 174, 'gjwrghw', '2024-09-07', '12:34:00', '', b'0', 0, '2024-09-24'),
(183, 174, 'gwrgjyu', '2024-09-07', '12:20:00', '', b'0', 0, '2024-09-24'),
(184, 174, 'grwgwqg', '2024-09-07', '12:20:00', '', b'0', 0, '2024-09-24'),
(185, 174, 'gfefgehq', '2024-09-07', '12:50:00', '', b'0', 0, '2024-09-24'),
(186, 174, 'eheqhehe', '2024-09-07', '13:20:00', '', b'0', 0, '2024-09-24'),
(187, 174, 'pojghwrihg', '2024-09-08', '03:33:00', '', b'0', 0, '2024-09-24'),
(188, 174, 'gçeqipghi', '2024-09-08', '08:08:00', '', b'0', 0, '2024-09-24'),
(189, 174, 'wd´jgowihg', '2024-09-08', '03:33:00', '', b'0', 0, '2024-09-24'),
(190, 174, 'qpogjwiphg', '2024-09-08', '03:43:00', '', b'0', 0, '2024-09-24'),
(191, 174, 'pwgjoiwhg', '2024-09-08', '03:32:00', '', b'0', 0, '2024-09-24'),
(192, 174, 'fwjg0hg', '2024-09-08', '03:34:00', '', b'0', 0, '2024-09-24'),
(193, 174, 'wdjohg', '2024-09-08', '03:42:00', '', b'0', 0, '2024-09-24'),
(194, 174, 'dlvghwouh', '2024-09-09', '03:33:00', '', b'0', 0, '2024-09-24'),
(195, 174, ']´sgjhig', '2024-09-09', '12:11:00', '', b'0', 0, '2024-09-24'),
(196, 174, 'wpvjohib', '2024-09-09', '07:55:00', '', b'0', 0, '2024-09-24'),
(197, 174, 'gpwojggirr', '2024-09-09', '03:53:00', '', b'0', 0, '2024-09-24'),
(198, 174, '´wgjpihgohg', '2024-09-09', '04:54:00', '', b'0', 0, '2024-09-24'),
(199, 174, 'wpjgihrwg', '2024-09-09', '09:00:00', '', b'0', 0, '2024-09-24'),
(200, 174, 'pgjogih', '2024-09-10', '05:59:00', '', b'0', 0, '2024-09-24'),
(201, 174, 'jpwjg', '2024-09-10', '04:56:00', '', b'0', 0, '2024-09-24'),
(202, 174, 'wpgjh', '2024-09-10', '04:44:00', '', b'0', 0, '2024-09-24'),
(203, 174, 'v´jfgih', '2024-09-10', '04:43:00', '', b'0', 0, '2024-09-24'),
(204, 174, 'wpighroihg', '2024-09-10', '04:59:00', '', b'0', 0, '2024-09-24'),
(205, 174, '[pjgqhg', '2024-09-10', '21:22:00', '', b'0', 0, '2024-09-24'),
(206, 174, 'gwpojgoiwrhg', '2024-09-11', '03:22:00', '', b'0', 0, '2024-09-24'),
(207, 174, 'gworghiog', '2024-09-11', '04:44:00', '', b'0', 0, '2024-09-24'),
(208, 174, 'gjirhgh', '2024-09-11', '04:45:00', '', b'0', 0, '2024-09-24'),
(209, 174, 'qvfjbfhbiho', '2024-09-11', '06:06:00', '', b'0', 0, '2024-09-24'),
(210, 174, 'dsvjiwh', '2024-09-11', '05:05:00', '', b'0', 0, '2024-09-24'),
(211, 174, 'gwkgpojw', '2024-09-11', '05:05:00', '', b'0', 0, '2024-09-24'),
(219, 174, 'wrrhethwe', '2024-09-12', '22:02:00', '', b'0', 0, '2024-09-24'),
(223, 192, 'fbfbe', '2024-09-26', '11:22:00', 'ee', b'0', 0, '2024-09-26');

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
  `NUM_CARTAO` varchar(19) DEFAULT NULL,
  `CVV` varchar(4) DEFAULT NULL,
  `DATA_VENC` varchar(5) DEFAULT NULL,
  `NOME_CARTAO` varchar(19) DEFAULT NULL,
  `CHAVE_PIX` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `dados_pag`
--

INSERT INTO `dados_pag` (`ID_DADOS_PAG`, `TIPO_PAG`, `ID_CAD`, `CPF`, `DATA_PAG`, `NUM_CARTAO`, `CVV`, `DATA_VENC`, `NOME_CARTAO`, `CHAVE_PIX`) VALUES
(1, b'1', 1, '123-456-789-01', '2024-01-15', '1234-5678-9012', '1234', '2028-', 'Maria Luiza Poli', NULL),
(2, b'1', 2, '564-785-123-78', '2024-02-25', '3456-7890-1234', '4567', '2029-', 'Natália Samogim', NULL),
(3, b'1', 3, '678-454-675-46', '2024-04-24', '6554-2345-9076', '7890', '2026-', 'Laura Francine', NULL),
(4, b'1', 4, '584-234-289-00', '2024-04-18', '8798-3241-6653', '1357', '2029-', 'Júlia Dias', NULL),
(5, b'1', 4, '507.038.228-45', '2024-08-06', '1234567812345678', '123', '2026-', 'Maria Luiza', NULL),
(7, b'1', 4, '507.038.228-45', '2024-08-06', '1234567890123456', '123', '2024-', 'Maria Luzia', NULL),
(10, b'1', 4, '507.038.228-45', '2024-08-06', '1234567890123456', '123', '2024-', 'Natalia Samogim', NULL),
(12, b'1', 4, '402.186.218-84', '2024-08-06', '1234123412341234', '456', '2024-', 'Natalia Aparecida', NULL),
(14, b'1', 48, '402.186.218-84', '2024-08-06', '0909090909090909', '888', '2024-', 'Julia Dias ', NULL),
(15, b'1', 48, '402.186.218-84', '2024-08-06', '0909090909090909', '888', '2024-', 'Julia Dias ', NULL),
(16, b'1', 48, '402.186.218-84', '2024-08-06', '0909090909090909', '888', '2024-', 'Julia Dias ', NULL),
(17, b'1', 4, '461.228.218-37', '2024-08-06', '4567456745674567', '789', '2025-', 'Xavier', NULL),
(18, b'1', 49, '507.038.228-45', '2024-08-06', '1234123412341234', '123', '0000-', 'Laura Maria', NULL),
(19, b'1', 50, '461.228.218-37', '2024-08-06', '1234512345123456', '666', '2024-', 'Olivia Figueiredo', NULL),
(20, b'1', 51, '507.038.228-45', '2024-08-13', '1234123412341234', '678', '2025-', 'Érica Goulart', NULL),
(21, b'1', 61, '507.038.228-45', '2024-08-13', '2345234523452345', '123', '2024-', 'Aló', NULL),
(23, b'1', 75, '507.038.228-45', '2024-08-13', '2323232323232323', '111', '2024-', 'Aline Santos', NULL),
(24, b'1', 6, '507.038.228-45', '2024-08-15', '1234123412341234', '123', '2025-', 'Arthur', NULL),
(25, b'1', 6, '507.038.228-45', '2024-08-15', '1234123412341234', '123', '2025-', 'Arthur F', NULL),
(26, b'1', 97, '400.697.428-04', '2024-08-15', '1234123412341234', '456', '2026-', 'João Carlos', NULL),
(27, b'1', 99, '400.697.428-04', '2024-08-15', '1234123412341234', '888', '2025-', 'Marielza', NULL),
(28, b'1', 100, '507.038.228-45', '2024-08-15', '1234123412341234', '777', '2025-', 'Otávio Leal', NULL),
(29, b'1', 101, '400.697.428-04', '2024-08-15', '1234123412341234', '555', '2025-', 'Junior Donisete', NULL),
(30, b'1', 125, '507.038.228-45', '2024-08-22', '1243568721346578', '592', '2025-', 'Samanta', NULL),
(31, b'1', 125, '507.038.228-45', '2024-08-22', '1243568721346578', '592', '2025-', 'Samanta', NULL),
(32, b'1', 125, '507.038.228-45', '2024-08-22', '1243568790097865', '311', '2025-', 'Samanta', NULL),
(33, b'1', 125, '507.038.228-45', '2024-08-22', '1243568790097865', '311', '2025-', 'Samanta', NULL),
(34, b'1', 125, '507.038.228-45', '2024-08-22', '1243568790097865', '311', '2025-', 'Samanta', NULL),
(35, b'1', 125, '507.038.228-45', '2024-08-22', '1243568790097865', '311', '2025-', 'Samanta', NULL),
(36, b'1', 125, '507.038.228-45', '2024-08-22', '1243568790097865', '311', '2025-', 'Samanta', NULL),
(37, b'1', 125, '507.038.228-45', '2024-08-22', '1243568790097865', '311', '2025-', 'Samanta', NULL),
(38, b'1', 125, '507.038.228-45', '2024-08-22', '1243568790097865', '311', '2025-', 'Samanta', NULL),
(39, b'1', 126, '402.186.218-84', '2024-08-22', '1234567890123456', '345', '2025-', 'Samara', NULL),
(40, b'1', 126, '402.186.218-84', '2024-08-22', '1234567890123456', '345', '2025-', 'Samara', NULL),
(41, b'1', 127, '507.038.228-45', '2024-08-22', '1234567890123456', '324', '2024-', 'Sarah', NULL),
(42, b'1', 127, '507.038.228-45', '2024-08-22', '1231231231231231', '546', '2024-', 'xfrgrhh', NULL),
(43, b'1', 127, '507.038.228-45', '2024-08-22', '1231231231231231', '546', '2024-', 'xfrgrhh', NULL),
(44, b'1', 128, '507.038.228-45', '2024-08-22', '1212121212121212', '543', '2024-', 'Lilas', NULL),
(45, b'1', 128, '507.038.228-45', '2024-08-22', '1212121212121212', '543', '2024-', 'Lilas', NULL),
(46, b'1', 129, '507.038.228-45', '2024-08-27', '1231231231231231', '453', '2024-', 'Natalia Dias', NULL),
(47, b'1', 129, '507.038.228-45', '2024-08-27', '1231231231231231', '456', '2024-', 'g6yn7n', NULL),
(48, b'1', 131, '462.771.498-06', '2024-08-29', '1234123412341234', '123', '2024-', 'Moço ', NULL),
(49, b'1', 132, '507.038.228-45', '2024-09-17', '1231231231231231', '123', '2025-', 'Fffff', NULL),
(50, b'1', 133, '507.038.228-45', '2024-09-17', '1231231231231231', '123', '2024-', 'Eloa ', NULL),
(51, b'1', 133, '402.186.218-84', '2024-09-17', '1234567890123456', '123', '2024-', 'Eloá Miquelini', NULL),
(52, b'1', 133, '462.771.498-06', '2024-09-17', '1234567890123456', '123', '2024-', 'Eloá Miquelini ', NULL),
(53, b'1', 137, '462.771.498-06', '2024-09-17', '1234567890123456', '123', '2024-', 'Jullyheder', NULL),
(54, b'1', 137, '462.771.498-06', '2024-09-17', '1234567890123456', '123', '2024-', 'Jullyheder Tointo', NULL),
(55, b'1', 137, '462.771.498-06', '2024-09-17', '1234567890123456', '234', '2024-', 'Jullyheder Tointo ', NULL),
(56, b'1', 137, '462.771.498-06', '2024-09-17', '1234567890123456', '125', '2024-', 'Jullyheder Tointo ', NULL),
(57, b'1', 138, '462.771.498-06', '2024-09-17', '1234567890123456', '123', '2024-', 'Barléria Tointo', NULL),
(58, b'1', 138, '402.186.218-84', '2024-09-17', '1234567890123456', '123', '2024-', 'Barléria ', NULL),
(59, b'1', 138, '402.186.218-84', '2024-09-17', '1234567890123456', '345', '2024-', 'Julia', NULL),
(60, b'1', 138, '402.186.218-84', '2024-09-17', '1234567890123456', '123', '2024-', 'Julia', NULL),
(61, b'1', 138, '449.415.888-78', '2024-09-17', '1234567890123456', '345', '2024-', 'Sarah', NULL),
(62, b'1', 138, '461.228.218-37', '2024-09-17', '1234567890123456', '123', '2024-', 'Natalia', NULL),
(63, b'1', 139, '507.038.228-45', '2024-09-18', '1234123412341233', '123', '2024-', 'Sarah ', NULL),
(64, b'1', 140, '507.038.228-45', '2024-09-18', '1234123412341234', '125', '2025-', 'Arthur Vitório ', NULL),
(65, b'1', 141, '402.186.218-84', '2024-09-18', '1234123412341234', '602', '2026-', 'Julia Dias', NULL),
(66, b'1', 158, '999.999.999-99', '2024-09-19', '1234123412341234', '242', '2024-', 'Maria Luiza', NULL),
(67, b'1', 169, '123.456.789-09', '2024-09-24', '5656565656565656', '549', '2025-', 'Damon Salvatore', NULL),
(68, b'1', 170, '507.038.228-45', '2024-09-24', '3434343434343434', '890', '2026-', 'Stefan Salvatore', NULL),
(69, b'1', 171, '507.038.228-45', '2024-09-24', '6767676767676767', '467', '2025-', 'Maria Helena', NULL),
(70, b'1', 174, '507.038.228-45', '2024-09-24', '1212121212121212', '322', '2026-', 'Orminda', NULL),
(71, b'1', 175, '507.038.228-45', '2024-09-24', '1231231231231231', '543', '2025-', 'Alice Fernanda', NULL),
(72, b'1', 175, '507.038.228-45', '2024-09-24', '1231231231231231', '786', '2025-', 'Amanda', NULL),
(73, b'1', 175, '507.038.228-45', '2024-09-24', '1231231231231231', '786', '2025-', 'Alice Fernanda', NULL),
(74, b'1', 176, '507.038.228-45', '2024-09-24', '1231231231231231', '675', '2025-', 'Valda Goulart', NULL),
(75, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(76, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(77, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(78, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(79, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(80, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(81, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(82, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(83, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(84, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1', '345', '0000-', 'Gustavo', NULL),
(85, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1234', '345', '0000-', 'Gustavo', NULL),
(86, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1234', '345', '0000-', 'Gustavo', NULL),
(87, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1234', '345', '06/27', 'Gustavo', NULL),
(88, b'1', 189, '507.038.228-45', '2024-09-26', '1234 1234 1234 1234', '345', '06/27', 'Gustavo', NULL),
(89, b'1', 189, '507.038.228-45', '2024-09-26', '4567 1234 8907 5432', '456', '04/28', 'Fabiana Silva', NULL),
(90, b'1', 191, '507.038.228-45', '2024-09-26', '4567 1234 8907 5432', '456', '04/28', 'Gustavo', NULL),
(91, b'1', 192, '461.228.218-37', '2024-09-26', '2345 2345 2345 2345', '987', '09/29', 'Daniel', NULL),
(92, b'1', 192, '461.228.218-37', '2024-09-26', '2345 2345 2345 2345', '987', '09/29', 'Daniel', NULL),
(93, b'1', 192, '507.038.228-45', '2024-09-26', '1234 5678 9012 3456', '321', '07/25', 'Daniel D', NULL),
(94, b'1', 192, '461.228.218-37', '2024-09-26', '3434 3434 3433 3434', '654', '09/26', 'Daniel', NULL),
(95, b'1', 192, '507.038.228-45', '2024-09-26', '1231 2312 3123 1231', '654', '09/26', 'Daniel Ribeiro', NULL);

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
  `TEXTO` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

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
  MODIFY `ID_CAD` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=193;

--
-- AUTO_INCREMENT de tabela `compras`
--
ALTER TABLE `compras`
  MODIFY `id_compra` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=71;

--
-- AUTO_INCREMENT de tabela `compromissos`
--
ALTER TABLE `compromissos`
  MODIFY `ID_COMP` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=224;

--
-- AUTO_INCREMENT de tabela `dados_pag`
--
ALTER TABLE `dados_pag`
  MODIFY `ID_DADOS_PAG` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;

--
-- AUTO_INCREMENT de tabela `historico`
--
ALTER TABLE `historico`
  MODIFY `ID_HIST` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

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
