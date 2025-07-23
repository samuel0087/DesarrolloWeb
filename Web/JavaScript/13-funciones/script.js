// //funciones
// //Una funcion agrupauna serie de instrucciones
// //  y puede usarlas en cualquier parte del codigo, las veces que necesite

// function saludo(nombre){
//     console.log(`Hola ${nombre}, como estas?`);
// }

// function saludoCorrecto(nombre){
//     return `Hola ${nombre}, como estas?`
// }

// let nombre = "Samuel";

// //funcion que muestra por pantalla
// //saludo("Samuel Medina");

// //funcion que retorna un valor
// let name = saludoCorrecto(nombre);

// document.writeln(`<h1>Bienvenido ${name}</h1>`);

// //Parametros REST
// function misPeliculas(peli1, pelii2, ...restoPelis){
//     console.log(peli1);
//     console.log(peli2);
//     console.log(restoPelis);
// }

// //Operador SPREAD
// let numeros = [1,2,3,4,5];
// let misNumeros = [...numeros, 6,7,8,9];

// console.log(misNumeros);

//Funciones anonimas
// const saludo = function(){
//     console.log("Hola, como estas?");
// };

// saludo();

// //Funciones de callback
// //Se pasan como parametro de otra funcion, para que esta las ejecute
// let i = 0;

// setInterval(() => {
//     i++;
//     console.log(i);
// }, 1000);

// function restame(n1,n2, mostrar, multiplicarPorTres){
//     let resta = n1 - n2;

//     mostrar(resta);
//     multiplicarPorTres(resta);

//     return resta;
// }

// restame(20, 5, function(resultado){
//     console.log(resultado);
// },
// function(resultado){
//     console.log(resultado*3);
// });


//Funciones de flecha
let Curso = () => {
    console.log("Hola mundo");

};

setTimeout(() => {
    console.log("Estoy usando una funcion de flecha");
}, 2000);