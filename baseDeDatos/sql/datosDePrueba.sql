USE gestion_seguros;
INSERT INTO clientes (cedula, nombre, apellido, direccion, email) VALUES
(12345010, 'Jose',     'Marino', 'San Martin 8482', "nombre@direccion.uy"),
(12345020, 'Fernando', 'Pereira', 'Villa Costa 1478', "nombre@direccion.uy"),
(12345030, 'Luis',     'Vazquez', 'Mendoza 9384', "nombre@direccion.uy"),
(12345040, 'Maria',    'Di Fortuna', 'Pasaje Diagonal 2485', "nombre@direccion.uy"),
(12345050, 'Nicolas',  'Rodriguez', 'Pedro 1992', "nombre@direccion.uy"),
(12345060, 'Bruno',    'Silva', 'Monte rey 2321', "nombre@direccion.uy"),
(12345070, 'Leonardo', 'Rodriguez', 'Pedro 1992', "nombre@direccion.uy"),
(12345080, 'Victoria', 'Carrasco', 'Londres 2257', "nombre@direccion.uy"),
(12345090, 'Carlos',   'Machado', 'San Luis 2942', "nombre@direccion.uy"),
(12345001, 'Rafael',   'Suarez', 'La Costa 7485', "nombre@direccion.uy");

insert into usuarios (cedula, nombre, apellido, direccion, contrasena, esAdmin) VALUES
(12345110, 'Alberto', 'Rodriguez', 'Pedro 1992', 'claveUSUARIO', 0),
(12345120, 'Jhonatan', 'Marino', 'Villa Farre 4242', 'claveUSUARIO', 0),
(12345130, 'Amanda', 'Silva', 'Monte rey 2321', 'claveUSUARIO',  0),
(12345140, 'Ivan', 'Carrasco', 'Londres 2257', 'claveUSUARIO', 0),
(12345150, 'Mateo', 'Brum', 'San Martin 8482', 'claveUSUARIO', 0),
(12345160, 'Alexander', 'Pereira', 'Villa Costa 1478', 'claveUSUARIO', 0),
(12345170, 'Sebastian', 'Machado', 'San Luis 2942', 'claveUSUARIO', 0),
(12345180, 'Celeste', 'Vazquez', 'Mendoza 9384', 'claveUSUARIO', 0),
(12345190, 'Camila', 'Suarez', 'La Costa 7485', 'claveUSUARIO', 0),
(55554216, "Fran", "Chagas", "San Martin 1234", 'claveADMIN', 1),
(12345100, 'Rojelio', 'Di Fortuna', 'Pasaje Diagonal 2485', 'claveADMIN', 1);

insert  into seguros (fecha_comienzo, fecha_vencimiento, tipo_de_seguro, cantidad_asegurada, ci_cliente) values
("23-10-02", "23-11-02", "seguro de mascotas", 45000, 12345020),
("23-10-03", "23-11-03", "seguro auto", 100900, 12345001),
("23-10-04", "23-12-04", "seguro casa", 32000, 12345010),
("23-10-05", "23-12-05", "seguro vida", 73200, 12345070),
("23-10-06", "23-11-06", "seguro perdidas", 99120, 12345080),
("23-10-07", "23-11-07", "seguro transportes", 147100, 12345040),
("23-10-08", "23-11-08", "seguro salud", 100000, 12345010),
("23-10-09", "23-12-09", "seguro accidentes", 80900, 12345050),
("23-10-10", "23-12-10", "seguro dependencia", 45000, 12345090),
("23-10-11", "23-12-11", "seguro credito", 130000, 12345060);

insert into telefono_cliente (cedula, telefono) VALUES
(12345060, 094547321),
(12345020, 098327113),
(12345090, 094547362),
(12345070, 098341113),
(12345030, 094589321),
(12345070, 098323273),
(12345060, 094547395),
(12345010, 098327112),
(12345060, 094547363),
(12345070, 098327134);

insert into telefono_usuario (cedula, telefono) VALUES
(12345160, 094547321),
(12345120, 098327113),
(12345190, 094547362),
(12345170, 098341113),
(12345130, 094589321),
(12345170, 098323273),
(12345160, 094547395),
(12345110, 098327112),
(12345160, 094547363),
(12345170, 098327134);
