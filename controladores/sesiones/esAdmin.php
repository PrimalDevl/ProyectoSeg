<?php
$conexion = new mysqli('localhost', 'root', '','gestion_seguros');
if ($conexion->connect_errno) {
  echo "Hubo un error al conectarse con la página";
}
$cedula = $REQUEST['cedula']
$consulta = "SELECT esAdmin FROM usuarios WHERE cedula=${cedula};";
$resultado = mysqli_query($conexion, $consulta);


if ($resultado) {
  while ($fila = mysqli_fetch_assoc($resultado)) {
    $tablas[] = array(
      if ($fila['cedula'] == ) {
        // code...
      }
      'cedula' => $fila['cedula'],
    );
  }
  echo json_encode($tablas);
}

?>
<?php
if (isset($_REQUEST['cedula'])) {
  echo true;
}
?>
