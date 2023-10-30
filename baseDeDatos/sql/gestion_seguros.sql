CREATE DATABASE gestion_seguros;
USE gestion_seguros;

CREATE TABLE clientes (
	cedula INT(8),
	nombre VARCHAR(255),
	comentario TEXT(2047),
	PRIMARY KEY (cedula)
);
CREATE TABLE usuarios (
	cedula INT(7) AUTO_INCREMENT,
	nombre VARCHAR(255),
	apellido VARCHAR(255),
	direccion VARCHAR(255),
	telefono TEXT(9),
	PRIMARY KEY (cedula)
);
