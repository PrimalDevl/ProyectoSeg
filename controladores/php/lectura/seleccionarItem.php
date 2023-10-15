<?php
require_once '../../../baseDeDatos/conexion.php';

$cedula = $_COOKIE['cedula'];
$resultado = $conexion->query("SELECT * FROM clientes WHERE cedula = {$cedula};");

if ($resultado) {
  $cliente = mysqli_fetch_assoc($resultado);
  $datosCliente = array();
  $datosCliente[] = array(
    'cedula' => $cliente['cedula'],
    'nombre' => $cliente['nombre'],
    'comentario' => $cliente['comentario'],
  );
  echo json_encode($datosCliente);
}
?>
