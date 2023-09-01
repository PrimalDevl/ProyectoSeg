DROP DATABASE programa_gestion;
CREATE DATABASE programa_gestion;
USE programa_gestion;

CREATE TABLE usuarios (
  cedula CHAR(8),
  nombre VARCHAR(255),
  apellido VARCHAR(255),
  contrasenya VARCHAR(255),
  es_administrador BOOLEAN,
  PRIMARY KEY (cedula)
)ENGINE = InnoDB;
CREATE TABLE clientes (
	cedula CHAR(8),
	nombre VARCHAR(255),
	apellido VARCHAR(255),
  comentario TEXT,
	PRIMARY KEY (cedula)
)ENGINE = InnoDB;

USE programa_gestion;
INSERT INTO usuarios (cedula, nombre, apellido, contrasenya, es_administrador) VALUES
(55554216, 'Fran', 'Yisoo', 'rockYou', 1),
(55555555, 'Fran', 'Fubu', 'rockYou', 0);

USE programa_gestion;
INSERT INTO clientes (cedula, nombre, apellido, comentario) VALUES
(63289588, 'Cliente A', 'A', 'hello_world'),
(68501316, 'Cliente B', 'B', 'hello_world'),
(33251785, 'Cliente C', 'C', 'hello_world'),
(41942119, 'Cliente D', 'D', 'hello_world'),
(65948985, 'Cliente E', 'E', 'hello_world'),
(93151148, 'Cliente F', 'F', 'hello_world'),
(16909688, 'Cliente G', 'G', 'hello_world'),
(89289708, 'Cliente H', 'H', 'hello_world'),
(12290514, 'Cliente I', 'I', 'hello_world'),
(14480766, 'Cliente J', 'J', 'hello_world');
