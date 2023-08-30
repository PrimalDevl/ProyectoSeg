<?php
  require_once '../../baseDeDatos/conexion.php';
  //compara contrasenya ingresada con la contrasenya real
  $usuario = $_REQUEST["usuario"];
  $contrasenya = $_REQUEST["contrasenya"];
  $declaracion = $conexion->prepare("SELECT contrasenya FROM usuarios WHERE cedula = {$usuario};");
  $declaracion->execute();
  $resultado = $declaracion->get_result();

  $fila = $resultado->fetch_assoc();
  if ($contrasenya === $fila["contrasenya"]) {
    echo "{$contrasenya} = {$fila['contrasenya']}";
    echo "La contraseña es correcta";
  } else {
    echo "La contraseña es incorrecta";
  }
 ?>
