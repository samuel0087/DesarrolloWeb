/*
En JavaScript, una constante (o "const") es una variable cuyo valor no puede ser modificado una vez que se ha asignado. 
Se utiliza la palabra clave const para declarar una constante, a diferencia de var o let que se utilizan para variables que pueden cambiar.
 Las constantes son de solo lectura y se deben inicializar al momento de declararlas. 

 Características principales de las constantes en JavaScript:
Inmutabilidad:
El valor de una constante no puede ser cambiado después de su asignación inicial. 

Declaración con const:
Se declara una constante utilizando la palabra clave const en lugar de var o let. 

Alcance de bloque:
Las constantes, al igual que las variables declaradas con let, tienen un alcance de bloque.
 Esto significa que son accesibles solo dentro del bloque (generalmente entre llaves {}) donde fueron declaradas. 

Solo lectura:
Una vez que se ha asignado un valor a una constante, no se puede reasignar otro valor. 

Inicialización obligatoria:
Se debe asignar un valor a la constante al momento de declararla. No se permite declarar una constante sin inicializarla. 

Referencia inmutable:
Aunque el valor de una constante no puede cambiar, si la constante se refiere a un objeto, las propiedades de ese objeto sí pueden ser modificadas,
 a menos que el objeto también sea declarado con const. 

 */

 const PI = 3.14159;
//  PI = 3.14; // Esto generaría un error porque no se puede reasignar el valor de una constante
const nombre = "Juan";
// nombre = "Pedro"; // Esto también generaría un error

const persona = {
    nombre: "Ana",
    edad: 30
};
persona.edad = 31; // Esto es válido, se modifica una propiedad del objeto
// persona = {nombre: "Carlos", edad: 40}; // Esto generaría un error, se intenta reasignar la constante