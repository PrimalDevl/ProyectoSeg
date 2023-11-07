<?php
require_once '../../../baseDeDatos/conexion.php';

$categoria = $_REQUEST['categoria'];
$cedula = $_COOKIE['cedula'];

  if ($categoria == "seguros") {
    $resultado = $conexion->query("SELECT * FROM {$categoria} WHERE num_poliza = {$cedula};");
  } else {
    $resultado = $conexion->query("SELECT * FROM {$categoria} WHERE cedula = {$cedula};");
  }

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
  }
  if ($categoria == "usuarios") {
    $datosCliente[] = array(
      'cedula' => $cliente['cedula'],
      'nombre' => $cliente['nombre'],
      'apellido' => $cliente['apellido'],
      'direccion' => $cliente['direccion'],
      'contrasena' => $cliente['contrasena'],
    );
  }
  if ($categoria == "seguros") {
    $datosCliente[] = array(
      'cedula' => $cliente['num_poliza'],
      'apellido' => $cliente['cantidad_asegurada'],
      'direccion' => $cliente['fecha_comienzo'],
      'email' => $cliente['fecha_vencimiento'],
      'nombre' => $cliente['tipo_de_seguro'],
      'ci_cliente'=> $cliente['ci_cliente'],
    );
  }
  echo json_encode($datosCliente);
}
?>
