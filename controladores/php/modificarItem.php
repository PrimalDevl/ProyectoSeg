<?php
require_once '../../baseDeDatos/conexion.php';

$cedula = $_POST['cedula'];
$nombre = $_POST['nombre'];
$categoria = $_POST['categoria'];

$declaracion ="UPDATE {$categoria} SET nombre='{$nombre}' WHERE cedula={$cedula};";
echo $declaracion;
$resultado = mysqli_query($conexion, $declaracion);

$declaracion = "DELETE FROM {$categoria} WHERE cedula = {$cedula}";
echo $consulta;
$resultado = mysqli_query($conexion, $declaracion);

echo "
<script type='text/javascript'>
  window.location = '../../vistaClientes.php';
</script>";
?>
