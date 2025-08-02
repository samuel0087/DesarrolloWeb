//Eventos

let boton = document.querySelector("#botoncito");

boton.addEventListener("click", (event) => {
   // alert("Mensaje de accion");

    console.log(event.clientX);
})

let caja = document.querySelector("#caja");

document.querySelector("#botonDoble").addEventListener("dblclick", () => {
    //alert("Preciono un doble chlick");
    caja.classList.toggle("oculto");

})

caja.addEventListener("mouseover", () => {
    caja.style.background = "blue";
})

caja.addEventListener("mouseout", () => {
    caja.style.background = "red";
    caja.style.border = "none";
    b = 0;
})

let b = 0;

caja.addEventListener("mousemove", () => {
    caja.style.border = b + "px solid black";
    b+= 0.1;
})

//eventos de teclado
let texto = document.querySelector("#key");
let msj = "";
texto.addEventListener("keydown", (event) => {
    if(event.key == "Backspace"){
        msj = msj.slice(0, -1);
    }
    else{
        msj += event.key;
    }
    caja.textContent = msj;

})

texto.addEventListener("keyup", (event) => {
    console.log(event.key);
})

//keypress
texto.addEventListener("keypress", () => {
    console.warn(event.key);
})

//Eventos de formulario
let formulario = document.querySelector("#superFormulario");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    let nombre = document.querySelector("#name").value;
    let correo = document.querySelector("#correo").value;
    let genero = document.querySelector("#genero").value;

    caja.innerHTML =`<p>Nombre: ${nombre}</p> <p>Correo:${correo}</p> <p>Genero: ${genero}</p>`;
})

//INPUTS
/*
 *IMPORTANTE: Al usar funciones de flecha " () => {} ",no se puede acceder al valor del mismo por medio de this.
 *En cambio si usamos " Function(){} " podremos usarlo. 
 */

let inputNombre = document.querySelector("#name");

inputNombre.addEventListener("input", function(){
    console.log(`Text: ${this.value}`)
})

let generos = document.querySelector("#genero");

generos.addEventListener("change", ()=>{
    console.warn(`Genero: ${generos.value}`)
})

//Focus y Blur

let email = document.querySelector("#correo");

email.addEventListener("focus", ()=>{
    console.warn("Recuerda que el email tiene que tener un @ y un .com");
})


email.addEventListener("blur", ()=>{
    if(!email.value.includes("@")){
        console.error("Usted no aprende,¿Verdad?");
    }
    else{
        console.log("Puede prosegir");
    }
})

//Eventos del socumento y la ventana

document.addEventListener("DOMContentLoaded", ()=>{
    console.log("Se cargo el documento");
})

window.addEventListener("load", ()=>{
    console.warn("Se cargo la web completa");
})

window.addEventListener("resize", () => {
    console.error(`Ancho: ${window.innerWidth}  Alto: ${window.innerHeight}`)
})


window.addEventListener("scroll", ()=>{
    console.log(`Estas en el pixel: ${window.scrollY}`)
})
