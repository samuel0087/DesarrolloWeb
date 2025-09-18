// //Promesas
// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let correcto = true;

//         if(correcto){
//             let miObjeto = {
//                 nombre: "El justiciero",
//                 genero: "Accion",
//                 anio: 2020
//             }

//             resolve(miObjeto);
//         }
//         else{
//             reject("No se consiguio mi objeto");
//         }

//     }, 3500)
// })

// miPromesa
//     .then(result => {
//         console.warn(result);
//     })
//     .catch(reject  =>{
//         console.error(reject);
//     })

// console.log("Hollaa");

// //Promesas en cadena

function servirPizza(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Pizza servida"), 15000);
    });
}

function servirHamburguesa(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Hamburguesa servida"), 8000);
    });
}

function servirLomito(){
    return new Promise(resolve => {
        setTimeout(() => resolve("Lomito servido"), 5000);
    })
}
/*
// servirPizza()
//     .then(resultado => {
//         console.log(resultado);

//         return servirHamburguesa();
//     })
//     .then(resultado2 => {
//         console.log(resultado2);

//         return servirLomito();
//     })
//     .then(resultado3 => {
//         console.log(resultado3);
//     })
*/

//Asybc y await

async function servirPlatos(){
    try{
        let resultado1 = await servirPizza();
        console.log(resultado1);

        let resultado2 = await servirHamburguesa();
        console.log(resultado2);

        let resultado3 = await servirLomito();
        console.log(resultado23);
    }
    catch(error){
        console.log("Error: " + error);
    }
}


servirPlatos();