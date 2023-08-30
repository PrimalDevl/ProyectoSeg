<?php
if (isset($_POST['cedula'])) {
  $cedula = $_POST['cedula'];
  $nombre = $_POST['nombre'];
  $apellido = $_POST['apellido'];
  $apellido = $_POST['comentario'];

  $consulta = "UPDATE clientes SET nombre = '{$nombre}', apellido = '{$apellido}' WHERE cedula = {$cedula};";
  $resultado = mysqli_query($conexion, $consulta);
  $consulta = "DELETE FROM clientes WHERE cedula = {$cedula};";
}
?>
