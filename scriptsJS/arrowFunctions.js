/*
ARROW FUNCTIONS

DECLARACION Y ESTRUCTURA
*/
// Una funcion simple para sumar dos numeros.
function sumarFunction (a, b) { return a + b };

console.log(sumarFunction(2, 2));

// Ahora veamos la versión reducida de esa misma funcion, al transformarla en una funcion arrow
let sumarArrow = (a, b) => a + b;

console.log(sumarArrow(4, 4));

/*
NOMBRE DE UNA FUNCION ARROW

Las funciones arrow son siempre anónimas. Es decir, que no tienen nombre como las funciones normales.
    (a, b) => a + b;
Si queremos nombrarlas, es necesario escribirlas como una funcion expresada.
Es decir, asignarla como valor de una variable.
    let sumar = (a, b) => a + b;
De ahora en más poremos llamar a nuestra función por su nuevo nombre.

PARÁMETROS DE UNA FUNCION ARROW

Usamos paréntesis para indicar los parámetros. Si nuestra función no recibe parámetros,
debemos escribirlos igual.

Una particularidad de este tipo de funciones es que si se recibe un único parámetro,
podemos prescindir de los parentesis.
*/
let doble = a => a * 2;

console.log(doble(8));

/*
LA FLECHA DE UNA FUNCION ARROW =>

La usamos para indicarle a JavaScript que vamos a escribir una función
(reemplaza a la palabra reservada 'function').

Lo que está a la izquierda de la flecha será la entrada de la función
(los parámetros) y lo que está a la derecha, la lógica (y el posible retorno).

Las funciones arrow reciben su nombre por el operador =>.
Si lo miramos con un poco de imaginacion, se parece a una flecha.
En ingles suele llamarse fat arrow (flecha gorda) para diferenciarlo de la flecha simple ->.

CUERPO DE UNA FUNCION ARROW

Como ya vimos, si la función tiene una sola línea de código, y esta misma es la que hay que retornar,
no hacen falta las llaves ni la palabra reservada return.

De lo contrario, vamos a necesitar utilizar ambas.
Eso normalmente pasa cuando tenemos más de una línea de código en nuestra función.
*/

let esMultiplo = (a, b) => {
    let resto = a % b;
    return resto == 0;
}

console.log(esMultiplo(8, 2));

// MAS EJEMPLOS

// Función arrow sin parametros Requiere los paréntesis para iniciarse
// Al tener una sola línea de código, y que esta misma sea la que queremos retornar, el return queda implícito.
let saludo = () => 'Hola Mundo!';

// Función arrow con un único parámetro (no necesitamos los paréntesis para indicarlo) y con un return implícito.
let dobleDe = numero => numero * 2;

// Función arrow con dos parámetros. Necesita de los paréntesis y tiene un return implícito.
let sumando = (a, b) => a + b;

// Función arrow sin parámetros y con un return explícito
// En este caso hacemos uno de las llaves y del return ya que
// la lógica de esta funcion se desarrolla en más de una línea de código.
let horaActual = () => {
    let fecha = new Date();
    return fecha.getHours() + ':' + fecha.getMinutes();
}