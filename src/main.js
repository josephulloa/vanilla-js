function horaDeHoy() {
  let today = new Date();
  let hora = today.getHours();
  let minutos = today.getMinutes();
  let segundos = today.getSeconds();

  return hora + ":" + minutos + ":" + segundos;


}
  

function Actualizar() {
  let horaElemento = document.querySelector("#Hora");
  horaElemento.textContent = horaDeHoy();
}

let intervalID = setInterval(Actualizar, 1000);


