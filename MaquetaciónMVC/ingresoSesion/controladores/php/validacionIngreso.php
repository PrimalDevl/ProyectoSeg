<?php
require_once '../../baseDeDatos/conexion.php';
$usuario = $_REQUEST["usuario"];

//Comprueba existencia del usuario
$declaracion = $conexion->prepare("SELECT cedula FROM usuarios;");
$declaracion->execute();
$resultado = $declaracion->get_result();

$cedula = $resultado->fetch_assoc();
$existe = $usuario === $cedula["cedula"];
if (!$existe) {
  echo true;
  exit();
}
require_once 'validacionContrasenya.php';
?>
