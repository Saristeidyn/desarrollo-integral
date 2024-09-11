//Tuplas

let tupla = ['Lucas', 23];

console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);

let ourTuple:[String, Number, boolean] = ['Lucas', 23, true];

console.log('Nombre:' + ourTuple[0]);
console.log('Edad:' + ourTuple[1]);

//ternario

let casado :boolean = ourTuple[2] ? true : false;
console.log('Casado: ' + casado);

let ourTuple2:[number, boolean, string] = [23, false,'Lucas'];
ourTuple2 = [23, false,'Lucas'];
console.log(ourTuple2);

let ourReadonlyTuple: [number,boolean,string] = [5, true, 'Lucas'];

//ourReadonlyTuple.push('Cadena'); //Error
//ourRedonlyTuple[0] = 30; //Error
console.log(ourReadonlyTuple);

const graph: [x:number, y:number] = [55.2, 41.3];
console.log(graph);
console.log(graph[0]);

//Deconstruction de varables
const person = {
    firstName: "juan",
    lastName: "smith",
    age: "18"
};

//let nombrex:string = person.firstName;
let {firstName, lastName, age} = person;
console.log(firstName);



// Fibonacci Series
function fibonacciSeries(n: number): number[] {
    const series: number[] = [0, 1];

    for (let i = 2; i < n; i++) {
        const nextNumber = series[i - 1] + series[i - 2];
        series.push(nextNumber);
    }

    return series;
}

const fibSeries = fibonacciSeries(10);
console.log(fibSeries);