function validarCampos() {
  let cedula = document.getElementById('cedula').value;
  let contraseña = document.getElementById('contrasena').value;
  let entradaValida = false;

  entradaValida = validarDatos(cedula, contraseña);
  if (entradaValida) {
    let intentoEntrada = `cedula=${cedula}&contrasena=${contraseña}&submit=ingresar`;
    esAdmin(intentoEntrada, cedula);
  }
}
