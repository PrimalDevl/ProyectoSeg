function añadirCliente() {
  let formularioAñadirRegistro = document.getElementById('vistaDetallada');
  let categoria = document.getElementById("memoriaCategoria").innerHTML;
  if (categoria == "clientes") {
    codigoHTML = `
    <form class="" action="controladores/php/añadirItem.php" method="post">
      <input type="text" name="cedula" placeholder="Cédula">
      <input type="text" name="nombre" placeholder="Nombre">
      <input type="text" name="apellido" placeholder="apellido">
      <input type="text" name="direccion" placeholder="direccion">
      <input type="text" name="email" placeholder="email">
      <input type="text" name="categoria" value="${categoria}" style="display:none"> <br>
      <button type="submit">Confirmar</button>
    </form>
    `;
  }
  if (categoria == "usuarios") {
    codigoHTML = `
    <form class="" action="controladores/php/añadirItem.php" method="post">
      <input type="text" name="cedula" placeholder="Cédula">
      <input type="text" name="nombre" placeholder="Nombre">
      <input type="text" name="apellido" placeholder="apellido">
      <input type="text" name="direccion" placeholder="direccion">
      <input type="text" name="contrasena" placeholder="contraseña">
      <input type="text" name="categoria" value="${categoria}" style="display:none"> <br>
      <button type="submit">Confirmar</button>
    </form>
    `;
  }
  if (categoria == "seguros") {
    codigoHTML = `
    <form class="" action="controladores/php/añadirItem.php" method="post">
      <input type="text" name="cedula" placeholder="Cédula Cliente">
      <input type="text" name="nombre" placeholder="tipo_de_seguro">
      <input type="text" name="apellido" placeholder="Cantidad Asegurada">
      <input type="text" name="direccion" placeholder="fecha_comienzo">
      <input type="text" name="direccion" placeholder="fecha_vencimiento">
      <input type="text" name="categoria" value="${categoria}" style="display:none"> <br>
      <button type="submit">Confirmar</button>
    </form>
    `;
  }

  formularioAñadirRegistro.innerHTML = codigoHTML;
}
