<?php
require_once '../../../baseDeDatos/conexion.php';

$categoria = $_REQUEST['categoria'];
$cedula = $_COOKIE['cedula'];
$resultado = $conexion->query("SELECT * FROM {$categoria} WHERE cedula = {$cedula};");

if ($resultado) {
  $cliente = mysqli_fetch_assoc($resultado);
  $datosCliente = array();
  $datosCliente[] = array(
    'cedula' => $cliente['cedula'],
    'nombre' => $cliente['nombre'],
  );
  echo json_encode($datosCliente);
}
?>
