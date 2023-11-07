<?php
require_once '../../baseDeDatos/conexion.php';
$cedula = $_REQUEST['cedula'];
$categoria = $_REQUEST['categoria'];

if ($categoria == "seguros") {
  $consulta = "SELECT * FROM $categoria WHERE num_poliza = {$cedula};";
  $resultado = mysqli_query($conexion, $consulta);

  if ($resultado) {
    $cliente = mysqli_fetch_assoc($resultado);
    $datosCliente = array();
    $datosCliente[] = array(
      'cedula' => $cliente['ci_cliente'],
      'apellido' => $cliente['cantidad_asegurada'],
      'direccion' => $cliente['fecha_comienzo'],
      'email' => $cliente['fecha_vencimiento'],
      'cedula' => $cliente['num_poliza'],
      'nombre' => $cliente['tipo_de_seguro'],
    );
    $datos = json_encode($datosCliente);
    $declaracion = $conexion->prepare("INSERT INTO bajas_logicas (datos) VALUES (?) ;");
    $declaracion->bind_param("s", $datos);
    $declaracion->execute();

    $resultado = mysqli_query($conexion, $consulta);
  }
  $declaracion = $conexion->prepare("DELETE FROM {$categoria} WHERE num_poliza = ?");
  $declaracion->bind_param("s", $cedula);
} else {
  $consulta = "SELECT * FROM `{$categoria}` WHERE cedula = {$cedula};";
  $resultado = mysqli_query($conexion, $consulta);

  if ($resultado) {
    $cliente = mysqli_fetch_assoc($resultado);
    $datosCliente = array();
    if ($categoria == "clientes") {
      $datosCliente[] = array(
        'cedula' => $cliente['cedula'],
        'nombre' => $cliente['nombre'],
        'apellido' => $cliente['apellido'],
        'direccion' => $cliente['direccion'],
        'email' => $cliente['email'],
      );
      $datos = json_encode($datosCliente);
      $declaracion = $conexion->prepare("INSERT INTO bajas_logicas (datos) VALUES (?) ;");
      $declaracion->bind_param("s", $datos);
      $declaracion->execute();
    }
    if ($categoria == "usuarios") {
      $datosCliente[] = array(
        'cedula' => $cliente['cedula'],
        'nombre' => $cliente['nombre'],
        'apellido' => $cliente['apellido'],
        'direccion' => $cliente['direccion'],
      );
      $datos = json_encode($datosCliente);
      $declaracion = $conexion->prepare("INSERT INTO bajas_logicas (datos) VALUES (?) ;");
      $declaracion->bind_param("s", $datos);
      $declaracion->execute();
    }
  $declaracion = $conexion->prepare("DELETE FROM {$categoria} WHERE cedula = ?");
  $declaracion->bind_param("s", $cedula);
  }
}


try {
  $declaracion->execute();
} catch (Exception $ex) {
	echo true;
}
?>
