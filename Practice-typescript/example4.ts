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
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const miPerro = new Perro('Firulais');
// console.log(miPerro); // Perro { nombre: 'Firulais' }

class Gato {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

const gato1 = new Gato('Michi', 2);
const gato2 = new Gato('Neko', 3);

// console.log(gato1.nombre); // Michi
// console.log(gato2.nombre); // Neko

// ?__________________________________________________________

class Persona {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`);
  }
}

const persona1 = new Persona('Juan');
// persona1.saludar(); // Hola, soy Juan

class Auto {
  marca: string;

  constructor(marca: string) {
    this.marca = marca;
  }

  mostrarMarca() {
    console.log(`La marca del auto es ${this.marca}`);
  }
}

const auto1 = new Auto('Toyota');
// auto1.mostrarMarca(); // La marca del auto es Toyota

// ?__________________________________________________________

class Animal2 {
  respirar() {
    console.log('Estoy respirando 🫁');
  }
}

class Perro2 extends Animal2 {
  ladrar() {
    console.log('¡Guau! 🐶');
  }
}

const dog = new Perro2();
dog.respirar(); // Estoy respirando 🫁
dog.ladrar(); // ¡Guau! 🐶

class Animal {
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
}

class Perro3 extends Animal {
  raza: string;

  constructor(nombre: string, raza: string) {
    super(nombre); // llama al constructor de Animal
    this.raza = raza;
  }

  mostrarInfo() {
    console.log(`Perro: ${this.nombre}, Raza: ${this.raza}`);
  }
}

const dog2 = new Perro3('Max', 'Labrador');
dog2.mostrarInfo(); // Perro: Max, Raza: Labrador

// ?__________________________________________________________

class Animal4 {
  hablar() {
    console.log('Hace algún sonido');
  }
}

class Gato4 extends Animal4 {
  override hablar() {
    console.log('Miau 😺');
  }
}

const gato = new Gato4();
gato.hablar(); // Miau 😺

// ?__________________________________________________________
