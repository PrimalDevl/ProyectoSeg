<?php
require_once '../../baseDeDatos/conexion.php';
$cedula = $_COOKIE['cedula'];
$categoria = $_REQUEST['categoria'];

$declaracion = $conexion->prepare("DELETE FROM {$categoria} WHERE cedula = ?");
$declaracion->bind_param("s", $cedula);

$declaracion->execute();
?>
