-- phpMyAdmin SQL Dump
-- version 4.8.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-06-2020 a las 08:46:58
-- Versión del servidor: 10.1.32-MariaDB
-- Versión de PHP: 5.6.36

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `semvc`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resultados`
--

CREATE TABLE `resultados` (
  `idResultados` int(11) NOT NULL,
  `nota1` float NOT NULL,
  `nota2` float NOT NULL,
  `nota3` float NOT NULL,
  `nota4` float NOT NULL,
  `promedio` float NOT NULL,
  `idUsuario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `resultados`
--

INSERT INTO `resultados` (`idResultados`, `nota1`, `nota2`, `nota3`, `nota4`, `promedio`, `idUsuario`) VALUES
(2, 4, 5, 5, 2, 4, 11),
(4, 5, 4.5, 3.5, 2, 3.75, 22),
(5, 5, 5, 4, 0, 4.66667, 29),
(7, 4.8, 4.2, 3, 3.5, 3.875, 26),
(8, 5, 4, 5, 0, 4.66667, 27),
(9, 5, 5, 5, 0, 5, 25),
(10, 5, 4, 3, 5, 4.25, 13);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `temas`
--

CREATE TABLE `temas` (
  `id_documento` int(11) NOT NULL,
  `titulo` varchar(200) COLLATE utf8_bin NOT NULL,
  `descripcion` varchar(200) COLLATE utf8_bin NOT NULL,
  `tamanio` int(11) NOT NULL,
  `tipo` varchar(200) COLLATE utf8_bin NOT NULL,
  `nombre_archivo` varchar(200) COLLATE utf8_bin NOT NULL,
  `tema` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `temas`
--

INSERT INTO `temas` (`id_documento`, `titulo`, `descripcion`, `tamanio`, `tipo`, `nombre_archivo`, `tema`) VALUES
(1, 'Accidentes de transito', 'accidentes en la carretera', 64532, 'application/pdf', 'Diagrama Caso de uso Accidentes.pdf', 1),
(2, 'Movilidad', 'movilidad', 43857, 'application/pdf', 'Diagrama de clases Accidentes.pdf', 2),
(3, 'seÃ±ales', 'seÃ±ales', 59745, 'application/pdf', 'Diagrama de procesos accidentes.pdf', 3),
(5, 'comparendos', 'comparendos', 171704, 'application/pdf', 'DOCUMENTACION DEL PROYECTO SEMVC.pdf', 4),
(6, 'comparendos1', 'comparendos1', 152459, 'application/pdf', 'INSTRUCCIONES DE PRUEBA DEL CÃ“DIGO.pdf', 4),
(7, 'lineamientos', 'dshnjkncd', 711275, 'application/pdf', 'MANUAL DE USUARIO v1.pdf', 5),
(8, '123', '123', 28220, 'application/pdf', 'Capas de arquitectura.pdf', 1),
(9, 'documentos2', 'documentos', 711275, 'application/pdf', 'MANUAL DE USUARIO v1.pdf', 1),
(10, 'hjdfsajk', 'bjfdskfhk', 64532, 'application/pdf', 'Diagrama Caso de uso Accidentes.pdf', 1),
(11, 'fdbjf', 'fdsj', 278476, 'application/pdf', 'clase_2_converted.pdf', 2),
(12, 'VEHICULO', 'HJDKFFDJK', 537314, 'application/pdf', 'clase_3_converted.pdf', 3),
(13, 'HISHDWK', 'JKDSVSJK', 196558, 'application/pdf', 'TRABAJO FINAL DE REDES.pdf', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `test`
--

CREATE TABLE `test` (
  `idTest` int(11) NOT NULL,
  `titulo` varchar(200) COLLATE utf8_bin NOT NULL,
  `tema` int(11) NOT NULL,
  `enlace` varchar(200) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `test`
--

INSERT INTO `test` (`idTest`, `titulo`, `tema`, `enlace`) VALUES
(1, 'documentos', 1, 'https://docs.google.com/forms/d/e/1FAIpQLSfn7cQkmWP2A-wXJcuVAz6Jh39F-GX6aVJ5isnGvUY2f3LVgA/viewform?usp=sf_link'),
(2, 'documentos', 1, 'https://docs.google.com/forms/d/e/1FAIpQLSfn7cQkmWP2A-wXJcuVAz6Jh39F-GX6aVJ5isnGvUY2f3LVgA/viewform?usp=sf_link'),
(3, 'lineamientos', 5, 'https://docs.google.com/forms/d/1NunI61B2hhdRa4_TXCCU5kpDTzDqDXtFbYDGv_BSEEo/edit'),
(4, 'lineamientos', 5, 'https://docs.google.com/forms/d/e/1FAIpQLSe8y5U8apRMfnDsDI-cTuihFwFF_Q8zM4G4TbTqYDA4TCTIrg/viewform?usp=sf_link'),
(5, 'VEHICULO', 3, 'https://docs.google.com/forms/d/e/1FAIpQLSfn7cQkmWP2A-wXJcuVAz6Jh39F-GX6aVJ5isnGvUY2f3LVgA/viewform?usp=sf_link'),
(6, 'PARAMETROS ', 6, 'https://docs.google.com/forms/d/e/1FAIpQLSfn7cQkmWP2A-wXJcuVAz6Jh39F-GX6aVJ5isnGvUY2f3LVgA/viewform?usp=sf_link'),
(7, 'bhjdcbh', 2, 'https://docs.google.com/forms/d/e/1FAIpQLSdA3Mi4SVeHjr_jCjHq6trTJAnOvKcAAJktjC0XQtUYf4JuwA/viewform?usp=sf_link'),
(8, 'bghcjxsgchs', 2, 'https://docs.google.com/forms/d/e/1FAIpQLSdA3Mi4SVeHjr_jCjHq6trTJAnOvKcAAJktjC0XQtUYf4JuwA/viewform?usp=sf_link');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `idUsuario` int(11) NOT NULL,
  `cedula` int(11) NOT NULL,
  `nombre` varchar(200) COLLATE utf8_bin NOT NULL,
  `correo` varchar(200) COLLATE utf8_bin NOT NULL,
  `contrasena` varchar(200) COLLATE utf8_bin NOT NULL,
  `verificar` varchar(200) COLLATE utf8_bin NOT NULL,
  `tipoUsuarios` varchar(200) COLLATE utf8_bin NOT NULL,
  `borrado` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`idUsuario`, `cedula`, `nombre`, `correo`, `contrasena`, `verificar`, `tipoUsuarios`, `borrado`) VALUES
(11, 42892258, 'Olga Cecilia Giraldo Cardona', 'giraldolga999@hotmail.com', '12345', '12345', 'Conductor', 0),
(13, 42892262, 'esting9', 'esting9@gmail.com', '12345', '12345', 'Conductor', 1),
(15, 1037668442, 'Sebas', 'sebas-clavi@hotmail.com', '12345', '12345', 'Administrador', 0),
(17, 42892269, 'valentina', 'valejara200@gmail.com', '123', '123', 'Administrador', 0),
(19, 1234568, 'maria isabel', 'mmarin@gmail.com', '12345', '12345', 'Administrador', 0),
(22, 42892248, 'Gabriel', 'gabriel111@gmail.com', '123456', '123456', 'Conductor', 0),
(24, 123456123, 'pablo', 'pablojm123@gmail.com', '123456', '123456', 'Conductor', 1),
(25, 12345, 'Olga Giraldo', 'giraldolga999@gmail.com', '12345678', '12345678', 'Peaton', 0),
(26, 42892265, 'manuela', 'manuela123@gmail.com', '12345', '12345', 'Administrador', 0),
(27, 4561268, 'Pedro', 'pedro123@gmail.com', '54321', '54321', 'Peaton', 0),
(29, 45615951, 'Doris Elena Giraldo Cardona', 'doris2603@gmail.com', '123456', '123456', 'Peaton', 0),
(30, 2147483647, 'mateo soto lopez', 'mateosoto902@gmail.com', '12345', '12345', 'Conductor', 0),
(31, 456456, 'valentina jaramiello', 'valejar02@gmail.com', '12345', '12345', 'Administrador', 0),
(32, 0, '', '', '', '', 'Seleccione', 1),
(34, 45616156, 'Olga Cecilia Giraldo Cardona', 'giraldolga999@outlook.com', '123456', '123456', 'Conductor', 0),
(35, 4631665, 'rogelio pataquiva tocasuche', 'rogeliop@gmail.com', '12345', '12345', 'Conductor', 0),
(36, 16542348, 'jorge', 'jorge@gmail.com', '123456', '123456', 'Conductor', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `resultados`
--
ALTER TABLE `resultados`
  ADD PRIMARY KEY (`idResultados`),
  ADD UNIQUE KEY `idUsuario` (`idUsuario`);

--
-- Indices de la tabla `temas`
--
ALTER TABLE `temas`
  ADD PRIMARY KEY (`id_documento`);

--
-- Indices de la tabla `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`idTest`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `cedula` (`cedula`),
  ADD UNIQUE KEY `correo` (`correo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `resultados`
--
ALTER TABLE `resultados`
  MODIFY `idResultados` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `temas`
--
ALTER TABLE `temas`
  MODIFY `id_documento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `test`
--
ALTER TABLE `test`
  MODIFY `idTest` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `resultados`
--
ALTER TABLE `resultados`
  ADD CONSTRAINT `resultados_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`idUsuario`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
