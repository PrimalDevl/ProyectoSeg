<?php
$conexion = new mysqli('localhost', 'root', '', 'informacion_usuarios');
if ($conexion->connect_errno) {
  echo "Hubo un error al conectarse al sitio web";
  exit;
}
?>
