"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_js_1 = __importDefault(require("./middlewares/logger.js"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.use(logger_js_1.default);
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Todo bien por aqui' });
});
app.listen(PORT, () => {
    console.log(`Server in port:${PORT}`);
});
