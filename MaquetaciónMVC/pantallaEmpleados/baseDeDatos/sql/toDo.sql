CREATE DATABASE informacion_clientes;
USE informacion_clientes;

CREATE TABLE clientes (
	cedula CHAR(7),
	nombre VARCHAR(255),
	comentario TEXT(2047),
	PRIMARY KEY (identificador)
)ENGINE = InnoDB;
