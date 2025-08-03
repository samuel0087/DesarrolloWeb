/**
 * Crear un boton donde cuente cuantas vexes lo has pulsado
 * Cuando se llegue a los 17, mostrar un cartel aclarando que es el limite
 * Si se sobreasa el reloj se resetea y comienza denuevo
 */

window.addEventListener("load", () =>{
    let boton = document.querySelector("#start");
    let contador = document.querySelector("#contador")
    let cont = 0;

    boton.addEventListener("click", ()=>{
        cont++;
        contador.textContent = cont < 10 ? cont.toString().padStart(2, '0') : cont;
        
        if(cont == 17){
            alert("Limite alcanzado, el sigiente click comenzara denuevo la cuenta");
            cont = 0;
        }
    })
})