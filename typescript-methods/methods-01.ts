// git add . && git commit -m 'typescript-methods-02' && git push

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

