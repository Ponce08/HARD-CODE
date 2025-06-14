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
type UsuarioPublico = Pick<Usuario, "nombre" | "email">;

const user: UsuarioPublico = {
  nombre: "Carlos",
  email: "carlos@email.com"
};

// ?____________________________________________________________________
// ✅ Quiero todas las propiedades EXCEPTO el 'email'
type UsuarioSinEmail = Omit<Usuario, "email">;

const user2: UsuarioSinEmail = {
  id: 1,
  nombre: "Carlos",
  rol: "admin"
};
// ?____________________________________________________________________
// ✅ Quiero solo 'nombre' y 'email', y que sean obligatorios
type UsuarioRegistro = Required<Pick<Usuario, "nombre" | "email">>;

const nuevoUsuario: UsuarioRegistro = {
  nombre: "Laura",
  email: "laura@email.com"
};

// ✅ Quiero que todas las propiedades excepto 'id' sean opcionales
type UsuarioEditable = Partial<Omit<Usuario, "id">>;

const editUser: UsuarioEditable = {
  nombre: "Luis" // puedes poner solo una propiedad
};
