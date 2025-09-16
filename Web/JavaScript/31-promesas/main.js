//Promesas
const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        let correcto = true;

        if(correcto){
            let miObjeto = {
                nombre: "El justiciero",
                genero: "Accion",
                anio: 2020
            }

            resolve(miObjeto);
        }
        else{
            reject("No se consiguio mi objeto");
        }

    }, 3500)
})

miPromesa
    .then(result => {
        console.warn(result);
    })
    .catch(reject  =>{
        console.error(reject);
    })

console.log("Hollaa");