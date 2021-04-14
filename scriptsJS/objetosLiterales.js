/*
TRABAJANDO CON OBJETOS LITERALES
*/

// Objeto dentro de una variable
let cuenta = {
    numerodecuenta : 0,
    saldo : 0,
    titular : 0,
    deposito : function(cantidadDinero){
        this.saldo = this.saldo + cantidadDinero //variable acumuladora
        console.log(`Se realizo un deposito.\nEl saldo Actual es: ${this.saldo}`)
    },
    extraccion : function(cantidadDinero){
        if (cantidadDinero < this.saldo){
            this.saldo = this.saldo - cantidadDinero
            console.log(`Se realizo una extraccion.\nEl saldo actual es: ${this.saldo}`)
        }else{
            console.log(`Fondos insuficientes.`)
        }
    }
}

// Usando una funcion creadora
function CrearCuenta(numerodecuenta, saldo, titular){
    this.numerodecuenta = numerodecuenta,
    this.saldo = saldo,
    this.titular = titular,
    this.deposito = function(cantidadDinero){
        this.saldo = this.saldo + cantidadDinero //variable acumuladora
        console.log(`Se realizo un deposito.\nEl saldo Actual es: ${this.saldo}`)
    },
    this.extraccion = function(cantidadDinero){
        if (cantidadDinero <= this.saldo){
            this.saldo = this.saldo - cantidadDinero;
            console.log(`Se realizo una extraccion.\nEl saldo actual es: ${this.saldo}`)
        }else{
            console.log(`Fondos insuficientes.`)
        }
    }
}

// Se deposita 100 y se extrae 50 en el objeto cuenta
console.log('==========\nINICIO VARIABLE\n==========')
console.log(cuenta);
cuenta.deposito(100);
cuenta.extraccion(50);
console.log('==========\nFIN VARIABLE\n==========')
// Ahora usare la funcion creadora para Abrir una nueva cuenta para posteriormente depositar 500 y extraer 250
console.log('==========\nINICIO FUNCION\n==========')
let nicko = new CrearCuenta(1234, 1000000, "NickoAcu");
console.log(nicko);
nicko.deposito(500);
nicko.extraccion(250);
console.log('==========\nFIN FUNCION\n==========')