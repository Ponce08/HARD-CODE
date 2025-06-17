"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function typeUser(obj) {
    console.log(`My name is ${obj.name} and i'm ${obj.age} years old. My sex is ${obj.sex}`);
}
function esAdmin(usuario) {
    return usuario.rol === 'Admin';
}
const u = { rol: 'Cliente', puntos: 5 };
// ?-------------------------------------------------------------
function yon() {
    return { name: 'yonathan' };
}
// const k = yon() as { name: string };
const k = yon();
k.name;
const producto = {
    id: 1,
    nombre: 'Monitor',
    precio: 299.99,
    disponible: true
};
const cliente = {
    id: 1,
    nombre: 'Laura',
    direccion: {
        ciudad: 'Bogotá',
        calle: 'Calle 123'
    }
};
const stock = {
    monitor: 10,
    teclado: 5,
    mouse: 20
};
for (const producto in stock) {
    console.log(`${producto}: ${stock[producto]}`);
}
// ?___________________________________________________________
const usuarios = {
    juan: 30,
    maria: 25
};
// Supón que el cliente puede enviar datos incompletos
const productoParcial = {
    id: 1,
    nombre: 'Teclado',
    precio: 100
};
// Pero antes de guardar, quieres asegurarte que todo esté completo
function guardarProducto(p) {
    console.log('Guardando...', p);
}
// guardarProducto(productoParcial); // ❌ Error: falta 'precio'
guardarProducto({
    id: 1,
    nombre: 'Teclado',
    precio: 100
}); // ✅
const user = {
    nombre: 'Carlos',
    email: 'carlos@email.com'
};
const user2 = {
    id: 1,
    nombre: 'Carlos',
    rol: 'admin'
};
const nuevoUsuario = {
    nombre: 'Laura',
    email: 'laura@email.com'
};
const editUser = {
    nombre: 'Luis' // puedes poner solo una propiedad
};
const key = 'nombre'; // ✅ válido
// ?____________________________________________________________________
// ✅ typeof
// Obtiene el tipo de una variable o función ya declarada.
const usuario = {
    id: 1,
    nombre: 'Carlos'
};
const otroUsuario = {
    id: 2,
    nombre: 'Laura'
};
const obj4 = 'yearBorn';
const obj0 = {};
function formatear(valor) {
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
function Logger(constructor) {
    console.log(`📣 Decorador ejecutado para: ${constructor.name}`);
}
let User = class User {
    constructor() { }
};
User = __decorate([
    Logger,
    __metadata("design:paramtypes", [])
], User);
