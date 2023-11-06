function iniciarUsuario() {
  const solicitudXmlHttp = new XMLHttpRequest();
  solicitudXmlHttp.open(
    'POST',
    `vistaClientes.php`
  );
  solicitudXmlHttp.setRequestHeader(
    "Accept",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
  );
  solicitudXmlHttp.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );

  let esAdmin = false;
  solicitudXmlHttp.send(`esAdmin=${esAdmin}`);
}
