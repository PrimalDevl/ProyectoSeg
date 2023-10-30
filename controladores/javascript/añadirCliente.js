function añadirCliente() {
  formularioAñadirRegistro = document.getElementById('vistaDetallada');
  codigoHTML = `
  <form class="" action="controladores/php/añadirItem.php" method="post">
    <input type="text" name="cedula" placeholder="Cédula del Cliente">
    <input type="text" name="nombre" placeholder="Nombre del Cliente">
    <input type="text" name="categoria" placeholder="clientes || usuarios">
    <button type="submit">Confirmar</button>
  </form>
  `;
  formularioAñadirRegistro.innerHTML = codigoHTML;
}
