<?php
  require_once '../../baseDeDatos/conexion.php';

  $identificador = $_COOKIE['cedula'];

  $declaracion = $conexion->prepare("DELETE FROM clientes WHERE identificador = ?");
  $declaracion->bind_param("i", $identificador);

  $declaracion->execute();
?>
