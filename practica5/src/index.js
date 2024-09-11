"use strict";
let variable1 = 'Hola Mundo';
console.log(variable1);
//crear persona 
const persona1 = {
    firstName1: "Denisse",
    lastName1: "Peyton",
    age: 21,
};
//desestructurar
let { firstName1, lastName1 } = persona1;
console.log(firstName1, '', lastName1);
let miNombre = "Edwin";
let [a1, a2, a3, a4, a5] = miNombre;
console.log(a1, a2, a3, a4, a5);
const frutas = ["fresa", "kiwii", "manzana", "durazno"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
let [frutaA, , , frutaB] = frutas;
console.log(frutaA, frutaB);
//creando una clase 
class Persona {
    constructor(nombre, apellidoPaterno, apellidoMaterno, edad) {
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    //metodos 
    //Agregar
    getEdad() {
        return this.edad;
    }
    setEdad(edad) {
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setApellidoPaterno() {
        return this.apellidoPaterno;
    }
    setapellidoMaterno() {
        return this.apellidoMaterno = this.apellidoPaterno;
    }
    getApellidoPaterno() {
        return this.apellidoPaterno;
    }
    getApellidoMaterno() {
        return this.apellidoMaterno;
    }
    getNomnreCompleto() {
        return this.getNombre + '' + this.apellidoPaterno + '' + this.apellidoMaterno;
    }
}
// crear nuaeva persona 
let personaje1 = new Persona('Alberto', 'Guadarrama', 'Delgado', 21);
//imprimir de diferentes maneras 
console.log(personaje1.nombre, personaje1.edad);
console.log(personaje1.nombre);
console.log(personaje1.edad);
//cambiar la variable 
personaje1.edad = 25;
personaje1.nombre = 'Edwin';
let personaje2 = new Persona('Edwin', 'Rodriguez', 'Martinez', 19);
personaje2.setEdad(20);
personaje2.setNombre('Nombre:' + 'Juan');
console.log(personaje2.getNombre());
console.log(personaje2.getNomnreCompleto());
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const usuarioX = new UserAccount('Imagine Dragons', 1);
console.log(usuarioX.name, usuarioX.id);
//crear al menos 5 clases que se van a usar en el proyecto final
/*
Reto crear al menos 5 clases que van a usar en
su proyecto, 3 propiedades, getters y setter y
al menos 1 método por clase o función, agregar
un constructor

class Productos {

}

class Persona {

}
class Usuario extends Persona {

}

class Carrito {

}

class MetodoDePago {


}

Será necesario establecer una Clase Padre y una clase hijo para aplicar el
concepto de Herencia.
*/
class Productos {
    constructor(product, brand, year, price) {
        this.product = product;
        this.brand = brand;
        this.year = year;
        this.price = price;
    }
    getProduct() {
        return this.product;
    }
    setProduct(product) {
        this.product = product;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getYear() {
        return this.year;
    }
    setYear(year) {
        this.year = year;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
}
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    getFullName() {
        return this.name + ' ' + this.lastName;
    }
}
class Usuario extends Person {
    constructor(name, lastName, age, email, password, username) {
        super(name, lastName, age);
        this.email = email;
        this.password = password;
        this.username = username;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getFullName() {
        return this.name + ' ' + this.lastName;
    }
}
class Carrito {
    constructor(total, total_Products, products) {
        this.total = total;
        this.total_Products = total_Products;
        this.products = products;
    }
    getTotal() {
        return this.total;
    }
    setTotal(total) {
        this.total = total;
    }
    getTotalProducts() {
        return this.total_Products;
    }
    setTotalProducts(total_Products) {
        this.total_Products = total_Products;
    }
    getProducts() {
        return this.products;
    }
    setProducts(products) {
        this.products = products;
    }
}
class MetodoDePago {
    constructor(payment_method, card_number, cvs, name_Card) {
        this.payment_method = payment_method;
        this.card_number = card_number;
        this.cvs = cvs;
        this.name_Card = name_Card;
    }
    getPaymentMethod() {
        return this.payment_method;
    }
    setPaymentMethod(payment_method) {
        this.payment_method = payment_method;
    }
    getCardNumber() {
        return this.card_number;
    }
    setCardNumber(card_number) {
        this.card_number = card_number;
    }
    getCvs() {
        return this.cvs;
    }
    setCvs(cvs) {
        this.cvs = cvs;
    }
    getNameCard() {
        return this.name_Card;
    }
    setNameCard(name_Card) {
        this.name_Card = name_Card;
    }
}
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    moverse(distancia = 0) {
        console.log(`${this.nombre} se movio ${distancia}mts`);
    }
    hacerSonido(sonido = 'Sin sonido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
