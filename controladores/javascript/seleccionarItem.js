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
      if (memoriaCategoria == "clientes") {
        codigoHTML = `
        <h1 class="seleccion" id="${seleccion[0].cedula}">Nombre: ${seleccion[0].nombre}</h1>
        <br>
        <h2>Cedula: ${seleccion[0].cedula}</h2>
        <br>
        <p>Apellido: ${seleccion[0].apellido}</p>
        <br>
        <p>Direccion: ${seleccion[0].direccion}</p>
        <br>
        <p>Email: ${seleccion[0].email}</p>
        `;
      }
      if (memoriaCategoria == "usuarios") {
        codigoHTML = `
        <h1 class="seleccion" id="${seleccion[0].cedula}">Nombre: ${seleccion[0].nombre}</h1>
        <br>
        <h2>Cedula: ${seleccion[0].cedula}</h2>
        <br>
        <p>Apellido: ${seleccion[0].apellido}</p>
        <br>
        <p>Direccion: ${seleccion[0].direccion}</p>
        <br>
        <p>Contraseña: ${seleccion[0].contrasena}</p>
        `;
      }
      if (memoriaCategoria == "seguros") {
        codigoHTML = `
        <h1 class="seleccion" id="${seleccion[0].cedula}">Tipo de Seguro: ${seleccion[0].nombre}</h1>
        <br>
        <h2>Núm. Póliza: ${seleccion[0].cedula}</h2>
        <br>
        <p>Cantidad Asegurada: $${seleccion[0].apellido} UYU</p>
        <br>
        <p>Fecha de Comienzo: ${seleccion[0].direccion}</p>
        <br>
        <p>Fecha de Vencimiento: ${seleccion[0].email}</p>
        <br>
        <p>Cédula del cliente Asgurado: ${seleccion[0].ci_cliente}</p>
        `;
      }
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
