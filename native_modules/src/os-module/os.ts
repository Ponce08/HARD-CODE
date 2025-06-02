import os from 'os';

console.log('--- Información del sistema ---');
console.log('Usuario:', os.userInfo().username);
console.log('Sistema operativo:', os.type());
console.log('Versión:', os.release());
console.log('Plataforma:', os.platform());
console.log('Arquitectura:', os.arch());
console.log('Hostname:', os.hostname());
console.log('Tiempo activo (min):', Math.round(os.uptime() / 60));
console.log('Memoria total (MB):', Math.round(os.totalmem() / 1024 / 1024));
console.log('Memoria libre (MB):', Math.round(os.freemem() / 1024 / 1024));
console.log('CPUs:', os.cpus().length);
