/**
 * Ejercicio 26
 * Dado un array de palabras, cuenta cuantas letras tiene cada palabra
 * y crea un nuevo array con los numeros
 */

const lista = ["Samuel", "Taunus", "Palta", "Motorola", "Ciudad Autonoma de Buenos Aires"];

const listaLongitud = lista.map((elemento) => elemento.length);

console.log(lista);
console.log(listaLongitud);