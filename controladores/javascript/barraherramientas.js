function herramientasAñadir() {
barraHerramientas = document.getElementById('barraHerramientas');
codigoHTML = barraHerramientas.innerHTML;
codigoHTML =`
  <button>Añadir</button>
  <button onclick="actualizarVista()">Actualizar</button>
`;


}
function herramientasSeleccion() {
  barraHerramientas = document.getElementById('barraHerramientas');
  codigoHTML = barraHerramientas.innerHTML;
  codigoHTML =`
  <button>Añadir</button>
  <button onclick="actualizarVista()">Actualizar</button>
  `;


}
