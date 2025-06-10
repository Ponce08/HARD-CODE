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
