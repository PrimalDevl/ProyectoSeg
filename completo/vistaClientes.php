<!DOCTYPE html>
<html lang="es" dir="ltr">
  <head>
    <title>vista Clientes</title>
    <link rel="stylesheet" href="vista\CSS\vistaClientes.css"></link>
    <meta charset="utf-8">
  </head>
  <body>
    <div class="barra" id="barraNavegadora">
      <div class="pestañaBarraNavegadora">
        1
      </div>
      <div class="pestañaBarraNavegadora">
        2
      </div>
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
        <form class="" action="vistaClientes.php" method="post">
          <input type="number" name="cedula" placeholder="cedula">
          <input type="text" name="nombre" value="Cliente CR">
          <input type="text" name="apellido" placeholder="apellido">
          <input type="text" name="comentario" value="Prueba de Añadir registro">
          <button type="submit" name="nuevoRegistro">Confirmar</button>
        </form>
        <?php
        require_once 'controladores/php/añadirItem.php';
        ?>
      </div>

      <div id="barraHerramientas">
        <button type="button" name="Añadir">Añadir</button>
        <button type="button" name="Modificar">Modificar</button>
        <button type="button" name="Eliminar">Eliminar</button>
        <button type="button" class="actualizar">Actualizar</button>
      </div>
    </div>

    <table id="contenedorLista">
      <tbody id="datosCliente">
        <tr class="listaClientes">
          <td>
                <div class="contenido vistaLista">
                    <p class="informacionCliente">No se encontraron registros en la base de datos.</p>
                    <!-- <button class="botonLista" type="button" name="button">Seleccionar</button> -->
                </div>
          </td>
        </tr>
      </tbody>
    </table>
    </div>

      <div id="blur">
        <dialog id="confirmarEliminacion">
          <p>¿Proceder a borrar los datos?</p>
          <form method="dialog">
            <button value="cancel" formmethod="dialog" id="Cancelar">Cancelar</button>
            <button value="default" formmethod="dialog" id="Continuar">Continuar</button>
          </form>
        </dialog>
      </div>



    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/sweetalert/2.1.2/sweetalert.min.js"></script>
    <script type="text/javascript" src="controladores/javascript/jquery.min.js"></script>
    <script type="text/javascript" src="controladores/javascript/mostrarClientes.js"></script>
  </body>
</html>
