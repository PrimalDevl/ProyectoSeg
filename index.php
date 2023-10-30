<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="vista/css/sesion.css">
    <title> Inicio de sesion </title>
</head>
<body>
  <div id="monitorDeEstado"></div>
  <div class="Tabla">
    <img src="vista/graficos/perfilUsuario.png" class="Logo" alt="gráfico de perfil">
      <input required id="cedula" type="text" class="Cedula" name="cedula" placeholder="Ingrese su cedula sin guión" value="55554216"></input>
      <p style="display:block;" class="Cedula"></p>
      <input required id="contrasena" type="text" minlength="8" class="Contraseña" name="contrasena" placeholder="Ingrese su contraseña" value="HolaMUND0!"></input>
      <p style="display:block;" class="Contraseña"></p>
      <button class="Ingresar" onclick="validarCampos()" name="submit" value="ingresar">Ingresar</button>
  </div>

<script src="controladores/sesiones/inicioSesion.js" charset="utf-8"></script>
<script src="controladores/validacion/validacionCampos.js" charset="utf-8"></script>
<script src="controladores/validacion/controlFormato.js" charset="utf-8"></script>
<script src="controladores/sesiones/esAdmin.js" charset="utf-8"></script>
<script src="controladores/sesiones/inicioAdmin.js" charset="utf-8"></script>
<script src="controladores/sesiones/inicioUsuario.js" charset="utf-8"></script>
</body>
</html>
