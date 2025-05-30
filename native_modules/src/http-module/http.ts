import http from 'http';

const createServer = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('hola desde typescript con node js');
});

createServer.listen(3000, () => {
  console.log('Servidor en puerto 3000');
});
