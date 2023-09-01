<?php
$conexion = new mysqli('localhost', 'root', '', 'programa_gestion');
if ($conexion->connect_errno) {
  echo "Hubo un error al conectarse al sitio web";
  exit;
}
?>
