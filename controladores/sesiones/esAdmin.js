function esAdmin(credenciales, usuario) {
  let esAdministrador = 0;
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
  let mensaje = `cedula=${esAdmin}`;
  solicitudXmlHttp.send(mensaje);
  solicitudXmlHttp.onreadystatechange = function () {
    if (solicitudXmlHttp.readyState === 4) {
      esAdmin = `
      <div onclick="actualizarVista('usuarios')" class="pestañaBarraNavegadora">
      Empleados
      </div>
      `;
      console.log(solicitudXmlHttp.status);
      esAdmin = solicitudXmlHttp.responseText;
      console.log(esAdmin);
      iniciarSesion(credenciales, esAdmin);
    };
  }
}
