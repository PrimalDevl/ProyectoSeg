<?php
require_once '../../baseDeDatos/conexion.php';

$cedula = $_POST['cedula'];
$tipo = $_POST['tipo'];
$nuevoValor = $_POST['nuevoValor'];
$categoria = $_POST['categoria'];

if ($categoria == "seguros") {
  $declaracion ="UPDATE {$categoria} SET {$tipo}='{$nuevoValor}' WHERE num_poliza={$cedula};";
  echo $declaracion;
  $resultado = mysqli_query($conexion, $declaracion);

  echo "<a href=\"javascript:history.go(-1)\">VOLVER</a>";
} else {
  if ($tipo == "tipo_de_seguro") {
  echo "Columna invalida para la tabla seleccionada";
  echo "<a href=\"javascript:history.go(-1)\">VOLVER</a>";
  }
  $declaracion ="UPDATE {$categoria} SET {$tipo}='{$nuevoValor}' WHERE cedula={$cedula};";
  echo $declaracion;
  $resultado = mysqli_query($conexion, $declaracion);

  echo "<a href=\"javascript:history.go(-1)\">VOLVER</a>";
}



?>
