function eliminarItem() {
  let memoriaCategoria = document.getElementById("memoriaCategoria").innerHTML;
  let seleccion = document.getElementsByClassName('seleccion')[0].id;
  const solicitudXmlHttp = new XMLHttpRequest();
  solicitudXmlHttp.open(
    'GET',
    `controladores/php/eliminarItem.php?cedula=${seleccion}&categoria=${memoriaCategoria}`
  );
  solicitudXmlHttp.send();
  solicitudXmlHttp.onload = function () {
    let respuesta = this.responseText;
    if (respuesta == true) {
      let codigoHTML = '';
      codigoHTML = `<h1> Asegurese de eliminar todos los seguros pertenecientes al cliente antes de eliminar al cliente</h1>
      <h3>Consejo: Busque la cedula del cliente en la seccion seguros</h3>`;
      vistaDetallada.innerHTML = codigoHTML;
    }
  }
  actualizarVista();
  actualizarSeleccion();
}
