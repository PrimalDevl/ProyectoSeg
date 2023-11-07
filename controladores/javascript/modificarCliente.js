function mostrarModificar() {
  formulario = document.getElementById('vistaDetallada');
  let categoria = document.getElementById("memoriaCategoria").innerHTML;
  try {
    cedula = document.getElementsByClassName("seleccion")[0].id;
    nombre = document.getElementsByClassName("seleccion")[0].innerText;
    codigoHTML = `
    <h1> ${nombre} </h1>
    <h2> ${cedula} </h2>
    <form action="controladores/php/modificarItem.php" method="post">
    <input type="text" name="cedula" value="${cedula}" style="display: none">
    <input type="text" name="nuevoValor" placeholder="Nuevo Valor" value=""> <br>
    <select name="tipo">
      <option value="nombre">Nombre</option>
      <option value="apellido">Apellido</option>
      <option value="email">Email</option>
      <option value="tipo_de_seguro">Tipo de Seguro</option>
    </select>
    <input type="text" name="categoria" value="${categoria}" style="display:none"> <br>
    <button type="submit">Continuar</button>
    </form>
    `;
    formulario.innerHTML = codigoHTML;
  } catch (e) {
    codigoHTML = `<h1> Antes debes seleccionar un registro</h1>`;
    formulario.innerHTML = codigoHTML;
  }
}
