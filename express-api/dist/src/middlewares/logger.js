"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    res.json({ Response: `${req.method} and ${req.url}` });
    next();
};
exports.default = logger;
