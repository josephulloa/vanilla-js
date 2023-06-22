// Inserte el código aquí
function horaDeHoy() {
  let today = new Date();
  let hora = today.getHours();
  let minutos = today.getMinutes();
  let segundos = today.getSeconds();

  return hora + ":" + minutos + ":" + segundos;
}

function Actualizar() {
  let horaElemento = document.querySelector(".Hora");
  horaElemento.textContent = horaDeHoy();
}

let intervalID = setInterval(Actualizar, 1000);

// const imprimirUsuarios = () => {
//   const usuarios = obtenerUsuarios();
//   usuarios
//     .then((response) => {
//       return response.json();
//     })
//     .catch(Error);
// };

obtenerUsuarios();

function obtenerUsuarios() {
  fetch("http://localhost:3000/users")
    .then((respuesta) => respuesta.json())
    .then((data) => {
      console.log("lista de usuarios", data);
    })
    .catch((error) => {
      console.log("Error no hay lsta", error);
    });
}

function usuarios() {
  return new Promise(obtenerUsuarios);
}


async function datos() {
  const datosUsuarios = await obtenerUsuarios();
console.log (datosUsuarios)
}

datos()
