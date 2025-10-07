//Enunciado 1
/*
    -Crear un fichero Js y vincularlo con HTML
    -deves crear laas variables: nombre, apellidos, edad, pais, conocimientos(array)
    -Mostrar todos los valores por consola
    -cambiar la edad y añadir un elemento al array
    Mostrar los nuevos valores
*/

let nombre = "Samuel Tomas";
let apellidos = "Medina";
let edad = 25;
let pais = "Argentina";
let conocimientos = ["php", "Sql", "CSS", "HTML"];


console.log(nombre, apellidos, edad, pais, conocimientos);

edad = 26;
conocimientos.push("Javascript");
console.log(nombre, apellidos, edad, pais, conocimientos);