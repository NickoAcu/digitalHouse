
/*
ARRAYS BASICOS
En esta clase pudimos practicar con los metodos basicos de los arrays
JOIN, POP, PUSH, SHIFT, UNSHIFT
*/

/*
ARRAYS JOIN:

Tenemos un array con palabras sueltas que, juntas, forman una gran frase.
Queremos, utilizando un método de array sobre la arrayFrase,
convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.

Ejemplo:
*/

let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
];


let fraseNueva = arrayFrase.join(' '); // Se han concatenado todos los elementos del array en un string separados por el argumento que se encuentra en JOIN()


console.log(fraseNueva);

/*
ARRAYS POP

Para este ejercicio contamos con el array estudiantes, en donde, en cada índice,
almacena un objeto con las propiedades nombre, promedio y curso.
Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.
Para eso debemos, utilizando un método de array,
guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.

*/

let estudiantes = [
    {
      nombre: "Alvaro",
      promedio: 9,
      curso: "Android"
    },
    {
      nombre: "Daniel",
      promedio: 6,
      curso: "Full Stack"
    },
    {
      nombre: "Alexis",
      promedio: 3,
      curso: "iOS"
    }
];
console.log(estudiantes);


let alumnoEgresado = estudiantes.pop(); // Se extrae el ultimo alumno y se almacena en la variable alumnoEgresado


console.log(alumnoEgresado.nombre + ' ha egresado');
console.log(estudiantes);


/*
ARRAYS PUSH

Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
Nuestro trabajo será agregar de a un alumno por vez, utilizando algún método de array.
Los valores de cada uno son:

nombre: Juan
promedio: 5
curso: iOS
------------------
nombre: Miguel
promedio: 2
curso: Android

*/
console.log("Se inscribieron Juan y Miguel");


estudiantes.push({nombre : 'Juan', promedio : 5,  curso : 'iOS'}); //Se añadio el estudiante Juan
estudiantes.push({nombre : 'Miguel', promedio : 2, curso : 'Android'}) // Se añadio el estudiante Miguel


console.log(estudiantes)

/*

ARRAYS SHIFT

Se dio de baja un alumno.
Tenemos que dar de baja al primer estudiante y queremos sacarlo del array estudiantes. Para eso, debemos crear una variable llamada alumnoDeBaja y, utilizando un método de array, almacenar en ella a ese primer estudiante.

*/

console.log("El primer estudiante sera dado de baja")


let alumnoDeBaja = estudiantes.shift(); // Extrae el primer elemento del array


console.log(alumnoDeBaja.nombre + " ha sido dado de baja.");

console.log(estudiantes)

/*

ARRAYS UNSHIFT

Tenemos la tarea de reintegrar a dos estudiantes que se habían registrado al principio de todo, se dieron de baja, ¡pero volvieron! Y para que no pierdan su lugar privilegiado queremos, utilizando un método de array, agregar al inicio del mismo a cada estudiante (de a uno a la vez).

Los datos que hay que agregar de cada uno son:

nombre: "Mariana",
promedio: 9,
curso: "Full Stack"
-------------------------
nombre: "Francisco",
promedio: 2,
curso: "Android"

*/

console.log("Mariana y Fracisco fueron reincorporados");


estudiantes.unshift({nombre : "Mariana", promedio : 9, curso : "Full Stack"});
estudiantes.unshift({nombre : "Francisco", promedio : 2, curso : "Android"});

console.log(estudiantes)