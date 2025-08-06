//Objetos literales
//Es una estructura de datos que agrupa propiedades y metodos bajo un mismo nombre


let perro = {
    nombre: "Lola",
    color: "Blanco",
    edad: 5,
    macho: false,
    caracteristicas: {
        cantidadPatas: 4,
        cola: "larga",
        ojos: "marrones"
    },
    juguetes: ["Hueso de cuero", "Patito de ule", "Muñeco de Batman"],
    getJuguetes: function(){
        console.log(`Juguetes de ${this.nombre}`);
        this.juguetes.forEach(juguete => {
            console.log(juguete);
        });
        console.log("------FIN DE LA LISTA-----");
    }
}



//Acceder a valores del objeto
//Notacion de puto (mas utilizada)

console.info(perro.nombre);
console.info(perro.macho);

//Notacion de corchetes
console.info(perro.color);
console.info(perro.edad);

//Metodos
perro.getJuguetes();

//Acceder a objetos dentro de objetos
console.log("Cantidad de patas: " + perro.caracteristicas.cantidadPatas);


//Eliminar una propiedad
delete perro.macho;

/**
 * Metodos de un objeto
 * Un objeto no solo se limita a la agrupacion de claves valores
 * tambien es posible incorporar metodos de la siguiente manera:
 * 
 */

let gato = {
    nombre: "Tomm",
    color: "Blanco y negro",
    maullar: function(){
        return (`${this.nombre} puede maullar`);
    }
}

console.warn(gato.maullar());

//Insercion de nuevos campos al objeto
//Para agregar una nueva propiedad al objeto solo basta
//con mencionar el objeto seguido de la propiedad y el nuevo valor
//Ej: objeto.nuevaPropiedad = valor

gato.edad = 5;
console.warn(gato.edad);

//JSON
 