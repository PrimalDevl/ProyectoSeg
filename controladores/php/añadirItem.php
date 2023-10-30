<?php
require_once '../../baseDeDatos/conexion.php';

$categoria = $_REQUEST['categoria'];
$declaracion = $conexion->prepare("INSERT INTO {$categoria} (cedula, nombre) VALUES (?, ?)");

$cedula = $_POST['cedula'];
$nombre = $_POST['nombre'];
$declaracion->bind_param("ss", $cedula, $nombre);
$declaracion->execute();

echo "
<script type='text/javascript'>
  window.location = '../../vistaClientes.php';
  </script>";
  exit();
?>
