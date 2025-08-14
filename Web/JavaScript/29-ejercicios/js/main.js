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
 * -Crear formulario.   
 * -Funcion para guardar las peliculas con los datos necesarios
 * -funcion para mostrar peliculas extraidas del localStorage
 * -Las peliculas deben cargarse automaticamente al cargar la web
 * Funcion para eliminar peliculas.
 * 
 */

window.addEventListener("load", () => {
    class Pelicula {
        constructor(nombre){
            this.nombre = nombre;
            this.fecha = new Date;
            this.puntuacion = Math.round(Math.random()*10);
        }
    }

    let pelisContainer = document.querySelector("#misPelis");

    let peliculasAll = getPeliculas();
    mostrarPeliculas(peliculasAll);




    function guardarPeli(nueva){
        if(typeof(Storage) !== "Undefined"){
            if(peliculasAll == null){
                peliculasAll =[]
            }

            peliculasAll.push(nueva);
        }
        else{
            alert("Storage no dispinible");
        }
    }

    function getPeliculas(){
        let aux=[];

        if(typeof(Storage) !== "Undefined"){
            aux = JSON.parse(localStorage.getItem('peliculas'));
        }
        else{
            alert("Storage no dispinible");
        }

        return aux;
    }

    function setPeliculas(peliculas){
        if(typeof(Storage) !== "undefined"){
            localStorage.setItem("peliculas", JSON.stringify(peliculas));
        }
        else{
            alert("No esta disponible el storage");
        }
    }

    function mostrarPeliculas(peliculas){
        if(peliculas != null){
            peliculas.forEach(peli => {
                let lista = document.createElement("ul");

                lista.innerHTML += `<li>${peli.nombre}</li>`;
                lista.innerHTML += `<li>${peli.puntuacion}</li>`;
                lista.innerHTML += `<li>${peli.fecha}</li>`;
                lista.innerHTML += `<li><button class="btn">Eliminar</button></li>`;

                pelisContainer.append(lista);
            });
        }
        else{
            alert(peliculas);
        }
    }

    document.querySelector(".formulario").addEventListener("submit", function(event){
        event.preventDefault();
        let peli = new Pelicula(document.querySelector("#nombre").value);
        guardarPeli(peli);
        setPeliculas(peliculasAll);
        window.location.reload();
    })



})
