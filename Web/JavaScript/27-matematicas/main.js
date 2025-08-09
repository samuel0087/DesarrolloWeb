window.addEventListener("load", ()=>{

    //Numero PI
    console.log(Math.PI);

    //Numero Euler
    console.log(Math.E);

    //Redondear al entero mas cercano
    console.log(Math.round(7.6));

    //Redondear a la baja
    console.log(Math.floor(7.9991));

    //Redondear al alza
    console.log(Math.ceil(7.01));

    //Numeros al azar
    console.log(Math.round(Math.random()*10));

    //Valor absoluto
    console.log(Math.abs(-27.9));

    //Potencia
    Math.pow(7, 2); //7 al cuadrado

    //Raiz
    console.log(Math.sqrt(7).toFixed(2));

    //maxixmo y minimo
    console.log(Math.max(1,3,6,3,2,66,32));
    console.log(Math.min(44,5,88,55,35,102));

})