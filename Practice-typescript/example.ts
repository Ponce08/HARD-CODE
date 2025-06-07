// const objType: { [index: string]: number } = {};

// objType.nombre = 4

// console.log(objType)

enum PonceFamily {
  Ponce = 1,
  Leydy,
  Santiago,
  Isabela,
  Julieta
}

let family2: PonceFamily = PonceFamily.Isabela;

// console.log(PonceFamily.Julieta);

enum PonceFamily2 {
  Ponce = 'Yonathan',
  Santiago = 'Cardona'
}

console.log(PonceFamily2.Santiago);
