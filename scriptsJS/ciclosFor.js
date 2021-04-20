/*
Ciclos FOR
Los ciclos nos permiten repetir instrucciones de manera sencilla.
Podemos hacerlo una determinada cantidad de veces, o mientras se cumpla una condición.
*/

for (let vuelta = 1; vuelta <= 5; vuelta++){
    console.log('Dando la vuelta número ' + vuelta);
}

/*
ESTRUCTURA BÁSICA

-- Inicio (let vuelta = 1)
    Antes de arrancar el ciclo, se establece el valor inicial de nuestro contador.
-- Condicion (vuelta <=5)
    Antes de ejecutar el código en cada vuelta, se pregunta si la condicion resulta verdadera o falsa.
    Si es verdadera, continúa con nuestras instrucciones.
    Si es falsa, detiene el ciclo.
-- Modificador (vuelta++)
    incremento o decremento
    Luego de ejecutar nuestras instrucciones, se modifica nuestro contador de la manera que hayamos especificado.
    En este caso se lwe suma 1, pero podemos hacer la cuenta que queramos.
*/

/*
REPETIR COMO LORO

Vamos a programar una función que se comporte como un loro. Sí, todo lo que "oye", ¡lo repite!
La función debe llamarse loro y debe recibir como parámetro el texto y repetirlo 5 veces por consola.

*/

function loro(texto){
    for(let i = 0; i < 5; i++){
        console.log(texto);
    }
}

loro("Este es el resultado de la funcion loro");

/*
CONTANDO IMPARES

¡Vamos a crear una función interesante!
En este ejercicio nuestra tarea es completar la función noParesDeContarImparesHasta.
Esta función recibe un número X por parámetro y cuenta la cantidad de
números impares que hay desde el número 0 hasta el número X (inclusive) y luego retorna ese valor.
Para resolver la ejercitación debemos utilizar el for.
*/

function noParesDeContarImparesHasta(numero){
    let contadorDeImpares = 0;
    for(let i=0; i<=numero; i++){
        i%2 === 0 ? null : contadorDeImpares++
    }
    return contadorDeImpares;
}

console.log("Contando Impares");
console.log(noParesDeContarImparesHasta(10))