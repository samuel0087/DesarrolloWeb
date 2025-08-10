window.addEventListener("load",()=>{
    //LocalStorage

    //Comprobar disponibilidad

    if(typeof(Storage) !== "undefined"){
        console.log("localstorage disponible");
    }
    else{
        console.log("LocalStorage no disponible");
    }

    //Guardar datos

    localStorage.setItem("curso", "+100 proyectos de desarrollo web");
    localStorage.setItem("enlace", "victorroblesweb.es/100-proyectos");


    //Sacar datos
    console.log(localStorage.getItem("curso"));
    console.log(localStorage.getItem("enlace"));

    //Guardar objetos
    let animal = {
        especie: "Elefante",
        nombre: "Estanpi",
        color: "Gris"
    };

    localStorage.setItem("animal", JSON.stringify(animal));

    //Recuperar objeto

    let animalJS = JSON.parse(localStorage.getItem("animal"));

    console.log(animalJS);

    //Eliminar elementos
    localStorage.removeItem("animal");



    //vaciar storage

    document.querySelector("#vaciar").addEventListener("click", ()=>{
        localStorage.clear();
    })

})

