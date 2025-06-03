import crypto from 'crypto';

const newPassword = 'Ponce08';

const hashPasword = crypto.createHash('sha256').update(newPassword).digest('hex');

// console.log('Hash:', hashPasword);

const algoritmo = 'aes-256-cbc';
const clave = crypto.randomBytes(32); // clave de 256 bits
const iv = crypto.randomBytes(16); // vector de inicialización

// Cifrar
const cifrar = (texto: string) => {
  const cipher = crypto.createCipheriv(algoritmo, clave, iv);
  let encrypted = cipher.update(texto, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

// Descifrar
const descifrar = (encrypted: string) => {
  const decipher = crypto.createDecipheriv(algoritmo, clave, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

const texto = 'mensaje secreto';
const cifrado = cifrar(texto);
const descifrado = descifrar(cifrado);

// console.log('🔐 Cifrado:', cifrado);
// console.log('🔓 Descifrado:', descifrado);

// *🔐 Escenario: Verificar que un mensaje viene de una fuente confiable

import http from 'http';

const SECRET = 'clave_super_secreta'; // clave que ambas partes conocen

// Simula un cliente que firma el mensaje y lo envía
function simulateClientRequest(message: string) {
  const hmac = crypto.createHmac('sha256', SECRET).update(message).digest('hex');

  const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-hub-signature': hmac
    }
  };

  const req = http.request(options, (res) => {
    res.on('data', (d) => process.stdout.write(d));
  });

  req.write(message);
  req.end();
}

// Crea el servidor que valida la firma HMAC
const server = http.createServer((req, res) => {
  let body = '';

  req.on('data', (chunk) => (body += chunk));

  req.on('end', () => {
    const receivedHmac = req.headers['x-hub-signature'];
    const expectedHmac = crypto.createHmac('sha256', SECRET).update(body).digest('hex');

    if (receivedHmac === expectedHmac) {
      console.log('✅ Firma verificada. Mensaje confiable.');
      res.writeHead(200);
      res.end('OK: Firma válida');
    } else {
      console.log('❌ Firma NO válida. Mensaje posiblemente alterado.');
      res.writeHead(403);
      res.end('ERROR: Firma inválida');
    }
  });
});

server.listen(3000, () => {
  console.log('Servidor en http://localhost:3000');

  // Simulamos una petición legítima
  simulateClientRequest('Hola desde el cliente');

  // También podrías simular una firma alterada para ver el rechazo
});
