// Inserte el código aquí
 
//UNO
let Arreglo = 
    [1, 2, 3,]

function clonarArreglo(NuevoArreglo){
   
Arreglo= [...NuevoArreglo]

 return Arreglo

} 

 //DOS
function clonarObjeto (original){
return original

}

const original = {persona: "Jose", ciudad: "barranca", edad: 22 }

const nuevoClon = clonarObjeto (original)

console.log(nuevoClon)
console.log( original === nuevoClon )


//TRES
function sumar (...suma){ 
return suma.reduce((total, valor ) => {return total + valor }, 0)

}

// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar }