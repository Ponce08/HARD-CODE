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
interface Producto_ {
  nombre: string;
  precio: number;
  stock: number;
}

function aplicarDescuento(producto: Producto, descuento: number): number {
  return producto.precio - (producto.precio * descuento) / 100;
}

// Prueba
const productoq: Producto_ = { nombre: "Teclado", precio: 100, stock: 10 };
console.log(aplicarDescuento(producto, 20)); // 80
// ?------------------------------------------------------------------
function obtenerPrimero<T>(arr: T[]): T | undefined {
  return arr[0];
}

// Prueba
console.log(obtenerPrimero([10, 20, 30])); // 10
console.log(obtenerPrimero(["a", "b", "c"])); // "a"
