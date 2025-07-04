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
enum PonceFamily3 {
  Ponce = 1,
  Leydy,
  Santiago,
  Isabela,
  Julieta
}
// enum PonceFamily {
//   Ponce = 1,
//   Leydy,
//   Santiago,
//   Isabela,
//   Julieta
// }

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

interface Family3 {
  amount: number;
  womens: number;
}

interface Family4 extends Family3 {
  mens: number;
}

const family5: Family4 = {
  amount: 5,
  womens: 3,
  mens: 2
};

const { amount, womens, mens } = family5;

function statusCode(code: string | number): string | number {
  console.log(`My status code is ${code}`);
  return code;
}

// console.log(statusCode(404));
// console.log(statusCode('404'));

function divider({ dividend, divisor }: { dividend: number; divisor: number }) {
  return dividend / divisor;
}

// console.log(divide({ dividend: 66, divisor: 3 }));

type Negate = (value: number) => number;

type Negate2 = (value: number) => number;


function negate(): Negate {
  return (c) => 4 + c;
}

const negate2 = negate();
// console.log(negate2(6));

let x: unknown = 'yonathan';

let y = x as string;

let w = <string>x;

class Person {
  private readonly name: string;

  public constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

let newPerson = new Person('yonathan');
// console.log(newPerson.getName());
// console.log(newPerson.name);

interface Shape {
  getArea: () => number;
}

class Rectangle implements Shape {
  public constructor(protected readonly width: number, protected readonly heigth: number) {}

  public getArea(): number {
    return this.width * this.heigth;
  }

  hacerSonido(): void {
    console.log(`Wau Wau`);
  }
}

class Square extends Rectangle {
  override hacerSonido() {}
}

// ?---------------------------------------------------------------

abstract class Polygon {
  public abstract getArea(): number;

  public toString(): string {
    return `Polygon[area=${this.getArea()}]`;
  }
}

class Rectangles extends Polygon {
  public constructor(protected readonly width: number, protected readonly height: number) {
    super();
  }

  public getArea(): number {
    return this.width * this.height;
  }
}
