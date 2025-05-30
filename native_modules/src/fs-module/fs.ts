import fs from 'fs';

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('error al leer el archivo', err);
    return;
  }
  console.log('contenido del archivo', data);
});
