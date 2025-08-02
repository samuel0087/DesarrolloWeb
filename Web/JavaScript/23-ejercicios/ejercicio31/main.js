/**
 * Ejercicio 31: 
 * 
 * Crear un semaforo con tres luces (rojo, amarillo y verde)
 * Hacer el diseño en HTML Y CSS
 * 
 * Cuando un peaton requiere cruzar la calle debe pulsar un boton.
 * Crear un boton para cambiar el color de las luces secuencialmente (siempre pasando por el amarillo).
 * 
 * El semaforo siempre comienza en verde, cuando se hace click, pasa por el amarillo hacia el rojo.
 * Durara 30 segundos y luego volvera al verde pasando por el amarillo.
 */

window-addEventListener("load",  ()=>{
    let rojo = document.querySelector(".rojo");
    let amarillo = document.querySelector(".amarillo");
    let verde = document.querySelector(".verde");
    let boton = document.querySelector(".btn");

    boton.addEventListener("click", secuencia);

    function secuencia(){

        boton.classList.toggle("presionado");
        //usar setInterval para el semaforo. (utilizar un contador para saber en que tiempo esta)
        
        setTimeout(()=>{
             boton.classList.toggle("presionado");
            console.log("hola");
        }, 15000);





    }

    function rojoAmarillo(){
        rojo.classList.toggle("apagado");
        amarillo.classList.toggle("apagado");
    }

    function amarilloVerde(){
            amarillo.classList.toggle("apagado");
            verde.classList.toggle("apagado");
    }
})


