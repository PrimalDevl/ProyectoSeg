<?php
require_once '../../baseDeDatos/conexion.php';

$filtro = $_REQUEST['filtro'];
$busqueda = $_REQUEST['busqueda'];
$categoria = $_REQUEST['categoria'];
if ($categoria == "seguros" && $filtro == "cedula") {
  $filtro = 'ci_cliente';
}
$consulta = "SELECT * FROM {$categoria} WHERE {$filtro} = '{$busqueda}' ";
$resultado = mysqli_query($conexion, $consulta);

$datosJson = array();
		if($resultado) {
			while($fila = mysqli_fetch_assoc($resultado)) {
        if ($categoria == "seguros") {
					$datosJson[] = array(
						'cedula' => $fila['num_poliza'],
            'apellido' => $fila['ci_cliente'],
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
