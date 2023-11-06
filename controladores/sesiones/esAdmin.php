<?php
require_once '../../baseDeDatos/conexion.php';

$cedula = $_REQUEST['cedula'];
$resultado = $conexion->query("SELECT * FROM usuarios WHERE cedula = {$cedula};");

if ($resultado) {
  $usuario = mysqli_fetch_assoc($resultado);
  $datosUsuario = array();
  $datosUsuario[] = array(
    'cedula' => $usuario['cedula'],
    'nombre' => $usuario['nombre'],
    'esAdmin' => $usuario['esAdmin'],
  );
  echo json_encode($datosUsuario);
}
