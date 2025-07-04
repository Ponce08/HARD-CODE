// git add . && git commit -m 'typescript-methods-10' && git push

// 1. map() – Transforma cada elemento
const numeros = [1, 2, 3];
const alCuadrado = numeros.map(n => n * n);
console.log(alCuadrado); // [1, 4, 9]

// 2. filter() – Filtra elementos que cumplan una condición
const edades = [12, 18, 25, 30];
const mayoresDeEdad = edades.filter(e => e >= 18);
console.log(mayoresDeEdad); // [18, 25, 30]

// 3. find() – Busca el primer elemento que cumpla una condición
const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Luis" }
];
const usuario = usuarios.find(u => u.id === 2);
console.log(usuario); // { id: 2, nombre: "Luis" }

// 4. reduce() – Acumula todos los valores en uno solo
const precios = [10, 20, 30];
const total = precios.reduce((acc, val) => acc + val, 0);
console.log(total); // 60
// !---------------------------------------------------------------------
// 5. forEach() – Itera sobre cada elemento (sin retornar)
const frutas = ["manzana", "pera", "uva"];
frutas.forEach(f => console.log(f.toUpperCase()));
// MANZANA
// PERA
// UVA

// ✅ ¿Qué más se puede hacer con forEach()?
//? 1. Actualizar elementos de un array (mutar)
const nombres = ["Ana", "Luis", "Marta"];
nombres.forEach((valor, i, arr) => {
  arr[i] = valor.toUpperCase();
});
console.log(nombres); // ["ANA", "LUIS", "MARTA"]

//? 2. Llenar otro array
const numeros4 = [1, 2, 3];
const resultado: number[] = [];

numeros.forEach(n => {
  resultado.push(n * 10);
});

console.log(resultado); // [10, 20, 30]

//? 3. Contar cuántos cumplen cierta condición
const edades3 = [17, 18, 21, 16, 25];
let mayores = 0;

edades.forEach(e => {
  if (e >= 18) mayores++;
});

console.log(`Mayores de edad: ${mayores}`); // Mayores de edad: 3

//? 4. Interactuar con el DOM (si estás en un entorno de frontend)
const botones = document.querySelectorAll('button');
botones.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`Clic en: ${btn.textContent}`);
  });
});

//? 5. Modificar objetos dentro de un array
const productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 }
];

productos.forEach(p => {
  p.precio *= 1.1; // aumento del 10%
});

console.log(productos);
// [
//   { nombre: "Camisa", precio: 22 },
//   { nombre: "Pantalón", precio: 33 }
// ]
// !---------------------------------------------------------------------


// 6. some() – ¿Al menos un elemento cumple la condición?
const numeros2 = [1, 3, 5, 7];
const hayPares = numeros.some(n => n % 2 === 0);
console.log(hayPares); // false

// 7. every() – ¿Todos los elementos cumplen la condición?
const edades2 = [22, 25, 30];
const todosMayores = edades.every(e => e >= 18);
console.log(todosMayores); // true

// 8. includes() – Verifica si existe un valor
const colores = ["rojo", "azul", "verde"];
console.log(colores.includes("azul")); // true

// 9. sort() – Ordena el array (alfabético o numérico)
const numeros3 = [5, 3, 8, 1];
numeros.sort((a, b) => a - b);
console.log(numeros); // [1, 3, 5, 8]

// 10. splice() – Agrega o elimina elementos
const letras = ["a", "b", "c", "d"];
letras.splice(1, 2); // desde índice 1, elimina 2 elementos
console.log(letras); // ["a", "d"]
