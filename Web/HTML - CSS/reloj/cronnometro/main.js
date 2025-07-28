//botones
let btnStart = document.querySelector("#start");
let btnStop = document.querySelector("#stop");
let btnReset = document.querySelector("#reset");

//Reloj
let segundos = document.querySelector("#secons");
let minutos = document.querySelector("#minutes");
let horas = document.querySelector("#hours");

//Variable de control
let control;

//variables del tiempo
let seg = 0;
let min = 0;
let hor = 0;

//eventos de botones
btnStart.addEventListener("click", () => {
    control = inicio();
    btnStart.classList.toggle("oculto");
    btnStop.classList.toggle("oculto");
});

btnStop.addEventListener("click", () => {
    clearInterval(control);
    btnStart.classList.toggle("oculto");
    btnStop.classList.toggle("oculto");
});


btnReset.addEventListener("click",() =>{
    recetear();
});

//funciones

function cronometrar(){
    seg++;

    if(seg == 60) {
        seg = 0;
        min++;
    }

    if(min == 60){
        min = 0;
        hor++;
    }

    segundos.innerHTML = seg < 10 ? "0"+ seg : seg;
    minutos.innerHTML = min < 10 ? min.toString().padStart(2, '0') : min; 
    horas.innerHTML = hor < 10 ? hor.toString().padStart(2, "0") : hor;
}

function inicio(){
    return setInterval(cronometrar, 1000);
}

function recetear(){
    seg = 0;
    min = 0;
    hor = 0;
    segundos.innerHTML = "00";
    minutos.innerHTML = "00";
    horas.innerHTML = "00";

    clearInterval(control);
    control = inicio();

    btnStart.classList.add("oculto");
    btnStop.classList.remove("oculto");

}


