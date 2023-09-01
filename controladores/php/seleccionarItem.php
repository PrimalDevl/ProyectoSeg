<?php
$conexion = mysqli_connect('localhost','root','','programa_gestion');
if(!$conexion) {
    echo 'No conectado';
}

    $cedula = $_COOKIE['cedula'];
    $consulta = "SELECT * FROM clientes WHERE cedula = {$cedula}";
    $resultado = mysqli_query($conexion, $consulta);

    $datosJson = array();
      if ($resultado) {
        while ($fila = mysqli_fetch_assoc($resultado)) {
          $datosJson[] = array(
            'cedula' => $fila['cedula'],
            'nombre' => $fila['nombre'],
            'apellido' => $fila['apellido'],
            'comentario' => $fila['comentario'],
          );
          echo json_encode($datosJson);
        }
      } else {echo "No se devolvieron datos";}
?>
