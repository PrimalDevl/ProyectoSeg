<?php
  $confirmado = isset($_POST['identificador']);

  if ($confirmado) {
    $identificador = $_POST['identificador'];
    $nombre = $_POST['nombre'];
    $comentario = $_POST['comentario'];

    $consulta = "UPDATE clientes SET nombre = '{$nombre}', comentario = '{$comentario}' WHERE identificador = '{$identificador};";
    $resultado = mysqli_query($conexion, $consulta);

    $consulta = "DELETE FROM clientes WHERE identificador = {$identificador};"
  }
?>
