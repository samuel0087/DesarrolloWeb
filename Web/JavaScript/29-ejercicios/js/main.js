/**
 * Crear una aplicacion web en la que puedas añadir, mostrar y eliminar
 * tus peliculas favoritas.
 * 
 * cada pelicula debe tener:
 * 
 * - titulo de la pelicula
 * - Fecha de guardado
 * - Puntuacion de popularidad (un valor aleatorio entre 1 y 100)
 * 
 * Las peliculas deben mantenerse guardadas aunque se recargue la pagina,
 * y se debe poder eliminar cualquiera de ellas de la lista en cualquier momento.
 * 
 * Tareas:
 * -Crear formulario.   *
 * -Funcion para guardar las peliculas con los datos necesarios
 * -funcion para mostrar peliculas extraidas del localStorage
 * -Las peliculas deben cargarse automaticamente al cargar la web
 * Funcion para eliminar peliculas.
 * 
 */

window.addEventListener("load", () => {
    mostrar();

    let formulario = document.querySelector(".formulario");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();

        guardar();
    })
})
// class Pelicula {
//     constructor(nombre){
//         this.nombre = nombre;
//         this.fecha = new Date;
//         this.puntuacion = Math.round(Math.random()*10);
//     }
// }

// let pelisContainer = document.querySelector("#misPelis");

// let peliculasAll = getPeliculas();
// mostrarPeliculas(peliculasAll);




// function guardarPeli(nueva){
//     if(typeof(Storage) !== "Undefined"){
//         if(peliculasAll == null){
//             peliculasAll =[]
//         }

//         peliculasAll.push(nueva);
//     }
//     else{
//         alert("Storage no dispinible");
//     }
// }

// function getPeliculas(){
//     let aux=[];

//     if(typeof(Storage) !== "Undefined"){
//         aux = JSON.parse(localStorage.getItem('peliculas'));
//     }
//     else{
//         alert("Storage no dispinible");
//     }

//     return aux;
// }

// function setPeliculas(peliculas){
//     if(typeof(Storage) !== "undefined"){
//         localStorage.setItem("peliculas", JSON.stringify(peliculas));
//     }
//     else{
//         alert("No esta disponible el storage");
//     }
// }

// function mostrarPeliculas(peliculas){
//     if(peliculas != null){
//         peliculas.forEach(peli => {
//             let lista = document.createElement("ul");

//             lista.innerHTML += `<li>${peli.nombre}</li>`;
//             lista.innerHTML += `<li>${peli.puntuacion}</li>`;
//             lista.innerHTML += `<li>${peli.fecha}</li>`;
//             lista.innerHTML += `<li><button class="btn">Eliminar</button></li>`;

//             pelisContainer.append(lista);
//         });
//     }
//     else{
//         alert(peliculas);
//     }
// }

// document.querySelector(".formulario").addEventListener("submit", function(event){
//     event.preventDefault();
//     let peli = new Pelicula(document.querySelector("#nombre").value);
//     guardarPeli(peli);
//     setPeliculas(peliculasAll);
//     window.location.reload();
// })


//** */

/* EJERCICIO COMO EN EL CURSO */

function eliminar(indice){
    //sacar elementos del localstorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    //Eliminar peli del indice
    pelisGuardadas.splice(indice, 1);

    //Actualizar array de peliculas
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    //Mostrar listado
    mostrar();
}

function mostrar() {
    //Seleccionar la etiqueta del listado
    let listado = document.querySelector("#misPelis");
    listado.innerHTML = "";

    //Sacar las pelis del localstorage
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    if (!pelisGuardadas) {
        pelisGuardadas = [];
    }


    //Si no hay pelis mostrar mensaje
    if (pelisGuardadas.length === 0) {
        listado.innerHTML += "<h3>No hay pelis</h3>";
        return false;
    }

    //Recorrer pelis y mostrar
    pelisGuardadas.forEach((pelicula, indice) => {

        const peliArticle = document.createElement("article");

        peliArticle.innerHTML = `
                <h3>${pelicula.titulo}</h3>
                <p>Fecha: ${pelicula.fecha}</p>
                <p>Pupularidad: ${pelicula.popularidad}</p>
            `;

        let articleBtn = document.createElement("button");
        articleBtn.textContent = "Eliminar";
        articleBtn.classList.add("btn");
        articleBtn.addEventListener("click", ()=> eliminar(indice));

        peliArticle.appendChild(articleBtn);
        peliArticle.classList.add("peliContainer");
        listado.appendChild(peliArticle);


    });

}



function guardar() {
    //Seleccionar la caja de texto y sacar su valor
    let campoTitulo = document.querySelector("#nombre");
    let titulo = campoTitulo.value;

    //Validacion
    if (titulo.trim() === "") {
        alert("Por favor ingrese un nombre valido");

        return false;
    }

    //Conseguir fecha actual
    const FECHA = new Date();
    const FECHA_ACTUAL = FECHA.toLocaleDateString() + " " + FECHA.toLocaleTimeString();

    //Generar un numero aleatorio para la popularidad
    let popularidad = Math.floor(Math.random() * 100) + 1;

    //crear un objeto pelicula
    let pelicula = {
        titulo,
        fecha: FECHA_ACTUAL,
        popularidad
    };

    console.log(pelicula);

    //Sacar todas las peliculas(Array de objetos)
    let pelisGuardadas = JSON.parse(localStorage.getItem("peliculas"));

    if (!pelisGuardadas) {
        pelisGuardadas = [];
    }

    //Añadir al array una nueva peli
    pelisGuardadas.push(pelicula);

    //Guardar todo en el llocalStorage
    localStorage.setItem("peliculas", JSON.stringify(pelisGuardadas));

    //Limpiar el campo de texto

    campoTitulo.value = "";

    //Mostrar peliculas
    mostrar();

    return true;

}


