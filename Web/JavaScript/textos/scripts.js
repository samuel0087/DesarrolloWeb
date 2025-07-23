
function validarFrase(frase){
    let response;
    if(frase.includes("Batman")){
        response = "I am Batman";
    }
    else{
        response = "No es Batman";
    }

    return response;
}

//Longitud
let nombre = "Samuel Tomas Medina";

console.log(nombre.length);

//Conversion a texto
let numero = 2525;
console.log(numero.toString());


//Conversion a Mayusculas
let web = "SamuelWeb.com";
console.log(web.toUpperCase());

//Buscar un string dentro de un string
//search
//match -> informacion mas detallada

let frase = "Yo soy Batman, el unico e inigualable caballero de la noche";
console.log(validarFrase(frase));


//Buscar la posicion de una palabra
console.log(frase.indexOf("caballero"));
console.log(frase.charAt(38));

//Extraer un fracmento de un texto

console.log(frase.slice(frase.indexOf("inigualable")));

//remplazar parte de un texto;
frase = frase.replace("Batman", "Robin");

console.log(validarFrase(frase));

//Limpiar espacios de un string, solo al principio y al final
let email = "                samuelTomas@gmail.com       ";
console.log(email);
console.log(email.trim());

//Separar cadena por partes
let listaSuper = "Huevos, Harina, Leche, Carne";

let arrayLista = listaSuper.split(", ");
console.log(arrayLista);

//Empieza por una palabra

console.log(frase.startsWith("Yo"));

if(frase.endsWith("noche")){
    frase = frase.replace("noche","noche \n" );
}

//termina con una palabra
console.log(frase.endsWith("noche"));

//Repetir una palabra
console.log(frase.repeat(5));