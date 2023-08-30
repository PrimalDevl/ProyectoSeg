<?php
  require_once 'baseDeDatos/conexion.php';
  if (isset($_POST['cedula'])) {
    $declaracion = $conexion->prepare("INSERT INTO clientes (cedula, nombre, apellido, comentario) VALUES (?, ?, ?, ?)");

    $cedula = $_POST['cedula'];
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $apellido = $_POST['comentario'];
    $declaracion->bind_param("isss", $cedula, $nombre, $apellido, $comentario);
    $declaracion->execute();
  }
?>
