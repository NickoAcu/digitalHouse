/*
IF TERNARIO

El If Ternario a diferencia del if tradicionañ, no tiene llaves '{}' que encierren los bloques de codigo a ejecutar,
tampoco usa las palabras reservadas 'if' ni 'else'.
El if ternario se escribe de forma horizontal y solo cubre el escenario en que la condicion se cumple
y el escenario en que la condicion no se cumple.

ESTRUCTURA BÁSICA
condicion ? expresion para el 'true' : expresion para el 'false';

Es obligatorio incluir el codigo que se va a ejecutar cuando la condicion no se cumple, si no se requiere una
accion se puede poner un string vacio.

*/
let fruta = 'Manzana'

let resultado = fruta == 'Manzana'?'Me gustan las manzanas':'Esto no es una manzana';

console.log(resultado);

/*
SWITCH
Este condicional evaluara si la expresion es exactamente igual a alguno de los casos
que se encuentren dentro de las llaves, se pueden crear tantos casos como se estimen necesarios,
y la palabra reservada break se utiliza para que detenga la evaluacion del resto de los casos si es que los hay,
tambien se puede usar la palabra reservada default, para decirle al switch que hacer
en caso de que ninguna de las condiciones se cumpla
ESTRUCTURA BÁSICA
switch (expresion) {
    case caso1:
        console.log("se cumple el caso 1");
    break;
}


EJERCICIO CON SWITCH
El objetivo de este ejercicio es imprimir en consola un texto que ira variando segun
el dia que contenga la variable dia.
Para esto ya te presentamos un codigo hecho con 'if/else' que tendras que modificar y convertirlo a un switch,
manteniendo el mismo resultado.
*/
let dia = 'jueves'
function finDeSemanaConIf (dia) {	
	if (dia == 'viernes') {
    	console.log('buen finde')
	} else if (dia == 'lunes') {
    	console.log('buena semana')
	} else {
    	console.log('buen dia')
	}
}

// El resultado seria el siguiente.

function finDeSemana (dia) {	
	switch (dia){
		case "viernes":
		console.log("buen finde");
		break;
		case "lunes":
		console.log("buena semana");
		break;
		default:
		console.log("buen dia");
	}
}

finDeSemanaConIf();
finDeSemana();