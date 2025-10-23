/*
 * Enunciado 2:
 * -Crear un fichero JavaScript y vincularlo con el fichero HTML   
 * - Crear las variables marca, velocidad, stock y modelos (array)
 * - Todas estas variables deben ser mostradas por pantalla en una frase
 * - mostrar todo los elementeos del array (sin hacerlo manualmente)
 */

let marca = "Royal Enfield";
let velocidad = "160 km/h";
let stock = 100;
let modelos =["meteor 350", "HNTR 350", "Shotgun 650", "Super Meteor 650", "Continental GT"];

let frase = `Mi sueño es adquirir una moto de la marca ${marca}, alcanzan una velocidad minima de ${velocidad}. En el pais solo hay ${stock} y los modelos disponibles son: `;

frase+= "<ul>";

modelos.forEach(modelo => {
    frase += `<li>${modelo}</li>`;
});

frase+= "</ul>";

document.querySelector(".parrafo").innerHTML = frase;