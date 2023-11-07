function esAdmin(credenciales, usuario) {
  let mensaje = "";
  const solicitudXmlHttp = new XMLHttpRequest();
  solicitudXmlHttp.open(
    'POST',
    `controladores/sesiones/esAdmin.php`
  );
  solicitudXmlHttp.setRequestHeader(
    "Accept",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
  );
  solicitudXmlHttp.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  solicitud = credenciales;
  solicitudXmlHttp.send(solicitud);
  solicitudXmlHttp.onreadystatechange = function () {
    if (solicitudXmlHttp.readyState === 4) {
      let datosUsuario = solicitudXmlHttp.responseText;
      if (datosUsuario != "") {
        console.log(datosUsuario);
        let usuario = JSON.parse(datosUsuario);
        console.log(usuario[0]);
        let esAdmin = usuario[0].esAdmin;
        iniciarSesion(credenciales, esAdmin);
      } else {
        let cedulaAlerta = document.getElementsByClassName('Cedula') [1];
        cedulaAlerta.innerText = "Usuario o contraseña incorrectos";
      }
    };
  }
}
