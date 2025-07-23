/**
 * Ejercicio 24 :
 * Crea un array con 10 numeros aleatorios del 1 al 100.
 * Luego, el usuario tiene que adivinar un numero.
 * 
 * si acierta, mostrar un msj de felicitaciones.
 * si no, muestra el numero correcto
 */

// function generarArrayAleatorio(longitud, min, max){
//     let listaNumeros = [];
//     for(let i = 0; i < longitud; i++){
//         let numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
//         listaNumeros.push(numeroAleatorio);
//     }

//     return listaNumeros;
// }

/**
otra opcion
*/
function generarArrayAleatorio(longitud, min, max){
    let listaNumeros = Array.from({length: longitud}, () => Math.floor(Math.random() * (max - min + 1) + min));

    return listaNumeros;
}


let numerosAleatorios = generarArrayAleatorio(10, 1, 100);

console.log(numerosAleatorios);

let numeroElegido = parseInt(prompt("Eliga un numero del 1 al 100"));

if(numerosAleatorios.includes(numeroElegido)){
    console.log("Bien hecho mmuchacho");
}
else{
    console.log(numerosAleatorios);
}