let miVar:string = "Hola mundo";
console.log(miVar);



const per1 = {
    firstName1:"joan",
    lastName1:"doe",
    age: 50
};


let {firstName1, lastName1} =per1;
console.log(firstName1, ' ', lastName1);

let miNom = "Marc";
let [a1, a2, a3, a4, a5]:any = miNom;
console.log(a1, a2, a3, a4, a5);
console.log(a3);

const frutas = ["banana", "apple", "manzana"];
let [fruta1, fruita2] = frutas;
console.log(fruta1, fruita2);

let [frutaA,,,frutab] = frutas;
console.log(frutaA, fruita2);

class Personey {
    nombrey: string;
    edady: number;
    constructor(nombrey: string, edady: number) {
        this.nombrey = nombrey;
        this.edady = edady
    }
}

let peronajey1 = new Personey('Alberto', 30);
console.log(peronajey1.edady);
console.log(peronajey1.nombrey);
//personaje1.edad = 'Hola';
peronajey1.edady= 24