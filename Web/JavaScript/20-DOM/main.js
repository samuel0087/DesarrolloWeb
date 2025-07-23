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