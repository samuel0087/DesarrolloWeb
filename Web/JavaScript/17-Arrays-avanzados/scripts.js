// //Recorrer un array
// let lenguajes = ["HTML", "CSS", "JavaScrpt", "PHP", "Java", "Python", "NodeJS"];

// // //Bucle for
// // for(let i = 0; i < lenguajes.length; i++){
// //     console.log(lenguajes[i]);
// // }

// //bucle for OF => crea una variable sigular por cada vuelta que recorre el array
// for(let lenguaje of lenguajes){
//     //console.log(lenguaje);
// }

// //for IN => selecciona los indices del array y se actualiza en cada vuelta del ciclo
// for(let indice in lenguajes){
//     //console.log(lenguajes[indice])
// }

// //foreach =>recibe como parametro el valor, y opcionalmente el indice
// lenguajes.forEach((lenguaje, indice) =>{
//     console.log(lenguaje.concat(" posicion: ").concat(indice+1));
// });

// //bucle map
// let lenguajesWeb = lenguajes.map((lenguaje) =>{
//     return lenguaje.concat(" Web");
// });

// //console.log(lenguajesWeb);
// lenguajesWeb.forEach((lenguajes) => {
//     console.log(lenguajes);
// });


// //Arrays bidimensionales

// let tabla = [
//     ["Producto", "Precio", "Cantidad"],
//     ["PC",          7000,       2],
//     ["Celular",     500,        4],
//     ["Laptop",      6000,       2]
// ];

// console.table(tabla);

/**
 * Tambien se puede recorrer de la siguiente manera:
 * tabla.forEach((fila) =>{
 *      fila.forEach((columna) =>{
 *              instrucciones;
 *      });
 * });
 */

/**
 * funciones para arrays
 */

//crear array
let dispositivos = ["celular", "tablet", "smart tv"];

console.log(dispositivos);

// longitud del array
console.log(dispositivos.length);

//agregar elementos
dispositivos.push("xbox series x");
dispositivos.push("Play station 5");

// Agregar al principio
dispositivos.unshift("xbox 360");

console.log(dispositivos);

//eliminar elementos
dispositivos.pop(); // elimina el ultimo elemento


//eliminar  al pricipio
dispositivos.shift();

console.log(dispositivos);

//Buscar un indice
let indice = dispositivos.indexOf("Play station 5");
console.log(indice);

//Verificar existencia
let existencia = dispositivos.includes("xbox series x");
console.log(existencia);

//filtrar array
let dispositivosConE = dispositivos.filter((dispositivo) => {
    let resultado;

    resultado = dispositivo.includes("e") ? true : false;

    return resultado;
});

console.log(dispositivosConE);

//Busqueda
let buscar = dispositivos.find(dispositivo => dispositivo == "xbox series x");
console.log(buscar);
 