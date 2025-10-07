window.addEventListener("load", ()=>{
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
})