function validarDatos(cedula, contraseña) {
  let cedulaCSS = document.getElementsByClassName('Cedula') [0];
  let contraseñaCSS = document.getElementsByClassName('Contraseña') [0];
  let cedulaAlerta = document.getElementsByClassName('Cedula') [1];
  let contraseñaAlerta = document.getElementsByClassName('Contraseña') [1];

  if (cedula == '') {
    cedulaAlerta.innerText = '*Debe rellenar este campo';
    cedulaCSS.style = 'border: 1px solid red;';
    return false;
  }
  if (esNumero(cedula) == false) {
    cedulaAlerta.innerText = 'Solo puede ingresar un valor numerico';
    cedulaCSS.style = 'border: 1px solid red;';
    return false;
  }
  if (cedula.length != 8) {
    cedulaAlerta.innerText = 'Solo puede ingresar 8 digitos';
    cedulaCSS.style = 'border: 1px solid red;';
    return false;
  }
  if (contraseña == '') {
    contraseñaAlerta.innerText = '*Debe rellenar este campo';
    contraseñaCSS.style = 'border: 1px solid red;';
    return false;
  }
  if (contraseña.length < 8) {
    contraseñaAlerta.innerText = 'Su contraseña debe tener 8 caracteres o más';
    contraseñaCSS.style = 'border: 1px solid red;';
    return false;
  }
  return true;
}
function esNumero(valor) {
  let esNumero = /^\d+$/.test(valor);
  return esNumero;
}
