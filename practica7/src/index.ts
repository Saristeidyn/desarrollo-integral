function sum(a: number, b: number): number {
    return a + b;
}

let resultado = sum(3, 2);
console.log(resultado);
const fSum = sum(5, 80);


console.log(fSum);

// Function de orden superior

//Functiones arrow

let sumArrow = summ(a: number, b:number):number => {
    return a + b;
}

//Function anonima
 
let functionAnonima = function() {
    console.log("hello world");
}
functionAnonima();

//Funcion anonima arrow
let functionAnonimaArrow = () => {
    console.log("hola mundo");
}

function functionAnonimaArrow();

//console.log(operations(a:number, b:number):number => a * b)






function saludo(nombre:string): string {
    return `Hola ${nombre}`;
}

function