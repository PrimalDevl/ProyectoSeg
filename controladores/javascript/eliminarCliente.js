function eliminarItem() {
  let memoriaCategoria = document.getElementById("memoriaCategoria").innerHTML;
  let seleccion = document.getElementsByClassName('seleccion')[0].id;
  const solicitudXmlHttp = new XMLHttpRequest();
  solicitudXmlHttp.open(
    'GET',
    `controladores/php/eliminarItem.php?cedula=${seleccion}&categoria=${memoriaCategoria}`
  );
  solicitudXmlHttp.send();
  actualizarVista();
  actualizarSeleccion();
}
