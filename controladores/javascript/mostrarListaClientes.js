function actualizarVista() {
  const solicitudXmlHttp = new XMLHttpRequest();
  var mostradorClientes = document.getElementById("datosCliente");
  solicitudXmlHttp.open(
    'GET',
    'controladores/php/traerListaClientes.php'
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
        <p> ${fila.nombre} ${fila.cedula} ${fila.comentario} </p>
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

window.onload = actualizarVista();
