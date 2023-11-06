CREATE DATABASE gestion_seguros;
USE gestion_seguros;

CREATE TABLE clientes (
	cedula INT(8),
	nombre VARCHAR(255),
	apellido VARCHAR(255),
	direccion VARCHAR(255),
	email VARCHAR(255),
	recibo_de_cuenta TEXT(2047),
	telefono INT(9),
	PRIMARY KEY (cedula)
);
CREATE TABLE usuarios (
	cedula INT(8),
	nombre VARCHAR(255),
	apellido VARCHAR(255),
	direccion VARCHAR(255),
	telefono TEXT(9),
	esAdmin BOOLEAN,
	PRIMARY KEY (cedula)
);
CREATE TABLE seguros (
	num_poliza INT(9),
	ci_cliente INT(8),
	rutEmpresa INT(12),
	tipo_de_seguro VARCHAR(255),
	cantidad_asegurada INT(10),
	fecha_comienzo DATE(),
	fecha_vencimiento DATE(),
	FOREIGN KEY (ci_cliente) REFERENCES cliente(cedula),
	PRIMARY KEY (num_poliza, ci_cliente)
)
CREATE TABLE bajas_logicas (
	identificador INT(8) AUTO_INCREMENT,
	datos TEXT(2047),
	PRIMARY KEY (identificador)
);
