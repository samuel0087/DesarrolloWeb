window.addEventListener("load", ()=>{

    document.querySelector("#pequeño").addEventListener("click", ()=>{
        miWeb(250, 250);
    });

    document.querySelector("#mediano").addEventListener("click", ()=>{
        miWeb(450, 450);
    });

    document.querySelector("#grande").addEventListener("click", ()=>{
        miWeb(750, 750);
    });
    


    let miWeb = (alto, ancho) =>{
        window.open("https://www.pexels.com/search/dark/",
            "_blank",
            `width=${ancho}, height=${alto}`);
    };
})