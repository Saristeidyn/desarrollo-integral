// Funciones de primer orden, funciones que pueden ser asignadas a variables
function sum(a, b) {
    return a + b;
}
var resultado = sum(2, 3);
console.log(resultado);
var fSum = sum;
resultado = fSum(2, 3);
console.log(resultado);
// Funciones de orden superior, funciones que reciben funciones como argumentos
function operation(fn, a, b) {
    console.log("Entro a operation");
    console.log('Resultado Operation:', fn(a, b));
}
console.log(operation(sum, 5, 3));
//Funciones arrow, funciones anonimas que se pueden asignar a variables
var funcionAnonima = function () {
    console.log("Entro a funcionAnonima");
};
funcionAnonima();
// Entonces funcionAnonima es una variable o es una función? 
console.log('funcionAnonima:', funcionAnonima);
var funcionAnonima2 = function () {
    console.log("Entro a funcionAnonima2");
};
funcionAnonima2();
var funcionAnonima3 = function () { return console.log("Entro a funcionAnonima3"); };
funcionAnonima3();
//Funciones flecha con parametros
console.log(operation(function (a, b) { return a * b; }, 5, 5));
//Funciones flecha con cuerpo de funcion
console.log(operation(function (a, b) {
    var c = a * b;
    return c * 2;
}, 5, 5));
//foreach
var names = ['Hugo', 'Paco', 'Luis'];
names.forEach(function (name) { return console.log(name); });
names.forEach(function (name) { return console.log(name.toUpperCase()); }); // forEach no modifica el arreglo original
console.log(names);
names.sort(); // Sort es un metodo mutable que modifica el arreglo original
console.log(names);
// Usando template strings
function saludo(nombre) {
    return "Hola ".concat(nombre);
}
console.log(saludo("Jorge"));
//Void
function advertencia() {
    console.log("Cuidado!");
}
advertencia();
//Never, no retorna nada y lanza una excepción
function error(mensaje) {
    throw new Error(mensaje);
}
//error("Error crítico");
//Parametros opcionales, se pueden asignar valores por defecto o no asignar valores
function saludo2(nombre) {
    if (nombre) {
        return "Hola ".concat(nombre);
    }
    else {
        return "Hola";
    }
}
console.log(saludo2());
console.log(saludo2("Jorge"));
//Tipo funcion, 
function suma(a, b) {
    return a + b;
}
var miFuncion;
// Asi se asigna una funcion a una variable de tipo funcion
miFuncion = suma;
console.log(miFuncion(2, 3));
// Tipo explicit 
var primerNombre = "Dylan";
// Tipo inferido implicit
var primerNombre2 = "Dylan";
function operacion(a, b, operacion) {
    if (operacion === 'suma') {
        return a + b;
    }
    else {
        return a - b;
    }
}
console.log(operacion(2, 3, 'suma'));
console.log(operacion(2, 3, 'resta'));
//console.log(operacion(2, 3, 'multiplicacion')); // Error de compilación
