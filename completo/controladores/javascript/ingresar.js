const boton = document.querySelector('button');
const pantalla = document.querySelector('html');
const estado = document.getElementById('estado');
const solicitudXmlHttp = new XMLHttpRequest();
boton.addEventListener(
  'click',
  () => {
    const cedula = document.getElementById('cedula').value;
    const contrasenya = document.getElementById('contrasenya').value;
    validarContrasenya(cedula, contrasenya);
  }
);
