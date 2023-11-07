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
        <br>
        <h2>${seleccion[0].cedula}</h2>
        <br>
        <p>${seleccion[0].apellido}</p>
        <br>
        <p>${seleccion[0].direccion}</p>
        <br>
        <p>${seleccion[0].email}</p>
        <br>
        <p>${seleccion[0].ci_cliente}</p>
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
