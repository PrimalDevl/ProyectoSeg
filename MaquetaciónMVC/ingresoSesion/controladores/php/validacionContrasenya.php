<?php
  require_once '../../baseDeDatos/conexion.php';
  //compara contrasenya ingresada con la contrasenya real
  $usuario = $_REQUEST["usuario"];
  $declaracion = $conexion->prepare("SELECT contrasenya FROM empleados WHERE cedula = ${usuario};");
  $declaracion->execute();
  $resultado = $declaracion->get_result();

  $coincide = $contrasenya === $resultado->fetch_assoc();
  if ($coincide) {
    while ($fila = $resultado->fetch_assoc()) {
      printf($fila["cedula"]);
      printf($fila["nombre"]);
      printf($fila["apellido"]);
      printf($fila["contrasenya"]);
      break;
    }
  }
 ?>
