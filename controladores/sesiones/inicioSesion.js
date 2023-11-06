function iniciarSesion(credenciales, esAdmin) {
  let esUsuario = 0;
  const solicitudXmlHttp = new XMLHttpRequest();
  solicitudXmlHttp.open(
    'POST',
    `controladores/sesiones/inicioSesion.php`
  );
  solicitudXmlHttp.setRequestHeader(
    "Accept",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
  );
  solicitudXmlHttp.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );

  solicitudXmlHttp.onreadystatechange = function () {
    if (solicitudXmlHttp.readyState === 4) {
      console.log(solicitudXmlHttp.status);
      esUsuario = solicitudXmlHttp.responseText;
      console.log(esUsuario);
      if (esAdmin == true) {
        iniciarAdmin();
      } else if (esUsuario == true) {
        console.log("no es admin.");
        iniciarUsuario();
      } else {
        document.getElementsByClassName("Contraseña")[1].innerHTML = "Credenciales incorrectas";
      }
    };
  }
  solicitudXmlHttp.send(credenciales);
}

/*REQUEST*/
// POST /proyectos/Maquetaci%C3%B3nMVC/RamaInicioSesion/controladores/sesiones/inicioSesion.php HTTP/1.1
// Host: localhost
// User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0
// Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8
// Accept-Language: es-ES,es;q=0.8,en-US;q=0.5,en;q=0.3
// Accept-Encoding: gzip, deflate, br
// Content-Type: application/x-www-form-urlencoded
// Content-Length: 51
// Origin: http://localhost
// DNT: 1
// Connection: keep-alive
// Referer: http://localhost/proyectos/Maquetaci%C3%B3nMVC/RamaInicioSesion/index.php
// Upgrade-Insecure-Requests: 1
// Sec-Fetch-Dest: document
// Sec-Fetch-Mode: navigate
// Sec-Fetch-Site: same-origin
// Sec-Fetch-User: ?1
// Pragma: no-cache
// Cache-Control: no-cache

/*RESPONSE*/
// POSTarray(3)
// {
// ["cedula"]=> string(8) "55554216"
// ["contrasena"]=> string(10) "HolaMUND0!"
// ["submit"]=> string(8) "ingresar"
// }
