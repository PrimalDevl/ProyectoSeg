<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <title>vista Clientes</title>
    <link rel="stylesheet" href="vista\CSS\vistaClientes.css"></link>
    <meta charset="utf-8">
  </head>
  <body>
    <div class="barra" id="barraNavegadora">
      <div onclick="actualizarVista('clientes')" class="pestañaBarraNavegadora">
        Clientes
      </div>
      <?php
        $json = json_encode($_REQUEST);
        $autoridad = json_decode($json);
        $esAdmin = $autoridad->request;
        echo $esAdmin;
      ?>
      <div class="pestañaBarraNavegadora">
        3
      </div>
      <div class="pestañaBarraNavegadora">
        4
      </div>
      <div class="pestañaBarraNavegadora">
        5
      </div>
    </div>

    <div id="cuerpoPrincipal">
    <div class="barra" id="fondoVistaDetallada">
      <div class="contenido" id="vistaDetallada">
        <h1>No hay un elemento seleccionado</h1>
      </div>

      <div id="barraHerramientas">
        <button onclick='añadirCliente()'>Añadir</button>
        <button onclick='mostrarModificar()'>Modificar</button>
        <button onclick="eliminarItem()">Eliminar</button>
        <button onclick="actualizarVista()">Actualizar</button>
      </div>
    </div>

    <table id="contenedorLista">
      <tbody id="datosCliente">
        <tr class="listaClientes">
          <td>
                <div class="contenido vistaLista">
                    <p class="informacionCliente">No hay datos disponibles.</p>
                </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>

      <div class="esconder"; id="blur">
        <dialog id="confirmarEliminacion">
          <p>¿Proceder a borrar los datos?</p>
          <form method="dialog">
            <button value="cancel" formmethod="dialog" id="Cancelar">Cancelar</button>
            <button value="default" formmethod="dialog" id="Continuar">Continuar</button>
          </form>
        </dialog>
      </div>

    <div id="memoriaCategoria">clientes</div>

    <script type="text/javascript" src="controladores/javascript/mostrarListaClientes.js"></script>
    <script type="text/javascript" src="controladores/javascript/seleccionarItem.js"></script>
    <script type="text/javascript" src="controladores/javascript/añadirCliente.js"></script>
    <script type="text/javascript" src="controladores/javascript/eliminarCliente.js"></script>
    <script type="text/javascript" src="controladores/javascript/modificarCliente.js"></script>
    <script type="text/javascript" src="controladores/javascript/barraHerramientas.js"></script>
    <script type="text/javascript" src="controladores/javascript/actualizar.js"></script>
</html>
