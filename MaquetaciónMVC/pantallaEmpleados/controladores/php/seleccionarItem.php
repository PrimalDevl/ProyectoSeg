<?php
$conexion = mysqli_connect('localhost','root','','todo');
if(!$conexion) {
    echo 'No conectado';
}

    $identificador = $_COOKIE['identificador'];
    $consulta = "SELECT * FROM clientes WHERE identificador = {$identificador}";
    $resultado = mysqli_query($conexion, $consulta);

    $datosJson = array();
      if ($resultado) {
        while ($fila = mysqli_fetch_assoc($resultado)) {
          $datosJson[] = array(
            'identificador' => $fila['identificador'],
            'nombre' => $fila['nombre'],
            'comentario' => $fila['comentario'],
          );
          echo json_encode($datosJson);
        }
      } else {echo "No se devolvieron datos";}
?>
