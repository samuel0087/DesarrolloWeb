//variables
/**
 * En programación, una variable es un espacio de memoria nombrado donde se almacena un valor que puede cambiar durante la ejecución de un programa.
 *  Esencialmente, es como una caja con una etiqueta (el nombre de la variable), donde puedes guardar diferentes tipos de datos (números, texto, etc.)
 *  y modificar su contenido cuando sea necesario. 
 * 
    En detalle:
    Nombre:
    Cada variable tiene un nombre único que la identifica, permitiendo referirse a su contenido en el código. 

    Valor:
    El valor es el dato que se almacena en la variable en un momento dado. 

    Tipo de dato:
    Las variables pueden almacenar diferentes tipos de datos (enteros, decimales, texto, etc.). 

    Modificable:
    Una de las principales características de una variable es que su valor puede ser cambiado a lo largo de la ejecución del programa. 

    Ejemplo:
    Imagina que estás programando un juego y necesitas llevar la cuenta de los puntos de un jugador. Puedes crear una variable llamada puntos para almacenar ese valor.
     Al principio, la variable podría tener un valor de 0, pero a medida que el jugador gana puntos, el valor de la variable puntos puede ser actualizado. 
    En resumen, las variables son fundamentales en la programación porque permiten:
    Almacenar y manipular datos.
    Hacer que el programa sea dinámico y capaz de adaptarse a diferentes situaciones.
    Realizar cálculos y tomar decisiones basadas en los valores almacenados

    Existen tres formas principales de declarar variables en JavaScript: 
        var: Tiene alcance de función o global, y puede ser redeclarada y reasignada.
        let: Tiene alcance de bloque, y puede ser reasignada, pero no redeclarada dentro del mismo bloque.
        const: Tiene alcance de bloque, y no puede ser reasignada ni redeclarada, por lo que se usa para valores constantes.
 */

    // var nombre = "Samuel";      
    // let apellido = "Medina";
    // const nacionalidad = "Argentina";

let heroe = "Capitan America";
let universo = "Marverl";
let edad = 80;

let heroe_universo = heroe + " es un superheroe del universo " + universo;

heroe = "Batman";
universo = "DC";
edad = 30;

console.log(heroe, universo, edad);
alert(heroe_universo);