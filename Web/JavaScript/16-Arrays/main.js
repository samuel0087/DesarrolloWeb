//Arrays, vectores, arreglos
let nombre = "Samuel";

let nombres = ["Samuel", "Nahuel", "Nadia", "Marisol"];

let parejas = new Array("Zoe", "Agustina", "Gonzalo", "Brian");

console.log(nombres);
console.log(nombres.length);

console.log(parejas);
console.log(parejas.length);

//Ejercicio
let elemento = parseInt(prompt("¿Que elemento buscas?"));

if(!elemento <= nombres.length){
    alert( "Usted escogio a " + nombres[elemento-1] );
}
else{
    alert( "No existe" );
}