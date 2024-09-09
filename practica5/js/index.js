var miVar = "Hola mundo";
console.log(miVar);
var per1 = {
    firstName1: "joan",
    lastName1: "doe",
    age: 50
};
var firstName1 = per1.firstName1, lastName1 = per1.lastName1;
console.log(firstName1, ' ', lastName1);
var miNom = "Marc";
var a1 = miNom[0], a2 = miNom[1], a3 = miNom[2], a4 = miNom[3], a5 = miNom[4];
console.log(a1, a2, a3, a4, a5);
console.log(a3);
var frutas = ["banana", "apple", "manzana"];
var fruta1 = frutas[0], fruita2 = frutas[1];
console.log(fruta1, fruita2);
var frutaA = frutas[0], frutab = frutas[3];
console.log(frutaA, fruita2);

class Personey {
    nombrey: string;
    edady: number;
    consttructor (nombrey: string, apellido: string, edady: number) {
        this.nombrey = nombrey;
        this.edady = edady;
        this.apellido= apellido
    }
};


var peronajey1 = new Personey('Alberto', 30);
console.log(peronajey1.edady);
console.log(peronajey1.nombrey);
//personaje1.edad = 'Hola';
peronajey1.edady = 24;
console.log(peronajey1,edady)

p
