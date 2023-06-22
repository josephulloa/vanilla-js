// Inserte el código aquí
import {calculadora} from "./calculadora.js"


function calcular (operaciones, n1, n2) { 
    let resultado;
    if (operaciones === "sumar") {
      resultado = calculadora.sumar(n1, n2)
    } else if (operaciones === 'restar') {
         resultado = calculadora.restar(n1, n2)
    } else if (operaciones === 'multiplicar') {
        resultado = calculadora.multiplicar(n1, n2)
     } else if (operaciones === 'dividir') {
         resultado = calculadora.dividir(n1, n2)
     }
     console.log(resultado)
    return resultado
  }


calcular("sumar", 1,2)
calcular("restar", 1,2)
calcular("multiplicar", 1,2)
calcular("dividir", 1,2)

