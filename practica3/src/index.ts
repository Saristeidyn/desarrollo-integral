let normal: any = 'hola';
normal = 10;
normal = true;
let usuario:any = 20;
console.log(normal);

let nombre:string = 'Juan';
nombre = 'Juan Carlos';

console.log(nombre);

let value: any;
console.log(value);

value = true;
value = 10;
value = 'hola';
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
console.log(value);

let mivalor: any;
console.log("Tipo unknown", mivalor);

let value1: unknown = mivalor;
let value2: any = mivalor;
// let value3: boolean = mivalor; //Error
// let value4: number = mivalor; //Error

const edad:number = 18;
console.log("Edad", edad);
console.log("Edad" + edad);

const sueldo:number = 1.1234;
const total: number = Number('5678');

console.log("Sueldo", sueldo);
console.log("Total", total);

const personaje:string = 'El chavo';
const p2:string = 'Don Ramon';
const p3:string = `Quico y ${personaje}`;
console.log(p3);

//const antiHero:string = 'Deadpool's house'; // error
const antiHero:string = "Deadpool\'s house";
console.log(antiHero);
console.log(antiHero.toLocaleUpperCase());

let vengador:any;
vengador = 'Dr. Strange';
vengador = 150.55;
console.log(vengador.toFixed(1));
console.log((vengador as number).toFixed(1));
console.log(<number>vengador.toFixed(1));

let personas:string[] =['Carlos', 'Juan', 'Pedro'];
console.log(personas);
console.log(personas[0]);
console.log(personas[3]);
console.log(personas[-1]);
personas.push('Maria');
console.log(personas);

let numeros: number[] = [1, 2, 3, 4, 5];
let numeros2:Array<number> =[6, 7, 8, 9, 10];
console.log(numeros, numeros2);

let numerosCadena:any = document.getElementById("numeros");
for (let i:number = 0; i < numerosCadena.length; i++) {
    numerosCadena.innerHTML += numeros[i] + ", ";
}

let miArray:(string|number) [] = ['carlos', 24, 'sar', 20];
console.log(miArray);

// i dont understand this sorry teacher. I'll get there
let htmlContent = '';
const miArray6 = [
    '<img src="img/img1.png" alt="Image 1">',
    '<img src="img/img2.png" alt="Image 2">'
];

miArray6.forEach(item => {
    if (typeof item === 'string' && item.includes('<img')) {
        const figureHTML = `
            <figure>
                ${item}
                <figcaption>Frutas de fondo</figcaption>
            </figure>
        `;
        htmlContent += figureHTML + '<br>';
    } else {
        console.log(item);
    }
});