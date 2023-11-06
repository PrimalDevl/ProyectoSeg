function iniciarAdmin() {
  const solicitudXmlHttp = new XMLHttpRequest();
  solicitudXmlHttp.open(
    'POST',
    `vistaClientes.php`
  );
  solicitudXmlHttp.setRequestHeader(
    "Accept",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8"
  );
  solicitudXmlHttp.setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );

  let esAdmin = `
  <div onclick="actualizarVista('usuarios')" class="pestañaBarraNavegadora">
    Usuarios
  </div>
  `;
  io.open('POST', 'vistaClientes.php', {request:esAdmin}, "_self");
}


// Arguments :
//  verb : 'GET'|'POST'
//  target : an optional opening target (a name, or "_blank"), defaults to "_self"
window.io = {
    open: function(verb, url, data, target){
        var form = document.createElement("form");
        form.action = url;
        form.method = verb;
        form.target = target || "_self";
        if (data) {
            for (var key in data) {
                var input = document.createElement("textarea");
                input.name = key;
                input.value = typeof data[key] === "object"
                    ? JSON.stringify(data[key])
                    : data[key];
                form.appendChild(input);
            }
        }
        form.style.display = 'none';
        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
    }
};
