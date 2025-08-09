window.addEventListener("load", ()=>{
    let fecha = document.querySelector(".fecha");

    //Objeto date
    let fechaActual = new Date();

    console.log(fechaActual.getFullYear()); //año
    console.log(fechaActual.getMonth()+1); // mes , comienza en cero
    console.log(fechaActual.getDate());
    console.log(fechaActual.getHours());
    console.log(fechaActual.getMinutes());
    console.log(fechaActual.getSeconds());
    console.log(fechaActual.getMilliseconds());
    console.log(fechaActual.getDay()); // el domingo es el cero

    let fechaString = `Fecha hoy: ${fechaActual.getDate()}/${fechaActual.getMonth()+1}/${fechaActual.getFullYear()}`
    fecha.textContent = fechaString;
})