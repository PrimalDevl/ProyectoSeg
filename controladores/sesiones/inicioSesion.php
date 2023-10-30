<?php
$cedula = $_POST['cedula'];
$contrasena = $_POST['contrasena'];
if ($cedula == 55554216  && $contrasena == "HolaMUND0!") {
  echo true;
} else {
  echo "Contraseña incorrecta";
}
?>
