function mostrarModificar() {
  formulario = document.getElementById('vistaDetallada');

  try {
    cedula = document.getElementsByClassName("seleccion")[0].id;
    nombre = document.getElementsByClassName("seleccion")[0].innerText;
    codigoHTML = `
    <h1> ${nombre} </h1>
    <h2> ${cedula} </h2>
    <form action="controladores/php/modificarItem.php" method="post">
    <input type="text" name="cedula" value="${cedula}" style="display: none">
    <input type="text" name="nombre" placeholder="Nuevo valor de nombre" value=""> <br>
    <input type="text" name="categoria" placeholder="clientes || usuarios"> <br>
    <button type="submit">Continuar</button>
    </form>
    `;
    formulario.innerHTML = codigoHTML;
  } catch (e) {
    codigoHTML = `<h1> Antes debes seleccionar un registro</h1>`;
    formulario.innerHTML = codigoHTML;
  }
}
