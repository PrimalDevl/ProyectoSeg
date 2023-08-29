<?php
  require_once '../../baseDeDatos/conexion.php';

  $consulta = "SELECT * FROM clientes";
  $resultado = mysqli_query($conexion, $consulta);

  $datosJson = array();
  		if($resultado) {
  			while($fila = mysqli_fetch_assoc($resultado)) {
  				$datosJson[] = array(
          'identificador' => $fila['identificador'],
  				'nombre' => $fila['nombre'],
          'comentario' => $fila['comentario'],
  				);
  		}
    if ($datosJson == null) {
      echo 'No se encontraron registros en la base de datos.';
    } else {echo json_encode($datosJson);}
  } else {echo 'No se devolvierón datos';}
  ?>
