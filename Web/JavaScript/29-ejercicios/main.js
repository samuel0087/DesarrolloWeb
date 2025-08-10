/**
 * Ejercicio 37:
 * 1-Crear un formulario con campos: nombre, apellidos y edad
 * 2-USAR EL EVENTO SUBMIT
 * 3-Mostrar los datos por pantalla cuando se termine de enviar el formulario
 */

window.addEventListener("load", ()=>{

    const formulario = document.querySelector("#formulario");
    let datos = document.querySelector("#dataUser");

            let nombre = document.querySelector("#nombre");
            let apellidos = document.querySelector("#apellidos");
            let edad = document.querySelector("#edad");

    formulario.addEventListener("submit", (event)=>{
        event.preventDefault();

        if(!validarVacio(nombre.value)){
            nombre.classList.add("error");
        }
        else{
            nombre.classList.remove("error");
        }

        if(!validarVacio(apellidos.value)){
            apellidos.classList.add("error");
        }
        else{
            apellidos.classList.remove("error");
        }

        let errores = document.querySelectorAll(".error");
        console.log(errores);

        if(errores.length >= 1){
            alert("Verifica los datos ingresados");
            return;
        }

        formulario.classList.toggle("oculto");
        datos.classList.toggle("oculto");



        datos.querySelector("p").innerHTML = `${nombre.value} ${apellidos.value}`


    })


    function validarVacio(texto){

        console.log(texto);
        result = true;
        if(texto.trim() == ""){
            result = false;
        }

        return result;
    }

})