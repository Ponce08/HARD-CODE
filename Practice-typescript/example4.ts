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

class Usuario {
  private contraseña: string;

  constructor(contraseña: string) {
    this.contraseña = contraseña;
  }

  verificarContraseña(pass: string) {
    return this.contraseña === pass;
  }
}
// ?__________________________________________________________

class Utilidades {
  static saludar(nombre: string) {
    return `Hola, ${nombre}`;
  }
}

console.log(Utilidades.saludar('Juan')); // Hola, Juan
// ❌ No necesitas hacer new Utilidades()

// ?__________________________________________________________

class Persona5 {
  public nombre: string;
  private edad: number;
  #dni: string;

  constructor(nombre: string, edad: number, dni: string) {
    this.nombre = nombre;
    this.edad = edad;
    this.#dni = dni;
  }

  mostrar() {
    console.log(`${this.nombre}, edad ${this.edad}, DNI oculto`);
  }
}

// ?__________________________________________________________

class Persona6 {
  private _edad: number = 0;

  get edad(): number {
    return this._edad;
  }

  set edad(valor: number) {
    if (valor >= 0) {
      this._edad = valor;
    } else {
      throw new Error('La edad no puede ser negativa');
    }
  }
}

const persona = new Persona6();
persona.edad = 25; // usa el setter
// console.log(persona.edad); // usa el getter → 25

// ?__________________________________________________________

const Animal0 = class {
  tipo: string;

  constructor(tipo: string) {
    this.tipo = tipo;
  }

  hablar() {
    console.log(`Este es un ${this.tipo}`);
  }
};

const a = new Animal0('león');
a.hablar(); // Este es un león

// ?__________________________________________________________

class Boton {
  mensaje = 'Click!';

  clickHandler() {
    console.log(this.mensaje); // undefined si se pierde el contexto
  }
}

const b = new Boton();
setTimeout(b.clickHandler, 1000); // ❌ this no apunta al botón

setTimeout(b.clickHandler.bind(b), 1000); // ✅ "Click!"

// ?__________________________________________________________

type Constructor<T = {}> = new (...args: any[]) => T;

function Volador<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    volar() {
      console.log('Estoy volando ✈️');
    }
  };
}

class Animal1 {
  moverse() {
    console.log('Me muevo');
  }
}

const AnimalVolador = Volador(Animal1);

const pajaro = new AnimalVolador();
pajaro.moverse(); // Me muevo
pajaro.volar(); // Estoy volando ✈️
