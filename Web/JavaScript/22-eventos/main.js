//Eventos

let boton = document.querySelector("#botoncito");

boton.addEventListener("click", (event) => {
   // alert("Mensaje de accion");

    console.log(event.clientX);
})