<?php
$conexion = new mysqli('localhost', 'root', '', 'informacion_clientes');
if ($conexion->connect_errno) {
  echo "Hubo un error al conectarse al sitio web.";
  exit;
}
?>
