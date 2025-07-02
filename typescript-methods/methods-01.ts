// git add . && git commit -m 'typescript-methods-03' && git push

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

// 5. forEach() – Itera sobre cada elemento (sin retornar)
const frutas = ["manzana", "pera", "uva"];
frutas.forEach(f => console.log(f.toUpperCase()));
// MANZANA
// PERA
// UVA
