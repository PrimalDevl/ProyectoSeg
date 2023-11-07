function buscarRegistros() {
  let mostradorClientes = document.getElementById("datosCliente");
  let filtro = document.getElementById("filtro").value;
  let busqueda= document.getElementById("busqueda").value;
  let categoria = document.getElementById("memoriaCategoria").innerHTML;
  solicitudXmlHttp.open(
    'GET',
    `controladores/buscador/busquedaFiltrada.php?filtro=${filtro}&busqueda=${busqueda}&categoria=${categoria}`
  );
  solicitudXmlHttp.send();
  solicitudXmlHttp.onload = function () {
    let respuesta = this.responseText;
    let codigoHTML = '';

    try {
      var tablaClientes = JSON.parse(respuesta);
      tablaClientes.forEach((fila) => {
        codigoHTML += `
        <tr class="listaClientes">
        <td class="contenido vistaLista">
        <p>${fila.nombre} ${fila.cedula}</p>
        <button onclick="seleccionarItem()" id="${fila.cedula}">Seleccionar</button>
        </td>
        </tr>`;
        mostradorClientes.innerHTML = codigoHTML;
      });
    } catch (error) {
      codigoHTML = `
      <tbody id="datosCliente">
        <tr class="listaClientes">
          <td>
                <div class="contenido vistaLista">
                    <p class="informacionCliente">No hay datos disponibles.</p>
                    <!-- <button class="botonLista" type="button" name="button">Seleccionar</button> -->
                </div>
          </td>
        </tr>
      </tbody>`;
      mostradorClientes.innerHTML = codigoHTML;
      }
    }
}
