const boton = document.querySelector('button');
const estado = document.getElementById('estado');
const ingresoCedula = document.getElementById('cedula').value;
const ingresoContrasenya = document.getElementById('contrasenya').value;
const solicitudXmlHttp = new XMLHttpRequest();

boton.addEventListener('click', () => {
  const cedula = document.getElementById("cedula").value;
  existeUsuario(cedula);
});

//comprueba que el usuario exista
function existeUsuario(datos) {
  solicitudXmlHttp.open('GET', 'controladores/php/validacionIngreso.php?usuario=' + ingresoCedula, true);
  solicitudXmlHttp.send();

  solicitudXmlHttp.onreadystatechange = function () {
    let usuarioExiste = this.responseText
    if (usuarioExiste) {
      validarContrasenya(cedula);
    } else {
      estado.innerHTML = "<b>El usuario no existe</b>";
    }
  };
}

function validarContrasenya() {
  solicitudXmlHttp.open('GET', 'controladores/php/validacionContrasenya.php?usuario=' + ingresoCedula, true);
  solicitudXmlHttp.send();

  if (ingresoContrasenya == contrasenya) {
      estado.innerHTML = "<b>Se ingreso el usuario correctamente</b>";
  }


}
