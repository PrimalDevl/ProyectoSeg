DROP DATABASE informacion_usuarios;
CREATE DATABASE informacion_usuarios;
USE informacion_usuarios;

CREATE TABLE usuarios (
  cedula CHAR(8),
  nombre VARCHAR(255),
  apellido VARCHAR(255),
  contrasenya VARCHAR(255),
  es_administrador BOOLEAN,
  PRIMARY KEY (cedula)
)ENGINE = InnoDB;

USE informacion_usuarios;
INSERT INTO usuarios (cedula, nombre, apellido, contrasenya, es_administrador) VALUES
(55554216, 'Fran', 'Yisoo', 'rockYou', 1),
(55555555, 'Fran', 'Fubu', 'rockYou', 0);
