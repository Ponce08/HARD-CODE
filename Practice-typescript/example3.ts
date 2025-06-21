type Employee = {
  name: string;
  age: number;
};

type Statuss = {
  working: boolean;
  sex: 'Masculine' | 'Femenine';
};

type TypeEmployee = Employee & Statuss;

function typeUser(obj: TypeEmployee): void {
  console.log(`My name is ${obj.name} and i'm ${obj.age} years old. My sex is ${obj.sex}`);
}

// typeUser({ name: 'Yonathan', age: 35, sex: 'Masculine', working: true });

type Admin = {
  rol: 'Admin';
  permisos: string[];
};

type Cliente = {
  rol: 'Cliente';
  puntos: number;
};

function esAdmin(usuario: Admin | Cliente) {
  return usuario.rol === 'Admin';
}

const u: Admin | Cliente = { rol: 'Cliente', puntos: 5 };

// ?-------------------------------------------------------------

function yon(): unknown {
  return { name: 'yonathan' };
}

// const k = yon() as { name: string };

const k = <{ name: string }>yon();

k.name;

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  disponible: boolean;
}

const producto: Producto = {
  id: 1,
  nombre: 'Monitor',
  precio: 299.99,
  disponible: true
};

// ?_______________________________________________

interface Cliente2 {
  id: number;
  nombre: string;
  direccion: {
    ciudad: string;
    calle: string;
  };
}

const cliente: Cliente2 = {
  id: 1,
  nombre: 'Laura',
  direccion: {
    ciudad: 'Bogotá',
    calle: 'Calle 123'
  }
};

// Acceso seguro
// console.log(cliente.direccion.ciudad); // ✅ Bogotá

// ?______________________________________________________

interface Inventario {
  [nombreProducto: string]: number;
}

const stock: Inventario = {
  monitor: 10,
  teclado: 5,
  mouse: 20
};

for (const producto in stock) {
  console.log(`${producto}: ${stock[producto]}`);
}

// ?___________________________________________________________
const usuarios: Record<string, number> = {
  juan: 30,
  maria: 25
};

interface Producto2 {
  id: number;
  nombre?: string;
  precio?: number;
}

// Supón que el cliente puede enviar datos incompletos
const productoParcial: Producto2 = {
  id: 1,
  nombre: 'Teclado',
  precio: 100
};

// Pero antes de guardar, quieres asegurarte que todo esté completo
function guardarProducto(p: Required<Producto2>) {
  console.log('Guardando...', p);
}

// guardarProducto(productoParcial); // ❌ Error: falta 'precio'

guardarProducto({
  id: 1,
  nombre: 'Teclado',
  precio: 100
}); // ✅

// ?____________________________________________________________________

interface Usuario {
  id: number;
  nombre: string;
  email: string;
  rol: string;
}

// ✅ Solo quiero "nombre" y "email"
type UsuarioPublico = Pick<Usuario, 'nombre' | 'email'>;

const user: UsuarioPublico = {
  nombre: 'Carlos',
  email: 'carlos@email.com'
};

// ?____________________________________________________________________
// ✅ Quiero todas las propiedades EXCEPTO el 'email'
type UsuarioSinEmail = Omit<Usuario, 'email'>;

// const user2: UsuarioSinEmail = {
//   id: 1,
//   nombre: 'Carlos',
//   rol: 'admin'
// };
// ?____________________________________________________________________
// ✅ Quiero solo 'nombre' y 'email', y que sean obligatorios
type UsuarioRegistro = Required<Pick<Usuario, 'nombre' | 'email'>>;

const nuevoUsuario: UsuarioRegistro = {
  nombre: 'Laura',
  email: 'laura@email.com'
};

// ✅ Quiero que todas las propiedades excepto 'id' sean opcionales
type UsuarioEditable = Partial<Omit<Usuario, 'id'>>;

const editUser: UsuarioEditable = {
  nombre: 'Luis' // puedes poner solo una propiedad
};

// ?____________________________________________________________________

type Usuario3 = {
  id: number;
  nombre: string;
};

type LlavesUsuario = keyof Usuario3; // "id" | "nombre"

const key: LlavesUsuario = 'nombre'; // ✅ válido

// ?____________________________________________________________________
// ✅ typeof
// Obtiene el tipo de una variable o función ya declarada.
const usuario = {
  id: 1,
  nombre: 'Carlos'
};

type TipoUsuario = typeof usuario;

const otroUsuario: TipoUsuario = {
  id: 2,
  nombre: 'Laura'
};

// ?____________________________________________________________________
type Modificable<T> = {
  -readonly [K in keyof T]: T[K];
};

// ❌ -readonly (quita readonly)
type Modificable2<T> = {
  -readonly [K in keyof T]: T[K];
};

// ❓ ? (opcional)
type Parcial<T> = {
  [K in keyof T]?: T[K];
};

// ❗ -? (quita el ? si existiera)
type Obligatorio<T> = {
  [K in keyof T]-?: T[K];
};

// ?____________________________________________________________________

type People = {
  name: string;
  age: number;
  yearBorn: number;
};
// type People = {
//   name: string;
//   age: number;
//   yearBorn: number;
// };

type OnlyNumber<T, N> = {
  [K in keyof T]: T[K] extends N ? K : never;
}[keyof T];

type Result = OnlyNumber<People, number>;

const obj4: Result = 'yearBorn';
// ?____________________________________________________________________

// 💡 Casos de uso comunes
// 1. Filtrar tipos
type Filtrar<T, U> = T extends U ? T : never;

type SoloStrings = Filtrar<string | number | boolean, string>;
// SoloStrings = string
// 2. Excluir tipos
type Excluir<T, U> = T extends U ? never : T;

type SinStrings = Excluir<string | number | boolean, string>;
// SinStrings = number | boolean
// ⚠️ Estos son como los utilitarios nativos Extract y Exclude.

// 🛠️ Crear tu propio utilitario
// 1. Cambiar propiedades a readonly si son primitivas:
type SoloReadOnlyPrimitivos<T> = {
  [K in keyof T]: T[K] extends string | number | boolean ? Readonly<T[K]> : T[K];
};

// 🧠 Avanzado: detectar si una propiedad es opcional
type EsOpcional<T, K extends keyof T> = {} extends Pick<T, K> ? true : false;

type Usuario5 = {
  id: number;
  nombre?: string;
};

type Test1 = EsOpcional<Usuario5, 'nombre'>; // true
type Test2 = EsOpcional<Usuario5, 'id'>; // false

type EsOpcional2<T> = {
  [K in keyof T]: {} extends Pick<T, K> ? K : never;
}[keyof T];

type Obj_0 = {};
type Obj_1 = { id: number };

type Obj_2 = Obj_0 | Obj_1;

const obj0: Obj_2 = {};

type str1 = 'Admin' | 'User' | 'State';
type str2 = 'Pending' | 'Done' | 'Cancel';

type str3 = `${str1}_${str2}`;

// ?>_________________________________________________________

type A1<T> = T extends (...args: infer P) => void ? P : never;

type A2 = (a: number, b: number) => void;

type A3 = A1<A2>;
// ?>_________________________________________________________

type A4<T> = T extends (...args: any[]) => infer P ? P : never;

type A5 = () => Promise<number>;

type A6 = A4<A5>;

// ?>_________________________________________________________

type SoloFunciones<T> = {
  [K in keyof T]: T[K] extends (...args: any) => any ? K : never;
}[keyof T];

type Ejemplo = {
  id: number;
  saludar(): void;
  despedir(): void;
};

type ClavesFuncionales = SoloFunciones<Ejemplo>; // "saludar" | "despedir"

// ?>_________________________________________________________

function formatear(valor: number): string;
function formatear(valor: Date): string;
function formatear(valor: string): string;
function formatear(valor: any): string {
  if (typeof valor === 'number') {
    return valor.toFixed(2);
  }
  if (valor instanceof Date) {
    return valor.toISOString();
  }
  if (typeof valor === 'string') {
    return valor.trim();
  }
  throw new Error('Tipo no soportado');
}

// ?>_________________________________________________________

function Logger(constructor: Function) {
  console.log(`📣 Decorador ejecutado para: ${constructor.name}`);
}

@Logger
class User {
  constructor() {}
}
