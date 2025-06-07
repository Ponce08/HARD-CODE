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

// console.log(PonceFamily2.Santiago);
/**
 * @alias Cadena - es de tipo string, no lo cambies dejalo asi como esta
 */
type Cadena = string;

type Obj3 = {
  name: Cadena;
  lastName: Cadena;
  age: number;
};

const objPonce: Obj3 = {
  name: '',
  lastName: '',
  age: 0
};
