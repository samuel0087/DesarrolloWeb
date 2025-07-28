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

btnStart.addEventListener("click", () => {
    setearBotones();
    control = setInterval(cronometrar, 1000);
});

btnStop.addEventListener("click", () => {
    clearInterval(control);
});


btnReset.addEventListener("click",() =>{
    recetear();
    setearBotones();
});

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
    //Revisar los ceros en el tiempo
    seg = seg < 10 ? "0"+ seg : seg;
    min = min < 10 ? "0" + min : min;
    
    segundos.innerHTML = seg;
    minutos.innerHTML = min;
    horas.innerHTML = hor;
}

function recetear(){
    clearInterval(control);
    seg = 0;
    segundos.innerHTML = "00";
    minutos.innerHTML = "00";
    horas.innerHTML = "00";
}

function setearBotones(){
    btnStart.classList.toggle("oculto");
    btnReset.classList.toggle("oculto");
    btnStop.classList.toggle("oculto");
}

