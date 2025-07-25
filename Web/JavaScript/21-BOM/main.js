//BOM Browser Object Model

// //Alertas y ventanas de dialogo
// alert("Esto es una alerta");

// let dialogo = prompt("Como ingresar datos por ventanas de dialogo");

// confirm("Acepta si quieres seguir con el curso");


//Window

console.log(window);
console.log(window.innerHeight);
console.log(window.innerWidth);

console.log(window.outerHeight, window.outerWidth);

console.log(window.closed, window.document, window.navigator.userAgent);


// setInterval(() => {
//     console.log("Hola Samuel");
// }, 1000);

console.log(window.scrollX, window.scrollY);

//navigator
// if(navigator.onLine){
//     alert("ONLINE");
// }
// else{
//     alert("OFline");
// }

// Location
console.log(location.href);
console.log(location.hostname);

//location.href = "https://SamuelTomasWebbApp.com"

//History
history.back();

//Screen
console.log(screen.width, screen.height);

//Ventanas emergentes o pop ups
let miWeb = window.open("https://victorroblesweb.es/ruta",
                "Ruta de aprendizaje de desarrollo web",
                "width=550, heigth=150, left=450, top=150"
);