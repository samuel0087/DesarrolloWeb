//Programacion Orientada a Objetos

//Molde

class Gato{
    constructor(nombre = "pepe", raza="caniche", color="negro" ){
        //Propiedades o atributos(caracteristicas)
        this.nombre = nombre;
        this.raza = raza;
        this.color = color;
    }

    //Metodos (acciones)
    maullar(){
        console.log(`${this.nombre} sabe maullar`);
    }

    //setColor(color){this.color;}

    set guardarColor(color){
        this.color = color;
    }

    get sacarColor(){
        return this.color;
    }

    static saludar(){
        alert("miau miau");
    }
}



class GatoEspecial extends Gato{
    constructor(nombre, raza, color, habilidad){
        super(nombre, raza, color);
        this.habilidad = habilidad;
    }

    getHabilidad(){
        return this.habilidad;
    }

    setHabilidad(habilidad){
        this.habilidad = this.habilidad;
    }

    ejecutar(){
        console.log(`${this.nombre} esta ${this.habilidad}`);
    }
}


let gatito = new Gato();
gatito.guardarColor = "azul";
console.log(gatito.sacarColor);

Gato.saludar();

let superGato = new GatoEspecial("pepe", "caniche", "negro" , "volando como flash");
superGato.ejecutar();