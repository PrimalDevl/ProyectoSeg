<?php
// Invocado por inicioSesion.js
require_once '../../baseDeDatos/conexion.php';
$cedula = $_REQUEST['cedula'];
$contrasena = $_REQUEST['contrasena'];
$resultado = $conexion->query("SELECT contrasena FROM usuarios WHERE cedula = {$cedula};");


if ($contrasena == $resultado) {
  echo true;
} else {
  echo false;
}
?>
