//Document Object Model - DOM

//getElementById => selecciona elementos por su ID
let caja = document.getElementById("caja");

//Midificar caracteristicas de un elemento seleccionado

caja.innerHTML = "<h2>Hola usuario</h2>";

//agregar una clase
caja.classList.add("cajita");

//className => se utiliza para revisar o remplazar por completo la clase de un elemento
console.log(caja.className);

function cambiarColor(color, radius){

    //.style cambia  directamente los estilos del elemento
    caja.style.background = color;
    caja.style.borderRadius = radius;
}

console.log(caja.innerText);

//getElementByClassName => Selecciona multiples elementos con una clase

let articulos = document.getElementsByClassName("artuculo");

console.log(articulos);





for(let i = 0; i < articulos.length; i++){
    articulos[i].classList.add("articuloBase");

    //crear un nodo del dom
    let enlace = document.createElement("a");
    enlace.setAttribute("href", "https://google.com");

    let textoEnlace = document.createTextNode("Seguir leyendo");
    enlace.append(textoEnlace);

    articulos[i].append(enlace);

    if(i === 0){
        articulos[i].classList.add("destacado");
    }
}

//getElementByTagName => document.getElementByTagName();
let etiquetasArticulos = document.getElementsByTagName("article");
console.log(etiquetasArticulos);

//QuerySelector
let seccionArticulos = document.querySelector("#articulos");
console.log(seccionArticulos);

//QuerySelector y clases

let primerArticulo = document.querySelector(".artuculo");
primerArticulo.classList.add("bordesRojos");

//QuerySelectorAll
let articulosAll = document.querySelectorAll(".artuculo");

articulosAll.forEach((articulo, i) => {
    if(i == 2){
        articulo.classList.add("bordesRojos");
        articulo.classList.add("destacado");
    }
} );

//Modificaciones
let tarjeta = document.querySelector("#card");
console.log(tarjeta);

tarjeta.textContent = "Contenido nuevo de mi tarjeta";
tarjeta.innerHTML = "<strong>Hola, esto es una tarjeta</strong>";

tarjeta.setAttribute("class", "card-small");

console.log(tarjeta.getAttribute("class"));

tarjeta.style.padding = " 20px 40px";
tarjeta.style.borderRadius = "10px";
tarjeta.style.border = "10px solid grey";
tarjeta.style.width = "40%";
tarjeta.style.margin = "auto";
tarjeta.style.marginBottom = "40px";
tarjeta.style.textAlign = "center";

tarjeta.classList.add("remarcado");

tarjeta.classList.remove("remarcado");

tarjeta.classList.toggle("redondear");

const titular = document.createElement("h2");

titular.textContent = "Titular";

//tarjeta.append(titular); //agrega al final
tarjeta.querySelector("strong").remove(); // selecciona un elemento dentro del elemento que estamos trabajando y lo elimina

tarjeta.insertBefore(titular, tarjeta.firstChild);



