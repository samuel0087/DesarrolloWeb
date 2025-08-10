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

    let peli = [];


    console.log(peli);

    function guardarPeli(peliculas, nueva){
        if(typeof(Storage) !== "Undefined"){
            peliculas.push(nueva);
        }
        else{
            alert("Storage no dispinible");
        }
    }

    function getPeliculas(){
        let aux;

        if(typeof(Storage) !== "Undefined"){
            aux = JSON.parse(localStorage.getItem('peliculas'));
        }
        else{
            alert("Storage no dispinible");
        }

        return aux;
    }

})
