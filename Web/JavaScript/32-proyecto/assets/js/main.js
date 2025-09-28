let btn = document.querySelector(".btn-top");
let pagina = document.querySelector("body");

btn.addEventListener("click", () => {
    pagina.scrollIntoView({behavior: "smooth", block: "start"});
})

window.addEventListener("scroll",()=>{
    if(window.scrollY >= 50){
        btn.classList.remove("oculto");
    }
    else{
        btn.classList.add("oculto");
    }
})

//Slider de imagenes
let imagenes = [
    "./assets/img/hojas.jpg",
    "./assets/img/cielo.jpg",
    "./assets/img/rojo.jpg"
];

let banner= document.querySelector(".banner__img");
let btnSiguiente = document.querySelector(".banner__arrowRight");
let btnAnterior = document.querySelector(".banner__arrowLeft");

btnSiguiente.addEventListener("click", ()=>{
    let imagenActual = banner.getAttribute("src");
    let indiceActual = imagenes.indexOf(imagenActual);

    if(indiceActual < imagenes.length-1){
        banner.setAttribute("src", imagenes[indiceActual+1]);
    }
});

btnAnterior.addEventListener("click", ()=>{
    let imagenActual = banner.getAttribute("src");
    let indiceActual = imagenes.indexOf(imagenActual);

    if(indiceActual > 0){
        banner.setAttribute("src", imagenes[indiceActual-1]);
    }
});
