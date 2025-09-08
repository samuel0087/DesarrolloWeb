//FETCH (ajax)

//sacar informacion de un backend de manera asincrona

 fetch("https://reqres.in/api/users/2",{
    method: "GET",
    headers: {
        "Content-type": "application/json",
        "x-api-key" : "reqres-free-v1"}
 })
        .then(response => response.json())
        .then(data => {
            console.log(data.data);
            mostrarUsuario(data.data);
        })
        .catch(error => {
            console.log("error al pedir los datos al servidor", error);
        })

function mostrarUsuario(user){
    let caja = document.querySelector(".card");

    caja.innerHTML = `
    <img class="card__img" src="${user.avatar}" >
    <h2 class="card__title">${user.first_name}</h2>
    `;
}

//guardar informacion
let userSave = {
    name: "Samuel Tomas Medina",
    job: "Administrativo en produccion"
}

fetch("https://reqres.in/api/users",{
    method: "POST",
    headers:{
        "Content-type": "application/json",
         "x-api-key" : "reqres-free-v1"
    },
    body: JSON.stringify(userSave)
})
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.log(error);
})


//Sintaxis de promesas con async y await

async function sacarUsuarios(){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();

        data.forEach(user => {
            console.log(user);
        });
    }
    catch(error){
        console.warn("Error al conseguir losta" + error);
    }
}

sacarUsuarios();

