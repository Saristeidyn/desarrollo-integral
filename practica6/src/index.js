"use strict";
// Enums
var Color;
(function (Color) {
    Color[Color["Rojo"] = 0] = "Rojo";
    Color[Color["Verde"] = 1] = "Verde";
    Color[Color["Azul"] = 2] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
//Color.Rojo = 100;
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
//color1 = 20;
console.log('color1', color1);
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "Northe";
    CardinalDirections["South"] = "South";
    CardinalDirections["East"] = "East";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
let direction = CardinalDirections.North;
console.log('direction:', direction);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["InternalServerError"] = 500] = "InternalServerError";
})(StatusCodes || (StatusCodes = {}));
let statusCode = StatusCodes.Success;
//statusCode = 50;
statusCode = StatusCodes.NotFound;
console.log('statusCode:', statusCode);
var Volume;
(function (Volume) {
    Volume[Volume["min"] = 1] = "min";
    Volume[Volume["medio"] = 5] = "medio";
    Volume[Volume["max"] = 10] = "max";
})(Volume || (Volume = {}));
let volume = Volume.medio;
console.log('vulume:', volume);
//Reto: Definir una clase ENUM para su proyecto final
//Tienda en linea
var metodoDePago;
(function (metodoDePago) {
    metodoDePago[metodoDePago["debito"] = 0] = "debito";
    metodoDePago[metodoDePago["credito"] = 1] = "credito";
    metodoDePago[metodoDePago["paypal"] = 2] = "paypal";
    metodoDePago[metodoDePago["sprint"] = 3] = "sprint";
    metodoDePago[metodoDePago["efectivo"] = 4] = "efectivo";
})(metodoDePago || (metodoDePago = {}));
console.log(metodoDePago.paypal);
let metodoDePago1 = metodoDePago.credito;
console.log("metodo de pago:", metodoDePago1);
