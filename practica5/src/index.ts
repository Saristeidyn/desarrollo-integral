let variable1: string = 'Hola Mundo'
console.log(variable1)
//crear persona 
const persona1  = {
    firstName1: "Denisse",
    lastName1: "Peyton",
    age: 21,
}

//desestructurar
let {firstName1, lastName1} = persona1; 
console.log(firstName1,'',lastName1);

let miNombre = "Edwin";
let [a1, a2, a3, a4, a5]: any = miNombre;
console.log(a1,a2 ,a3,a4,a5);

const frutas = ["fresa","kiwii","manzana", "durazno"];
let [fruta1,fruta2] = frutas;
console.log(fruta1,fruta2);

let [frutaA,,,frutaB]= frutas;
console.log(frutaA,frutaB);


//creando una clase 
class Persona{
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    edad: number;

    constructor(nombre: string,  apellidoPaterno: string, apellidoMaterno:string, edad: number){
        this.nombre = nombre;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
        this.edad = edad;
    }
    //metodos 
    //Agregar
    getEdad(): number{
        return this.edad;
    }
    setEdad(edad: number):void {
        this.edad = edad;
    }

    getNombre():string{
        return this.nombre;
    }
    setNombre(nombre: string):void {
        this.nombre = nombre;
        }
    
    setApellidoPaterno(): string{
            return this.apellidoPaterno;
        }

    setapellidoMaterno(): string{
        return this.apellidoMaterno = this.apellidoPaterno;
    }

    getApellidoPaterno():string{
        return this.apellidoPaterno;
    }

    getApellidoMaterno():string{
        return this.apellidoMaterno;
    }

    getNomnreCompleto():string{
        return this.getNombre +''+this.apellidoPaterno+''+this.apellidoMaterno
    }

}


// crear nuaeva persona 
let personaje1 = new Persona('Alberto', 'Guadarrama','Delgado',21);
//imprimir de diferentes maneras 
console.log(personaje1.nombre, personaje1.edad);
console.log(personaje1.nombre);
console.log(personaje1.edad);

//cambiar la variable 
personaje1.edad= 25;
personaje1.nombre = 'Edwin';

let personaje2 = new Persona('Edwin','Rodriguez','Martinez',19);
personaje2.setEdad(20);
personaje2.setNombre('Nombre:'+'Juan');

console.log(personaje2.getNombre());
console.log(personaje2.getNomnreCompleto());


//interface
interface User{
    name: string;
    id: number;

}

class UserAccount{
    name: string;
    id: number;

    constructor(name: string, id: number){
        this.name = name;
        this.id = id;
    }

}


const usuarioX: User = new UserAccount('Imagine Dragons', 1);
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
    product: string;
    brand: string;
    year: number;
    price: number;

    constructor(product: string, brand: string, year:number, price:number) {
        this.product = product;
        this.brand = brand;
        this.year = year;
        this.price = price;
    }

    getProduct(): string{
        return this.product;
    }

    setProduct(product: string): void{
        this.product = product;
    }

    getBrand(): string{
        return this.brand;
    }

    setBrand(brand: string): void{
        this.brand = brand;
    }

    getYear(): number{
        return this.year;
    }

    setYear(year: number): void{
        this.year = year;
    }

    getPrice(): number{
        return this.price;
    }

    setPrice(price: number): void{
        this.price = price;
    }

}

class Person {
    name: string;
    lastName: string;
    age: number;

    constructor(name: string, lastName: string, age: number){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getName(): string{
        return this.name;
    }

    setName(name: string): void{
        this.name = name;
    }

    getLastName(): string{
        return this.lastName;
    }

    setLastName(lastName: string): void{
        this.lastName = lastName;
    }

    getAge(): number{
        return this.age;
    }

    setAge(age: number): void{
        this.age = age;
    }

    getFullName(): string{
        return this.name + ' ' + this.lastName;
    }

}
class Usuario extends Person {
    email: string;
    password: string;
    username: string;

    constructor(name: string, lastName: string, age: number, email: string, password: string, username: string){
        super(name, lastName, age);
        this.email = email;
        this.password = password;
        this.username = username;
    }

    getEmail(): string{
        return this.email;
    }

    setEmail(email: string): void{
        this.email = email;
    }

    getPassword(): string{
        return this.password;
    }

    setPassword(password: string): void{
        this.password = password;
    }

    getUsername(): string{
        return this.username;
    }

    setUsername(username: string): void{
        this.username = username;
    }

    getFullName(): string{
        return this.name + ' ' + this.lastName;
    }

}



class Carrito {
    total: number;
    total_Products: number;
    products: string;   

    constructor(total: number, total_Products: number, products: string){
        this.total = total;
        this.total_Products = total_Products;
        this.products = products;
    }

    getTotal(): number{
        return this.total;
    }

    setTotal(total: number): void{
        this.total = total;
    }

    getTotalProducts(): number{
        return this.total_Products;
    }

    setTotalProducts(total_Products: number): void{
        this.total_Products = total_Products;
    }

    getProducts(): string{
        return this.products;
    }

    setProducts(products: string): void{
        this.products = products;
    }


}

class MetodoDePago {
    payment_method: string;
    card_number: number;
    cvs: number;
    name_Card: string;

    constructor(payment_method: string, card_number: number, cvs: number, name_Card: string){
        this.payment_method = payment_method;
        this.card_number = card_number;
        this.cvs = cvs;
        this.name_Card = name_Card;
    }

    getPaymentMethod(): string{
        return this.payment_method;
    }

    setPaymentMethod(payment_method: string): void{
        this.payment_method = payment_method;
    }

    getCardNumber(): number{
        return this.card_number;
    }

    setCardNumber(card_number: number): void{
        this.card_number = card_number;
    }

    getCvs(): number{
        return this.cvs;
    }

    setCvs(cvs: number): void{
        this.cvs = cvs;
    }

    getNameCard(): string{
        return this.name_Card;
    }

    setNameCard(name_Card: string): void{
        this.name_Card = name_Card;
    }


}





class Animal {
    nombre: string;
    constructor(nombre: string){
        this.nombre = nombre;
    }
    moverse(distancia: number = 0){
        console.log(`${this.nombre} se movio ${distancia}mts`);
    }
    hacerSonido(sonido: string = 'Sin sonido'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
    
}