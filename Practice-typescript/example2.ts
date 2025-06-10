let petOnSale = 'chinchilla';
let ordersArray = [
  ['rat', 2],
  ['chinchilla', 1],
  ['hamster', 2],
  ['chinchilla', 50]
];

// Write your code below:
enum Pet {
  Hamster,
  Rat,
  Chinchilla,
  Tarantula
}

let petOnSaleTS: Pet = Pet.Chinchilla;

let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];

// ordersArrayTS.push([Pet.Jerboa, 3]);

let petOnSale2 = 'chinchilla';
let ordersArray2 = [
  ['rat', 2],
  ['chinchilla', 1],
  ['hamster', 2],
  ['chinchilla', 50]
];

// Write your code below:

enum Pet2 {
  Hamster = 'HAMSTER',
  Rat = 'RAT',
  Chinchilla = 'CHINCHILLA',
  Tarantula = 'TARANTULA'
}

let petOnSaleTS2: Pet = Pet.Chinchilla;

let ordersArrayTS2: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
];

// ordersArrayTS.push(['HAMSTER', 1]);

function sayHappyBirthdayWithObject(personObject: { name: string; age: number; giftWish: string; success: boolean }) {
  let output = '';
  output += 'Happy Birthday ' + personObject.name + '! ';
  output += 'You are now ' + personObject.age + ' years old! ';
  output += 'Your birthday wish was to receive ' + personObject.giftWish + '. And guess what? You will ';
  if (!personObject.success) {
    output += 'not ';
  }
  output += 'receive it! \n';
  console.log(output);
}

let birthdayBabies: {
  name: string;
  age: number;
  giftWish: string;
  success: boolean;
}[] = [
  { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
  { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
  { name: 'Ava', age: 0, giftWish: '$0.25', success: true }
];

// birthdayBabies.forEach(sayHappyBirthdayWithObject);

// Math Operations
function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number {
  return a / b;
}
function wrongAdd(a: number, b: number) {
  return a + b + '';
}

// Add your function type below:
type OperatorFunction = (a: number, b: number) => number;

// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback: OperatorFunction) {
  console.log("Let's learn how to", operationCallback.name, '!');
  let value25 = operationCallback(2, 5);
  console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
  console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
  console.log('Now fill out this worksheet.');
}

// Call your functions below:
// mathTutor(multiply);
// mathTutor(wrongAdd)
