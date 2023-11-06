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
  solicitud = `cedula=${usuario}`
  solicitudXmlHttp.send(solicitud);
  solicitudXmlHttp.onreadystatechange = function () {
    if (solicitudXmlHttp.readyState === 4) {
      let datosUsuario = solicitudXmlHttp.responseText;
      let usuario = JSON.parse(datosUsuario);
      console.log(usuario[0]);
      let esAdmin = usuario[0].esAdmin;
      iniciarSesion(credenciales, esAdmin);
    };
  }
}
  // let mensaje = `cedula=<div onclick="actualizarVista('usuarios')" class="pestañaBarraNavegadora">Empleados</div>`;
