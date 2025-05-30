"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
fs_1.default.readFile('example.js', 'utf8', (err, data) => {
    if (err) {
        console.log('error al leer el archivo', err);
        return;
    }
    console.log('contenido del archivo', data);
});
