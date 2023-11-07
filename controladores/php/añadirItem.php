<?php
require_once '../../baseDeDatos/conexion.php';
$categoria = $_REQUEST['categoria'];
if ($categoria == "seguros") {

} else {
  $cedula = $_POST['cedula'];
  $nombre = $_POST['nombre'];
  $apellido = $_POST['apellido'];
  $direccion = $_POST['direccion'];
if ($categoria == "clientes") {
  $email = $_POST['email'];
  $declaracion = $conexion->prepare("INSERT INTO {$categoria} (cedula, nombre, apellido, direccion, email) VALUES (?, ?, ?, ?, ?)");
  $declaracion->bind_param("sssss", $cedula, $nombre, $apellido, $direccion, $email);
} else {
  $declaracion = $conexion->prepare("INSERT INTO {$categoria} (cedula, nombre, apellido, direccion) VALUES (?, ?, ?, ?)");
  $declaracion->bind_param("ssss", $cedula, $nombre, $apellido, $direccion);
}

$declaracion->execute();

}
  echo "<a href=\"javascript:history.go(-1)\">VOLVER</a>";
  exit();
?>
