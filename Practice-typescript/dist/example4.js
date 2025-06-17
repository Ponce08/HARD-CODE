"use strict";
// class MyClass {
//   // métodos de clase
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
//   ...
// }
// ?__________________________________________________________
// class User1 {
//   constructor(name) {
//     // invoca el setter
//     this.name = name;
//   }
//   get name() {
//     return this.name;
//   }
//   set name(value) {
//     if (value.length < 4) {
//       alert("Nombre demasiado corto.");
//       return;
//     }
//     this.name = value;
//   }
// }
// let user = new User1("John");
// alert(user.name); // John
// user = new User(""); // Nombre demasiado corto.
// ?__________________________________________________________
class Perro {
    constructor(name) {
        this.name = name;
    }
}
const miPerro = new Perro('Firulais');
console.log(miPerro); // Perro { nombre: 'Firulais' }
