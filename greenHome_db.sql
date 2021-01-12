SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
CREATE DATABASE IF NOT EXISTS `greenhome` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `greenhome`;

CREATE TABLE IF NOT EXISTS `benefits` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

INSERT INTO `benefits` VALUES
(1, 'Trae buena suerte', '2021-01-10 22:34:51', NULL, NULL),
(2, 'Ayuda a la ansiedad', '2021-01-10 22:34:51', NULL, NULL),
(3, 'Absorbe la humedad', '2021-01-10 22:34:51', NULL, NULL),
(4, 'Aromatizante', '2021-01-10 22:34:51', NULL, NULL),
(5, 'Mejora la productividad', '2021-01-10 22:34:51', NULL, NULL),
(6, 'Reduce el estrés', '2021-01-10 22:34:51', NULL, NULL);

CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

INSERT INTO `categories` VALUES
(1, 'Plantas de Interior', '2021-01-10 22:34:50', NULL, NULL),
(2, 'Plantas de Exterior', '2021-01-10 22:34:50', NULL, NULL),
(3, 'Cáctus y Suculentas', '2021-01-10 22:34:50', NULL, NULL),
(4, 'Plantas Florales', '2021-01-10 22:34:50', NULL, NULL),
(5, 'Orquídeas', '2021-01-10 22:34:50', NULL, NULL),
(6, 'Frutales', '2021-01-10 22:34:50', NULL, NULL),
(7, 'Kokedamas', '2021-01-10 22:34:50', NULL, NULL),
(8, 'Accesorios', '2021-01-10 22:34:50', NULL, NULL);

CREATE TABLE IF NOT EXISTS `products` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `image` varchar(255) NOT NULL,
  `price` decimal(10,0) UNSIGNED NOT NULL,
  `discount` int(10) UNSIGNED DEFAULT 0,
  `line` varchar(30) NOT NULL,
  `copy` varchar(130) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `prop_light` int(11) NOT NULL,
  `prop_water` int(11) NOT NULL,
  `prop_plantpot` int(11) NOT NULL,
  `category_id` int(10) UNSIGNED NOT NULL,
  `prop_plague` int(11) NOT NULL,
  `prop_height` decimal(10,0) NOT NULL,
  `prop_pet` int(11) NOT NULL,
  `filter_dificult` int(11) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;

INSERT INTO `products` VALUES
(1, 'Palma Kentia', '5ff49aaa50f1e113794420.jpg', '3500', 10, 'Tropical y purificadora', 'Sus cuidados son de lo más sencillo y además fomentará la productividad de aquel que la tenga cerca.', 'Recomendaciones: La Kentia necesita estár en espacios ampios para poder crecer libremente. No es tóxica para humanos ni mascotas. Excepto para los gatos, que pueden sufrir dolores de barriga por la ingesta de hojas. Cuidados  Luz: Se adapta a cualquier nivel de luz. Riego Moderado: Una vez a la semana. Humedad: Le gusta mucho sentrise fresca, pulverizala dos veces a la semana. Consejo top: Fertilizarla una vez al mes fomentará su crecimiento y salud. Beneficios Es una planta decorativa muy agradecida, que va bien para espacios poco iluminados como la oficina, vestíbulos, eventos o centros comerciales. Se puede utilizar para crear separadores de espacios de trabajo, o zonas de descanso. Ayudan a purificar el aire, y mejorar la productividad. Incluso en cierta medida ayuda a absorber el ruido.', 1, 2, 3, 1, 0, '2', 0, 1, '2021-01-11 01:53:22', '2021-01-11 01:57:13', NULL),
(2, 'Costilla de Adán', '5fd79adc53759291652022.jpg', '2000', 0, 'Se adapta a cualquier ambiente', 'La Monstera deliciosa es también conocida como \"Costilla de Adán\" por las distintivas apeturas en sus hojas.', 'Recomendaciones : No es seguro para mascotas, especialmente para gatos. La monstera es una planta venenosa. Una excesiva cantidad de agua puede destruir sus hojas. Antes de regar, recuerda siempre revisar la tierra primero. Cuidados Luz: Se adapta a cualquier nivel de luz, pero prefiere la luz indirecta. Riego Moderado: Cuando el sustrato se esté secando. Humedad: Se adapta bien a cualquier nivel de humedad. Consejo top: Puede resistir las bajas temperaturas, aunque no las heladas. Por debajo de los 0º, las hojas se abrasarían por el frío. Beneficios Gracias a la belleza de sus llamativas hojas de color verde intenso y brillante, esta planta es muy utilizada en decoración.', 0, 1, 3, 1, 0, '2', 0, 2, '2021-01-11 02:06:11', NULL, NULL),
(3, 'Begonia Corallina', '5fe098ddb59de811811041.jpg', '1000', 5, 'Tropical y resistente', 'Begonia Tamaya también conocida como \"Begonia Corallina\" por la belleza de sus flores', 'Recomendaciones : No es apta para niños ni mascotas. La ingesta de sus hojas puede causar dolor de estomago. Ubica la planta en un lugar de mucha luz y sin corrientes de aire, tolera mejor la calor que el frío.   Cuidados Luz: A esta planta le encanta la luz, pero indirecta. La luz directa puede quemar sus preciosa hojas. Riego Moderado: Esta planta tolera mejor la sequedad que el exceso de agua. Regar únicamente cuando note el sustrato seco. Humedad: Esta planta no tolera la humedad. No se deben pulverizar sus hojas. Consejo top: Se recomienda utilizar fertilizante líquido con el riego cada dos días en las épocas de primavera y verano sobretodo.  Beneficios Esta planta es capaz de reproducir por esquejes tantas veces como quiera, así que es conocida también como la planta de la belleza y la amistad. ', 1, 1, 2, 1, 0, '1', 0, 3, '2021-01-11 02:11:32', '2021-01-11 23:57:58', NULL),
(4, 'Árbol de Olivo', '5ed8fc4aaab12428386429.jpg', '1400', 0, 'Resistente y hermoso', 'Olea europaea o Árbol de Olivo. Llamada también olivera o aceituno. ', 'Recomendaciones : No es segura para las mascotas, ya que puede ser tóxica si es ingerida. Una excesiva cantidad de agua puede destruir sus hojas. Antes de regar, recuerda siempre revisar la tierra primero. Cuidados Luz: Se adapta a cualquier nivel de luz, pero prefiere la luz indirecta. Riego Moderado: Cuando el sustrato se esté secando. Humedad: Se adapta bien a cualquier nivel de humedad. Consejo top: No se necesitan cuidados especiales. Ella se adapta muy bien a cualquier tipo de espacio. Beneficios Se dice que el árbol de olivo atrae la prosperidad y la buena suerte.', 1, 1, 3, 2, 0, '2', 0, 2, '2021-01-11 02:16:41', '2021-01-11 02:18:17', NULL),
(5, 'Arbol pino ', '5fe342b30d14e745711639.jpg', '1000', 50, 'Lindo y aromatizante', 'Es ideal para decorar tu hogar en navidades y tiene un olor suave y fresco', 'Recomendaciones Su tamaño lo hace ideal para cualquier espacio. Es perfecto para tu estudio, salón o habitación. Esta planta podría causar reacciones alérgicas en las mascotas o niños pequeños. Te recomendamos mantenerla en un lugar seguro, ya que al ser ingerida podría causar malestar estomacal a tus mascotas.    Cuidados Luz: el pino prefiere la luz directa del Sol, o incluso luz indirecta. No le gustan mucho los espacios cerrados o con poca luz, pero no le pasará nada malo si pasa unas semanas con poca luz. Riego Moderado: te recomendamos regarlo cuando la tierra esté casi seca al tacto, de manera que el sustrato se mantenga húmedo. Con 1riego semanal será suficiente.  Humedad: cualquier nivel de humedad le va bien al pino,ya que es una planta muy resistente. Consejo top: el pino puede tolerar prácticamente cualquier temperatura durante cualquier época del año.    Beneficios Utilizar un arbol con vida en Navidad y no uno de plástico ayudará a reducir la contaminación en el medio amb', 0, 1, 2, 2, 0, '2', 0, 1, '2021-01-11 02:22:30', NULL, NULL),
(6, 'Suculentas con Macetero Étnico', '5fdcbfb53a357391851446.jpg', '500', 5, 'Suculentas clasica', '2 plantas Haworthia (familia de las suculentas)', 'Recomendaciones : Estas plantas no son tóxicas para tus mascotas. Pero te recomendamos mantenerla fuera del alcance de tus perros o gatos para evitar que las espinas hagan daño. Una excesiva cantidad de agua puede destruir sus raíces. Cuidados Luz: Se adapta a cualquier nivel de luz, pero prefiere la luz indirecta. Riego Moderado: Cuando el sustrato se esté secando. Humedad: No le gusta refrescarse, no hay que pulverizar sus hojas. Consejo top: Son de diferentes formas y tamaños, colócalos juntos para una exhibición impresionante. Las suculentas dan mucho y piden poco. Duo de maceteros étnicas Hechas de cerámica con un diseño étnico y diferente en cada maceta. Color gris con acabado mate. Tamaño de las macetas: Alto: 10 cm. Diámetro interno: 10 cm.', 0, 1, 1, 3, 0, '0', 0, 1, '2021-01-11 02:26:21', NULL, NULL),
(7, 'Trio Cactus Inmortal', '5f7dc53c52af8510549046.jpg', '2000', 0, '3 Cactus ', ' Cactus originario del Brasil, Argentina Uruguay', 'Una selección de tres cactus de diferentes orígenes pensados para el interior del hogar, la decoración y espacios con poca o casi nada de luz.  P.D. La selección de cactus puede variar, su origen no.     Recomendaciones :     Estas plantas no son tóxicas para tus mascotas. Pero te recomendamos mantenerla fuera del alcance de tus perros o gatos para evitar que las espinas hagan daño. Una excesiva cantidad de agua puede destruir sus raíces. Cuidados Luz: Se adapta a cualquier nivel de luz, pero prefiere la luz indirecta. Riego Moderado: Cuando el sustrato se esté secando. Humedad: No le gusta refrescarse, no hay que pulverizar sus hojas. Consejo top: Son de diferentes formas y tamaños, colócalos juntos para una exhibición elegante. Cuidar de varios es tan fácil como cuidar de uno. Le va una maceta de 12 - 15cm Beneficios Los cactus purifican el ambiente y hacen de barrera contra la radiación electromagnética de los electrodomésticos. Los cactus son una fuente inagotable de energía. En la', 0, 1, 1, 3, 0, '0', 0, 1, '2021-01-11 02:29:35', NULL, NULL),
(8, 'Helecho Boston S', '5f881949a2a74990952451.jpg', '350', 0, 'Regula la humedad', 'Nephrolepis exaltata, también conocida como helecho común o helecho doméstico', 'Recomendaciones : Es apta para niños y mascotas, no es tóxica y es segura para mascotas. Evitar las zonas excesivamente secas, calurosas o con luz directa del sol. Cuidados  Luz: Le encanta la luz indirecta. Riego Regular: 2 veces a la semana. Humedad: Adora refrescarse, pulveriza sus hojas todos los días. Consejo Top: Aunque sea irresistible acariciar esas hojas, es mejor no hacerlo porque no le gusta y se pondrán marrones en señal de protesta. Beneficios Regula la humedad ambiental. Ayuda a neutralizar la electricidad estática provocada por los aparatos electrónicos y fibras textiles. Purifica el ambiente absorbiendo las sustancias tóxicas presentes en el aire. Disminuye los niveles de formaldehídos y otros contaminantes químicos presentes en la pintura y barniz de muebles y productos de cosmética.', 0, 1, 2, 1, 0, '1', 0, 1, '2021-01-11 02:32:19', NULL, NULL),
(9, 'Planta Serpiente', '5fa3e4f9399a7434382568.jpg', '1200', 0, 'Planta Serpiente', 'Sansevieria o Planta de la Serpiente también conocida como \"cola de lagarto\" o \"lengua de suegra', 'Recomendaciones: No es apta para niños y mascotas, sus hojas pueden causar malestar estocamal si llegan a ser ingeridas en grandes cantidades. Evita siempre regar esta planta en exceso, prefiere la sequía. Cuidados Luz: Se adapta a cualquier nivel de luz. Riego Moderado: Cuando el sustrato se esté secando. Humedad: No le gusta refrescarse, no hay que pulverizar sus hojas. Consejo top: Es una plantita ideal para el dormitorio porque almacenta oxígeno durante el día y lo libera todo por la noche. Beneficios Esta planta elimina las toxinas que poco a poco se van acumulando en los ambientes interiores. Absorbe el óxido de nitrógeno y los formaldehídos dañinos que flotan en el aire. Así que además de decorar, mantendrá tu hogar libre de sustancias nocivas. Se dice que esta planta atrae la buena suerte y elimina las energías negativas del ambiente.', 0, 1, 2, 1, 0, '2', 0, 1, '2021-01-11 02:39:28', NULL, NULL),
(10, 'Hiedra', '5ff6f0b7eafc3577893892.jpg', '2000', 15, 'La trepadora mas hermosa', 'Hedera helix también conocida como \"Hiedra común\" es la elección preferida por las personas que se inician en el mundo de las plan', 'Recomendaciones: Esta planta es tóxica para niños y mascotas. Evita la luz directa del sol ya que puede quemar sus hojas.  Cuidados: Luz: Le gustan los lugares con luz indirecta o semisombra. Riego Moderado: No tolera el exceso de agua. Regar una vez a la semana será suficiente para ella. Humedad: Se adapta a cuallquier nivel de humedad. Consejo top: Procura no regar con agua del grifo, su tolerancia a la cal es baja y podría enfermar sus hojas.  Beneficios: Sus hojas tienen propiedades beneficiosas utilizadas para remedios anticelulíticos y para remedios contra la tos. Se dice que esta planta atrae la buena suerte y elimina las energías negativas del ambiente.', 0, 1, 1, 1, 0, '1', 0, 1, '2021-01-11 02:42:02', NULL, NULL),
(11, 'Kokedama Monstera colgante', '5fe09b6c50461656920878.jpg', '1500', 0, 'llena tu hogar de aire limpio.', 'Rhaphidophora Tetrasperma también conocida como \"Monstera Mini\" ', 'Recomendaciones : No es seguro para mascotas, especialmente para gatos. La monstera es una planta venenosa. Una excesiva cantidad de agua puede destruir sus hojas. Antes de regar, recuerda siempre revisar la tierra primero.  Cuidados Luz: Se adapta a cualquier nivel de luz, pero prefiere la luz indirecta. Riego Moderado: Cuando el sustrato se esté secando. Humedad: Adora sentirse fresca, pulveriza sus hojas cada dos días. Consejo top: Esta planta no tolera las temperaturas bajas. A menos de 18 grados centígrados puede empezar a perder sus hojas.  Beneficios Gracias a la belleza de sus llamativas hojas de color verde intenso y brillante, esta planta es muy utilizada en decoración.', 0, 1, 1, 7, 0, '1', 0, 1, '2021-01-11 02:50:39', NULL, NULL);

CREATE TABLE IF NOT EXISTS `product_benefit` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` int(10) UNSIGNED NOT NULL,
  `benefit_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `benefit_id` (`benefit_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;

INSERT INTO `product_benefit` VALUES
(5, 2, 6, '2021-01-11 02:06:12', NULL, NULL),
(8, 4, 1, '2021-01-11 02:18:17', NULL, NULL),
(9, 5, 3, '2021-01-11 02:22:30', NULL, NULL),
(10, 5, 4, '2021-01-11 02:22:30', NULL, NULL),
(12, 6, 6, '2021-01-11 02:26:21', NULL, NULL),
(13, 7, 2, '2021-01-11 02:29:35', NULL, NULL),
(14, 7, 5, '2021-01-11 02:29:36', NULL, NULL),
(15, 7, 6, '2021-01-11 02:29:36', NULL, NULL),
(16, 8, 2, '2021-01-11 02:32:20', NULL, NULL),
(17, 8, 3, '2021-01-11 02:32:20', NULL, NULL),
(18, 9, 2, '2021-01-11 02:39:28', NULL, NULL),
(19, 9, 3, '2021-01-11 02:39:28', NULL, NULL),
(20, 9, 5, '2021-01-11 02:39:28', NULL, NULL),
(21, 10, 3, '2021-01-11 02:42:02', NULL, NULL),
(22, 10, 6, '2021-01-11 02:42:02', NULL, NULL),
(23, 11, 6, '2021-01-11 02:50:39', NULL, NULL),
(24, 1, 5, '2021-01-11 23:56:17', NULL, NULL),
(27, 3, 3, '2021-01-11 23:57:58', NULL, NULL);

CREATE TABLE IF NOT EXISTS `product_room` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` int(10) UNSIGNED NOT NULL,
  `room_id` int(10) UNSIGNED NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `room_id` (`room_id`)
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4;

INSERT INTO `product_room` VALUES
(12, 2, 1, '2021-01-11 02:06:12', NULL, NULL),
(13, 2, 5, '2021-01-11 02:06:12', NULL, NULL),
(19, 4, 4, '2021-01-11 02:18:17', NULL, NULL),
(20, 4, 6, '2021-01-11 02:18:17', NULL, NULL),
(21, 4, 7, '2021-01-11 02:18:17', NULL, NULL),
(22, 5, 4, '2021-01-11 02:22:30', NULL, NULL),
(23, 5, 6, '2021-01-11 02:22:30', NULL, NULL),
(24, 5, 7, '2021-01-11 02:22:30', NULL, NULL),
(27, 6, 1, '2021-01-11 02:26:21', NULL, NULL),
(28, 6, 2, '2021-01-11 02:26:21', NULL, NULL),
(29, 6, 5, '2021-01-11 02:26:21', NULL, NULL),
(30, 7, 1, '2021-01-11 02:29:35', NULL, NULL),
(31, 7, 2, '2021-01-11 02:29:35', NULL, NULL),
(32, 7, 3, '2021-01-11 02:29:35', NULL, NULL),
(33, 7, 5, '2021-01-11 02:29:35', NULL, NULL),
(34, 8, 1, '2021-01-11 02:32:20', NULL, NULL),
(35, 8, 2, '2021-01-11 02:32:20', NULL, NULL),
(36, 8, 3, '2021-01-11 02:32:20', NULL, NULL),
(37, 8, 5, '2021-01-11 02:32:20', NULL, NULL),
(38, 9, 4, '2021-01-11 02:39:28', NULL, NULL),
(39, 10, 1, '2021-01-11 02:42:02', NULL, NULL),
(40, 10, 2, '2021-01-11 02:42:02', NULL, NULL),
(41, 10, 3, '2021-01-11 02:42:02', NULL, NULL),
(42, 10, 5, '2021-01-11 02:42:02', NULL, NULL),
(43, 11, 1, '2021-01-11 02:50:39', NULL, NULL),
(44, 11, 2, '2021-01-11 02:50:39', NULL, NULL),
(45, 11, 3, '2021-01-11 02:50:39', NULL, NULL),
(46, 11, 4, '2021-01-11 02:50:39', NULL, NULL),
(47, 11, 5, '2021-01-11 02:50:39', NULL, NULL),
(48, 1, 1, '2021-01-11 23:56:17', NULL, NULL),
(49, 1, 5, '2021-01-11 23:56:17', NULL, NULL),
(50, 1, 8, '2021-01-11 23:56:17', NULL, NULL),
(57, 3, 1, '2021-01-11 23:57:58', NULL, NULL),
(58, 3, 4, '2021-01-11 23:57:58', NULL, NULL),
(59, 3, 8, '2021-01-11 23:57:58', NULL, NULL);

CREATE TABLE IF NOT EXISTS `rooms` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4;

INSERT INTO `rooms` VALUES
(1, 'Dormitorio', '2021-01-10 22:34:50', NULL, NULL),
(2, 'Cocina', '2021-01-10 22:34:50', NULL, NULL),
(3, 'Baño', '2021-01-10 22:34:50', NULL, NULL),
(4, 'Balcón', '2021-01-10 22:34:51', NULL, NULL),
(5, 'Oficina', '2021-01-10 22:34:51', NULL, NULL),
(6, 'Jardín', '2021-01-10 22:34:51', NULL, NULL),
(7, 'Terraza', '2021-01-10 22:34:51', NULL, NULL),
(8, 'Living', '2021-01-11 20:55:38', NULL, NULL);

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `category` int(11) NOT NULL DEFAULT 10,
  `avatar` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` VALUES
(1, 'maxipagoto@gmail.com', 'Maximiliano', 'Pagoto', '$2b$10$9mRNf7TiafJVifTrRrH7/eGGS48oaCq2a67nzrNXOlOwMZ0NStamu', 10, 'avatar_maxi_1610302538414.jpg', '2021-01-10 22:34:50', NULL, NULL),
(2, 'alepizarro32@gmail.com', 'Iván Alejandro', 'Pizarro', '$2b$10$r/YUoCXx2kAySpcCIQ7Zqe8AcjbKUiKjsD16h3iT1xohq6qKsXsIG', 10, 'avatar_jimmy_1610219393809.png', '2021-01-10 22:34:50', NULL, NULL);


ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

ALTER TABLE `product_benefit`
  ADD CONSTRAINT `product_benefit_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_benefit_ibfk_2` FOREIGN KEY (`benefit_id`) REFERENCES `benefits` (`id`);

ALTER TABLE `product_room`
  ADD CONSTRAINT `product_room_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `product_room_ibfk_2` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`);