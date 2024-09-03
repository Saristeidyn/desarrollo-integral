//Tuplas
var tupla = ['Lucas', 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
var ourTuple = ['Lucas', 23, true];
console.log('Nombre:' + ourTuple[0]);
console.log('Edad:' + ourTuple[1]);
//ternario
var casado = ourTuple[2] ? true : false;
console.log('Casado: ' + casado);
var ourTuple2 = [23, false, 'Lucas'];
ourTuple2 = [23, false, 'Lucas'];
console.log(ourTuple2);
var ourReadonlyTuple = [5, true, 'Lucas'];
//ourReadonlyTuple.push('Cadena'); //Error
//ourRedonlyTuple[0] = 30; //Error
console.log(ourReadonlyTuple);
var graph = [55.2, 41.3];
console.log(graph);
console.log(graph[0]);
//Deconstruction de varables
var person = {
    firstName: "juan",
    lastName: "smith",
    age: "18"
};
//let nombrex:string = person.firstName;
var firstName = person.firstName, lastName = person.lastName, age = person.age;
console.log(firstName);
// Fibonacci Series
function fibonacciSeries(n) {
    var series = [0, 1];
    for (var i = 2; i < n; i++) {
        var nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }
    return series;
}
var fibSeries = fibonacciSeries(10);
console.log(fibSeries);
