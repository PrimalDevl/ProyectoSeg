  const solicitudXmlHttp = new XMLHttpRequest();
  function seleccionarItem() {
  var cedulaSeleccionada = event.target.id;
  let memoriaCategoria = document.getElementById("memoriaCategoria").innerHTML;
  document.cookie = "cedula = " + cedulaSeleccionada + "; SameSite=Strict";
  var vistaDetallada = document.getElementById("vistaDetallada");
  solicitudXmlHttp.open(
    'GET',
    `controladores/php/lectura/seleccionarItem.php?categoria=${memoriaCategoria}`
  );
  solicitudXmlHttp.send();
  solicitudXmlHttp.onload = function () {
    let respuesta = this.responseText;
    let codigoHTML = '';

      let seleccion = JSON.parse(respuesta);
        codigoHTML = `
        <h1 class="seleccion" id="${seleccion[0].cedula}">${seleccion[0].nombre}</h1>
        <hr>
        <h2>${seleccion[0].cedula}</h2>
        <hr>
        <p>${seleccion[0].comentario}</p>
        `;

    vistaDetallada.innerHTML = codigoHTML;
  }
}
function actualizarSeleccion() {
  var vistaDetallada = document.getElementById("vistaDetallada");
  codigoHTML = `
  <h1>No hay un elemento seleccionado</h1>
  `;
  vistaDetallada.innerHTML = codigoHTML;
}
