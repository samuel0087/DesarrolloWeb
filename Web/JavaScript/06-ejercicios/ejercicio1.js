/**
 * Ejercicio 1:
 * Si la distancia de la tierra a la luna es de 384.400 km
 * y la velocidad de una nave es de 1225 km * h
 * 
 * ¿cuantas horas le llevata a la nave llegar de la luna a la tierra?
 * 
 * Guardar su resultado en una variable y mostrarla por consola
 */

let distancia_total = 384400;
let velocidad_actual = 1225;

let horas_estimadas = distancia_total / velocidad_actual;

console.log("El tiempo estimado de llegada a la luna es de: " + horas_estimadas.toFixed(2) + " horas");

