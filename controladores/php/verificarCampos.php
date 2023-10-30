<?php
$nombreError = '';
$cedulaIngresada = isset($_POST['cedula']);
$nombreIngresado = isset($_POST['nombre']);
$comentarioIngresado = isset($_POST['comentario']);
$camposIngresados = $cedulaIngresada && $nombreIngresado && $comentarioIngresado;

if ($camposIngresados) {
  $nombreTest = formato_input($_POST["nombre"]);
  $cedulaTest = $_POST["cedula"];
  if (!preg_match("/^[a-zA-Z-' ]$/",$nombreTest)) {
    $nombreError = 'cnombre incorrecta';
    $nombreinvalido=true;
    exit();
  }
  if (!preg_match('/^[0-9]{8}$/',$cedulaTest)) {
    $nombreError = 'cedula incorrecta';
    exit();
  }
  if ($nombreValido = true) {
    $ejecucionCorrecta = true;
  } else {
    $nombreError = "Solo se permiten letras y espacios";
  }
} else {
  $nombreError = "Se requiere ingresar un nombre";
}
if ($cedula = 0) {
  $nombreError = 'la cedula ingresada no es valida';
  echo $nombreError;
  exit();
}
if ($nombreError != '') {
  echo $nombreError;
}
if (!isset($ejecucionCorrecta)) {
  echo 'ocurrió un error en los formularios';
  echo $nombreError;
  exit();
}
function formato_input($datos) {
  $datos = trim($datos);
  $datos = stripslashes($datos);
  $datos = htmlspecialchars($datos);
  return $datos;
}
?>
