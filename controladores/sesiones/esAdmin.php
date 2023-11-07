<?php
require_once '../../baseDeDatos/conexion.php';

$cedula = $_REQUEST['cedula'];
$contrasena = $_REQUEST['contrasena'];
$resultado = $conexion->query("SELECT * FROM usuarios WHERE cedula = {$cedula} AND contrasena = '${contrasena}';");

if ($resultado) {
  $usuario = mysqli_fetch_assoc($resultado);
  if (is_null($usuario)) {
    echo false;
    exit();
  } else {
    $datosUsuario = array();
    $datosUsuario[] = array(
      'cedula' => $usuario['cedula'],
      'esAdmin' => $usuario['esAdmin'],
      'contrasena' => $usuario['contrasena'],
    );
    echo json_encode($datosUsuario);
  }
}
