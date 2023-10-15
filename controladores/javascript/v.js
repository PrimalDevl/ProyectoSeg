$(document).ready(function() {

  traerListaClientes();

//Recoge la información de la tabla clientes
  function traerListaClientes() {
    $.ajax( {
      url: 'controladores/php/traerListaClientes.php',
      type: 'GET',
      data: {entrega: 1},
      success: function(datos) {
        datosEsJSON = esJSON(datos);
        if (datosEsJSON) {
          let clientes = JSON.parse(datos);
          let envoltorio = '';
            clientes.forEach(entrega => {
              envoltorio += `
              <tr class="listaClientes">
                <td>
                      <div class="contenido vistaLista">
                          <p class="informacionCliente">${entrega.nombre} | ${entrega.identificador} | ${entrega.comentario}
                          <button id="${entrega.identificador}" class="botonLista" type="button" name="button">Seleccionar</button>
                          </p>
                      </div>
                </td>
              </tr>
              `
              $('#datosCliente').html(envoltorio);
            });
        } else {
          registrosVacios = `
          <tr class="listaClientes">
            <td>
                  <div class="contenido vistaLista">
                      <p class="informacionCliente"> No se encontraron registros en la base de datos.
                      <button id="errorRegistrosVacios" class="actualizar" type="button">Actualizar</button>
                      </p>
                  </div>
            </td>
          </tr>
          `
          $('#datosCliente').html(registrosVacios);
        }
      }
    })
  }

//Selecciona un elemento de la tabla y lo muestra en vista detallada
  $(document).on('click', '.botonLista', function() {
    traerListaClientes();
    let identificador = $(this).prop('id');
    document.cookie = "identificador = " + identificador + "; SameSite=Strict";

    $.ajax({
      url: 'controladores/php/seleccionarItem.php',
      type: 'GET',
      data: {
  				entrega: 1
  		},
      success: function(datos) {
        let cliente = JSON.parse(datos);
        let envoltorio = '';
        cliente.forEach(entrega => {
          envoltorio += `
          <h1> ${entrega.nombre} </h1>
          <hr>
          <h2> ${entrega.identificador} </h2>
          <hr>
          <p> ${entrega.comentario} </p>
          `
        });

        $('#vistaDetallada').html(envoltorio);
      }
    })
  })

//Definicion de actualizar datos
  $(document).on('click', ".actualizar", function() {
    traerListaClientes();
  })

//Definicion de añadir datos
  $(document).on('click', "button[name=Añadir]", function() {
    formularioAñadirRegistro = `
    <form class="" action="index.php" method="post">
      <input type="text" name="nombre" value="Cliente CR">
      <input type="text" name="comentario" value="Prueba de Añadir registro">
      <button type="submit" name="nuevoRegistro">Confirmar</button>
    </form>
    <?php
    require_once 'baseDeDatos/conexion.php';
    require_once 'controladores/php/añadirItem.php';
    ?>
    `;
    $('#vistaDetallada').html(formularioAñadirRegistro);
  })

//Definicion de modificar datos
  $(document).on('click', "button[name=Modificar]", function() {
    formularioModificarRegistro = `
    <form class="" action="index.php" method="post">
      <input type="number" name="identificador" placeholder="identificador de Cliente">
      <input type="text" name="nombre" placeholder="Nombre de Cliente">
      <input type="text" name="comentario" placeholder="comentario">
      <button type="submit" name="editarRegistro">Confirmar</button>
    </form>
    <?php
    require_once 'baseDeDatos/conexion.php';
    require_once 'controladores/php/modificarItem.php';
    ?>
    `;
    $('#vistaDetallada').html(formularioModificarRegistro);
  })

//Definicion de eliminar datos
  $(document).on('click', "button[name=Eliminar]", function() {
      $('#blur').show();
      let dialogo = document.getElementById('confirmarEliminacion');
      dialogo.showModal();
        $(document).on('click', '#Cancelar', function() {
          $('#blur').hide();
        })
        $(document).on('click', '#Continuar', function() {
          $('#blur').hide();

          $.ajax({
            url: 'controladores/php/eliminarItem.php',
            type: 'GET',
            success: function() {
              traerListaClientes();
              $('#vistaDetallada').html('');
            }
          });
        })
      })

//Verifica que los datos recibidos sean JSON valido
      function esJSON(cadena) {
        let value = typeof item !== "string" ? JSON.stringify(cadena) : cadena;
        try {
          value = JSON.parse(cadena);
        } catch (e) {
          return false;
        } finally {
          return typeof value === "object" && value !== null;
        }
      }
});
