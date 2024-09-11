// Enums
enum Color {
    Rojo,
    Verde,
    Azul
}
console.log(Color.Verde);
//Color.Rojo = 100;
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
//color1 = 20;
console.log('color1', color1);

enum CardinalDirections {
    North = "Northe",
    South = "South",
    East = "East",
    West = "West"
}

let direction:CardinalDirections = CardinalDirections.North;
console.log('direction:', direction);

enum StatusCodes {
    Success = 200,
    NotFound = 404,
    InternalServerError = 500
}

let statusCode:StatusCodes = StatusCodes.Success;
//statusCode = 50;
statusCode = StatusCodes.NotFound;
console.log('statusCode:', statusCode)

enum Volume {
    min = 1,
    medio = 5,
    max = 10
}

let volume:Volume = Volume.medio;
console.log('vulume:', volume);

//Reto: Definir una clase ENUM para su proyecto final
//Tienda en linea

enum metodoDePago {
    debito,
    credito,
    paypal,
    sprint,
    efectivo
}

console.log(metodoDePago.paypal);
let metodoDePago1 = metodoDePago.credito;
console.log("metodo de pago:", metodoDePago1);
