CREATE DATABASE gestion_seguros;
USE gestion_seguros;

CREATE TABLE clientes (
	cedula INT(8),
	nombre VARCHAR(255),
	apellido VARCHAR(255),
	direccion VARCHAR(255),
	email VARCHAR(255),
	PRIMARY KEY (cedula)
);
CREATE TABLE usuarios (
	cedula INT(8),
	nombre VARCHAR(255),
	apellido VARCHAR(255),
	direccion VARCHAR(255),
	contrasena VARCHAR(255) NOT NULL,
	esAdmin BOOLEAN,
	PRIMARY KEY (cedula)
);
CREATE TABLE seguros (
	fecha_comienzo DATE,
	fecha_vencimiento DATE,
	tipo_de_seguro VARCHAR(255),
	cantidad_asegurada INT(10),
	num_poliza INT(9) AUTO_INCREMENT,
	ci_cliente INT(8),
	FOREIGN KEY (ci_cliente) REFERENCES clientes(cedula),
	PRIMARY KEY (num_poliza, ci_cliente)
);
CREATE TABLE telefono_cliente (
	cedula INT(10),
	telefono INT(9),
	PRIMARY KEY (cedula, telefono),
	FOREIGN KEY (cedula) REFERENCES clientes(cedula)
);
CREATE TABLE telefono_usuario (
	cedula INT(10),
	telefono INT(9),
	PRIMARY KEY (cedula, telefono),
	FOREIGN KEY (cedula) REFERENCES usuarios(cedula)
);
CREATE TABLE bajas_logicas (
	identificador INT(8) AUTO_INCREMENT,
	datos TEXT(2047),
	PRIMARY KEY (identificador)
);
