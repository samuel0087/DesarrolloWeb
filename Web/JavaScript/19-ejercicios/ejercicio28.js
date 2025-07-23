/**
 * Ejercicio 28:
 * 
 * 1) Pedir 6 numeros por pantalla y colocarlos en un array.
 * 2)Muestra el array por consola y en el cuerpo de la pagina.
 * 3)Ordenarlo y mostrarlo
 * 4)Invertir el orden del array y volverlo a mostrar.
 * 5)Mostrar cuantos elementos de un array.
 * 6)Buscar uno de los valores que ha metido el usuario, indicar
 *  si existe en el array y y su indice.
 * 7)Refactorizar todo lo posible suando funciones.
 * 
 */

//carga un array de la longitud deseada
function cargarArray(longitud){
    let listaNumeros = Array.from({length: longitud}, () => {
        return parseInt(prompt("Ingrese un numero"));
    });

    return listaNumeros;
}

//Mostar por pantalla y consola
function mostrar(lista, consola = true, pantalla = true){
    let mensaje = `La lista de numeros es: ${lista.join(', ')}`;

    if(consola){
        console.log(mensaje);
    }

    if(pantalla){
        document.write(`<h1>${mensaje}</h1>`)
    }
}

//Ordenar array
function ordenarArray(lista, revertir = false){
    if(revertir){
        lista.sort((a, b) =>{
            return b - a;
        });

        //tambien para revertir correctamente se puede utilizar => .reverse()
    }
    else{
        lista.sort((a, b) =>{
            return a - b;
        });

    }
}

const numeros = cargarArray(6); //Crear un vector de 6 numeros

mostrar(numeros);       //mostar por pantalla  => punto 2

// ordenarlo y mostrarlo => punto 3

ordenarArray(numeros);
mostrar(numeros);

//Revertirlo y volverlo a mostrar => punto 4
//ordenarArray(numeros, true);
numeros.reverse();
mostrar(numeros);

document.write(`<h3>Numeros de elementos en el array: ${numeros.length}</h3>`)

const numBuscado = parseInt(prompt("¿Que numero deseas buscar?"));

if(numeros.includes(numBuscado)){
    document.write(`Numero buscado es el n° ${numBuscado}. Posicion ${numeros.indexOf(numBuscado)}`);
}
else{
    alert("No se encontro numero en la lista ingresada");
}

