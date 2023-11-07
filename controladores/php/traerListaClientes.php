<?php
require_once '../../baseDeDatos/conexion.php';

$categoria = $_REQUEST['categoria'];
$consulta = "SELECT * FROM {$categoria}";
$resultado = mysqli_query($conexion, $consulta);

$datosJson = array();
		if($resultado) {
			while($fila = mysqli_fetch_assoc($resultado)) {
				if ($categoria == "seguros") {
					$datosJson[] = array(
						'cedula' => $fila['num_poliza'],
						'nombre' => $fila['tipo_de_seguro'],
					);
				} else {
					$datosJson[] = array(
						'cedula' => $fila['cedula'],
						'nombre' => $fila['nombre'],
					);
				}
		}
  if ($datosJson == null) {
    echo 'No se encontraron registros en la base de datos.';
  } else {echo json_encode($datosJson);}
} else {echo 'No se devolvierón datos';}
?>
