const _ = require('lodash');
 
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
console.log(_.chunk(array, 7));
 
let arreglo = ['Juan','','Pedro',0,'Ana',false,'Jose','Carlos',''];
console.log(_.chunk(arreglo, 2));
console.log(_.compact(arreglo));
 
let array1 = ['Superman', 'Batman', 'Flash'];
let array2 = ['Thor', 'Ironman', 'Spiderman'];
console.log(_.concat(array1, array2));
 
let array3 = ['El Chavo', 'El Chapulin Colorado', 'El Doctor Chapatín'];
let array4 = ['El Chavo','El Chompiras', 'El Botija', 'El Peterete'];
console.log(_.difference(array3, array4));
 
let array5 = ['a', 'b', 'c', 'd', 'e','f','g','h','i','j'];
// drop elimina los primeros n elementos del array
console.log(_.drop(array5, 3));
 
const numeroAleatorio = _.random(0, 100);
console.log(numeroAleatorio);
 
const saludar = () => {
    console.log('Hola Mayito, ¿Cómo estás?');
}
 
const saludarMayito = _.once(saludar);
 
saludarMayito();
saludarMayito();
saludarMayito();
 
const users = [
    { usuario: 'Mayito', edad: 25 },
    { usuario: 'Juanito', edad: 30 },
    { usuario: 'Pedrito', edad: 35 },
    { usuario: 'Pablito', edad: 40 },
    { usuario: 'Carlitos', edad: 45 }
];
 
const sortedUsers = _.sortBy(users, ['edad'],['asc']);
console.log(sortedUsers);
 
const obtieneNumero = () => {
    return _.random(0, 100);
}
 
let result = _.times(50, obtieneNumero);
console.log(result);
 
// Reto 1
// Crear un arreglo con 100 números aleatorios y mostrar los números pares
// y los números impares en arreglos diferentes
 
const _ = require('lodash');

// Generar un arreglo con 100 números aleatorios entre 0 y 100
let randomNumbers = _.times(100, () => _.random(0, 100));

// Filtrar los números pares e impares
let evenNumbers = _.filter(randomNumbers, num => num % 2 === 0);
let oddNumbers = _.filter(randomNumbers, num => num % 2 !== 0);

console.log("Números pares:", evenNumbers);
console.log("Números impares:", oddNumbers);

//Reto 2
// Crear un arreglo con 100 números aleatorios y mostrar los números primos
// y los números no primos en arreglos diferentes
 // Función para verificar si un número es primo
const esPrimo = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Generar un arreglo con 100 números aleatorios entre 0 y 100
let randomNumbers2 = _.times(100, () => _.random(0, 100));

// Filtrar los números primos y no primos
let primeNumbers = _.filter(randomNumbers2, esPrimo);
let nonPrimeNumbers = _.filter(randomNumbers2, num => !esPrimo(num));

console.log("Números primos:", primeNumbers);
console.log("Números no primos:", nonPrimeNumbers);

//Reto 3
// Crear un arreglo de nombres y mostrar los nombres que empiecen con la letra 'A'  
// y los nombres que no empiecen con la letra 'A' en arreglos diferentes
 // Arreglo de nombres
let names = ['Ana', 'Pedro', 'Alberto', 'Juan', 'Alicia', 'María', 'Andrés', 'Carla'];

// Filtrar los nombres que empiezan con 'A'
let namesStartingWithA = _.filter(names, name => _.startsWith(name, 'A'));

// Filtrar los nombres que no empiezan con 'A'
let namesNotStartingWithA = _.filter(names, name => !_.startsWith(name, 'A'));

console.log("Nombres que empiezan con 'A':", namesStartingWithA);
console.log("Nombres que no empiezan con 'A':", namesNotStartingWithA);
