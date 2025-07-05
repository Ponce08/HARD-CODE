function sumar(a: number, b: number): number {
  return a + b;
}

// Prueba
console.log(sumar(5, 3)); // 8
// ?------------------------------------------------------------------
function filtrarPares(numeros: number[]): number[] {
  return numeros.filter((n) => n % 2 === 0);
}

// Prueba
console.log(filtrarPares([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
// ?------------------------------------------------------------------
class Persona1 {
  constructor(public nombre: string, public edad: number) {}

  saludar(): string {
    return `Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
  }
}

// Prueba
const persona_ = new Persona1("Juan", 30);
console.log(persona1.saludar());
// Hola, mi nombre es Juan y tengo 30 años.
// ?------------------------------------------------------------------
