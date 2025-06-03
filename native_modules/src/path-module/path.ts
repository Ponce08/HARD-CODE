// import path from 'path';
import { URL } from 'url';

// const pathFile = 'native_modules/src/http-module/index.html';

// console.log(path.basename(pathFile));
// console.log(path.dirname(pathFile));
// console.log(path.extname(pathFile));

// console.log(path.resolve('src', 'index.html'));

// console.log(path.parse(pathFile));
// let objPath = {
//   root: '',
//   dir: 'native_modules/src/http-module',
//   base: 'index.html',
//   ext: '.html',
//   name: 'index'
// };
// console.log(path.format(objPath));

// const myURL = new URL('https://example.com:8080/path/page.html?id=123&lang=es#section');

// console.log(myURL);

// let myUrl = new URL('/products', 'https://ponce.com')
// myUrl.searchParams.append('name', 'yonathan')

// console.log(myUrl);

// !-----------Event module----------

import EventEmitter from 'events';

const newEvent = new EventEmitter();

newEvent.on('yo', (nombre) => {
  console.log(`Hola me llamo ${nombre}`);
});

newEvent.emit('yo', 'yonathan');
