<?php
  $confirmado = isset($_POST['nombre']) && isset($_POST['comentario']);

  if ($confirmado) {

    $declaracion = $conexion->prepare("INSERT INTO clientes (nombre, comentario) VALUES (?, ?)");

    $nombre = $_POST['nombre'];
    $comentario = $_POST['comentario'];
    $declaracion->bind_param("ss", $nombre, $comentario);

    $declaracion->execute();
  }
?>
