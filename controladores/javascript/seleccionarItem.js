  const solicitudXmlHttp = new XMLHttpRequest();

  function seleccionarItem() {
  let cedulaSeleccionada = event.target.id;
  document.cookie = "cedula = " + cedulaSeleccionada + "; SameSite=Strict";
  var vistaDetallada = document.getElementById("vistaDetallada");
  solicitudXmlHttp.open(
    'GET',
    'controladores/php/lectura/seleccionarItem.php'
  );
  solicitudXmlHttp.send();
  solicitudXmlHttp.onload = function () {
    let respuesta = this.responseText;
    let codigoHTML = '';

    let seleccion = JSON.parse(respuesta);
      codigoHTML = `
      <h1>${seleccion[0].nombre}</h1>
      <hr>
      <h2>${seleccion[0].cedula}</h2>
      <hr>
      <p>${seleccion[0].comentario}</p>
      `;

    vistaDetallada.innerHTML = codigoHTML;
  }
}
