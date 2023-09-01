<?php
  require_once '../../baseDeDatos/conexion.php';

  $cedula = $_COOKIE['cedula'];

  $declaracion = $conexion->prepare("DELETE FROM clientes WHERE cedula = ?");
  $declaracion->bind_param("i", $cedula);

  $declaracion->execute();
?>
