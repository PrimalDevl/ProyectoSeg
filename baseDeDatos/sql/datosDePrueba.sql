USE gestion_seguros;
INSERT INTO clientes (cedula, nombre, comentario) VALUES
(12345010, 'Jose',     'Comentario; no pude, wwwwwww'),
(12345020, 'Fernando', 'Comentario; no pude, wwwwwww'),
(12345030, 'Luis',     'Comentario; no pude, wwwwwww'),
(12345040, 'Maria',    'Comentario; no pude, wwwwwww'),
(12345050, 'Nicolas',  'Comentario; no pude, wwwwwww'),
(12345060, 'Bruno',    'Comentario; no pude, wwwwwww'),
(12345070, 'Leonardo', 'Comentario; no pude, wwwwwww'),
(12345080, 'Victoria', 'Comentario; no pude, wwwwwww'),
(12345090, 'Carlos',   'Comentario; no pude, wwwwwww'),
(12345100, 'Rafael',   'Comentario; no pude, wwwwwww');

insert into usuarios (cedula, nombre, apellido, direccion, telefono, esAdmin) VALUES
(12345110, 'Alberto', 'Rodriguez', 'Pedro 1992', 094547321 ,0),
(12345120, 'Jhonatan', 'Marino', 'Villa Farre 4242', 095847524, 0),
(12345130, 'Amanda', 'Silva', 'Monte rey 2321', 096454452, 0),
(12345140, 'Ivan', 'Carrasco', 'Londres 2257', 096424581, 0),
(12345150, 'Mateo', 'Brum', 'San Martin 8482', 092147856, 0),
(12345160, 'Alexander', 'Pereira', 'Villa Costa 1478', 097856258, 0),
(12345170, 'Sebastian', 'Machado', 'San Luis 2942', 096254741, 0),
(12345180, 'Celeste', 'Vazquez', 'Mendoza 9384', 093547417, 0),
(12345190, 'Camila', 'Suarez', 'La Costa 7485', 097415589, 0),
(12345100, 'Rojelio', 'Di Fortuna', 'Pasaje Diagonal 2485', 094746358, 1);
