"use strict";
//Tuplas
let tupla = ['Lucas', 23];
console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);
let ourTuple = ['Lucas', 23, true];
console.log('Nombre:' + ourTuple[0]);
console.log('Edad:' + ourTuple[1]);
//ternario
let casado = ourTuple[2] ? true : false;
console.log('Casado: ' + casado);
let ourTuple2 = [23, false, 'Lucas'];
ourTuple2 = [23, false, 'Lucas'];
console.log(ourTuple2);
let ourReadonlyTuple = [5, true, 'Lucas'];
//ourReadonlyTuple.push('Cadena'); //Error
//ourRedonlyTuple[0] = 30; //Error
console.log(ourReadonlyTuple);
const graph = [55.2, 41.3];
console.log(graph);
console.log(graph[0]);
//Deconstruction de varables
const person = {
    firstName: "juan",
    lastName: "smith",
    age: "18"
};
//let nombrex:string = person.firstName;
let { firstName, lastName, age } = person;
console.log(firstName);
