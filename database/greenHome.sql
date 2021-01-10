CREATE SCHEMA greenHome;
USE greenHome;

CREATE TABLE users (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL UNIQUE,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    category INT NOT NULL DEFAULT 10,
    avatar VARCHAR(255),
	created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME
);

CREATE TABLE products (
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(255) NOT NULL,
    price DECIMAL UNSIGNED NOT NULL,
    discount INT UNSIGNED DEFAULT 0,
    line VARCHAR(30) NOT NULL,
    copy VARCHAR(130) NOT NULL,
    description VARCHAR (1000) NOT NULL,
    prop_light INT NOT NULL,
    prop_water INT NOT NULL,
    prop_plantpot INT NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    prop_plague INT NOT NULL,
    prop_height DECIMAL NOT NULL,
    prop_pet INT NOT NULL,
    filter_dificult INT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME
);

CREATE TABLE categories(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME
);


CREATE TABLE benefits(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME
);

CREATE TABLE product_benefit(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    product_id INT UNSIGNED NOT NULL,
    benefit_id INT UNSIGNED NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME
);

CREATE TABLE rooms(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME
);

CREATE TABLE product_room(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    product_id INT UNSIGNED NOT NULL,
    room_id INT UNSIGNED NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME ON UPDATE CURRENT_TIMESTAMP,
    deleted_at DATETIME
);


ALTER TABLE products
ADD FOREIGN KEY (category_id) REFERENCES categories(id);

ALTER TABLE product_benefit
ADD FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE product_benefit
ADD FOREIGN KEY (benefit_id) REFERENCES benefits(id);

ALTER TABLE product_room
ADD FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE product_room
ADD FOREIGN KEY (room_id) REFERENCES rooms(id);

INSERT INTO `greenhome`.`users` (`email`, `first_name`, `last_name`, `password`, `avatar`) VALUES ('maxipagoto@gmail.com', 'Maximiliano', 'Pagoto', '$2b$10$9mRNf7TiafJVifTrRrH7/eGGS48oaCq2a67nzrNXOlOwMZ0NStamu', 'avatar_maxi_1610302538414.jpg');
INSERT INTO `greenhome`.`users` (`email`, `first_name`, `last_name`, `password`, `avatar`) VALUES ('alepizarro32@gmail.com', 'Iván Alejandro', 'Pizarro', '$2b$10$r/YUoCXx2kAySpcCIQ7Zqe8AcjbKUiKjsD16h3iT1xohq6qKsXsIG', 'avatar_jimmy_1610219393809.png');

INSERT INTO `greenhome`.`categories` (`name`) VALUES ('Plantas de Interior');
INSERT INTO `greenhome`.`categories` (`name`) VALUES ('Plantas de Exterior');
INSERT INTO `greenhome`.`categories` (`name`) VALUES ('Cáctus y Suculentas');
INSERT INTO `greenhome`.`categories` (`name`) VALUES ('Plantas Florales');
INSERT INTO `greenhome`.`categories` (`name`) VALUES ('Orquídeas');
INSERT INTO `greenhome`.`categories` (`name`) VALUES ('Frutales');
INSERT INTO `greenhome`.`categories` (`name`) VALUES ('Kokedamas');
INSERT INTO `greenhome`.`categories` (`name`) VALUES ('Accesorios');

INSERT INTO `greenhome`.`rooms` (`name`) VALUES ('Dormitorio');
INSERT INTO `greenhome`.`rooms` (`name`) VALUES ('Cocina');
INSERT INTO `greenhome`.`rooms` (`name`) VALUES ('Baño');
INSERT INTO `greenhome`.`rooms` (`name`) VALUES ('Balcón');
INSERT INTO `greenhome`.`rooms` (`name`) VALUES ('Oficina');
INSERT INTO `greenhome`.`rooms` (`name`) VALUES ('Jardín');
INSERT INTO `greenhome`.`rooms` (`name`) VALUES ('Terraza');

INSERT INTO `greenhome`.`benefits` (`name`) VALUES ('Trae buena suerte');
INSERT INTO `greenhome`.`benefits` (`name`) VALUES ('Ayuda a la ansiedad');
INSERT INTO `greenhome`.`benefits` (`name`) VALUES ('Absorbe la humedad');
INSERT INTO `greenhome`.`benefits` (`name`) VALUES ('Aromatizante');
INSERT INTO `greenhome`.`benefits` (`name`) VALUES ('Mejora la productividad');
INSERT INTO `greenhome`.`benefits` (`name`) VALUES ('Reduce el estrés');