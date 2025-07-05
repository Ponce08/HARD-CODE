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
