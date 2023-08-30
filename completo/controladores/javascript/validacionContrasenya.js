function validarContrasenya(cedula, contrasenya) {
  solicitudXmlHttp.open(
    'GET',
    'controladores/php/validacionContrasenya.php?usuario=' + cedula + '&contrasenya=' + contrasenya,
    true
  );
  solicitudXmlHttp.send();
  solicitudXmlHttp.onload = function () {
    let resolucion = solicitudXmlHttp.responseText;
    if (resolucion = 'La contraseña es correcta') {
      estado.innerHTML = '<b>Se ingreso la contraseña correctamente</b>';
      window.location.replace("vistaClientes.php");
    }
  };
}
