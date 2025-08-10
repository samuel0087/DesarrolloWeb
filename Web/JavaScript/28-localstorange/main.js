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
})