import http from 'http';
import fs from 'fs';
import path from 'path';

// const createServer = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/plain' });
//   res.end('hola desde typescript con node js');
// });

// createServer.listen(3000, () => {
//   console.log('Servidor en puerto 3000');
// });

// const createServer = http.createServer((req, res) => {
//   let url = req.url;

//   if (url === '/') {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.end('Pagina de Ponce de inicio');
//   } else if (url === '/about') {
//     res.writeHead(200, { 'content-type': 'text/plain' });
//     res.end('Acerca de nosotros');
//   }
// });

// createServer.listen(3000, () => {
//   console.log('Servidor en puerto 3000');
// });

// let url = 'http://jsonplaceholder.typicode.com/posts';

// let data = '';
// const fetch = (url: string): void => {
//   http
//     .get(url, (res) => {
//       res.setEncoding('utf8');
//       res.on('data', (chunk: Buffer) => {
//         data += chunk;
//       });

//       res.on('end', () => {
//         console.log('Data Recibida!!');
//       });
//     })
//     .on('error', (err) => {
//       console.log('Error al recibir datos', err.message);
//     });
// };

// const createServer = http.createServer((req, res) => {
//   res.writeHead(200, { 'content-type': 'text/plain' });
//   res.end(data || 'Espera un momento por favor...');
// });

// createServer.listen(3000, () => {
//   console.log('Servidor en puerto 3000');
//   fetch(url);
// });

// const createServer = http.createServer((req, res) => {
//   const filePath = path.join(__dirname, 'index.html');

//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       res.writeHead(500, { 'content-type': 'text/plain' });
//       res.end('Error del Servidor');
//     } else {
//       res.writeHead(200, { 'content-type': 'text/html' });
//       res.end(data);
//     }
//   });
// });

// createServer.listen(3000, () => {
//   console.log('Mostrando html en puerto 3000!!');
// });
