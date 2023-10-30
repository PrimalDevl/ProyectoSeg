<?php
$conexion = new mysqli('localhost', 'root', '', 'gestion_seguros');
if ($conexion->connect_errno) {
  echo "Hubo un error al conectarse a el sitio web.";
  exit;
}
?>
