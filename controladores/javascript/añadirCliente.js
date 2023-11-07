function añadirCliente() {
  let formularioAñadirRegistro = document.getElementById('vistaDetallada');
  let categoria = document.getElementById("memoriaCategoria").innerHTML;
  codigoHTML = `
  <form class="" action="controladores/php/añadirItem.php" method="post">
    <input type="text" name="cedula" placeholder="Cédula">
    <input type="text" name="nombre" placeholder="Nombre">
    <input type="text" name="categoria" value="${categoria}" style="display:none"> <br>
    <button type="submit">Confirmar</button>
  </form>
  `;
  formularioAñadirRegistro.innerHTML = codigoHTML;
}
