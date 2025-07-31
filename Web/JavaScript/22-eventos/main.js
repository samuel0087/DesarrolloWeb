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

