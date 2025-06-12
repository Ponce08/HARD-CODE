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

type Human = { name: string; job: string };
type Dog = { name: string; tailWagSpeed: number };

type Family<T> = {
  parents: [T, T];
  mate: T;
  children: T[];
};
//Do not change the code above this line.

//Provide type annotations for the variables below:
let theFamily: Family<number> = {
  parents: [3, 4],
  mate: 9,
  children: [5, 30, 121]
};

let someFamily: Family<boolean> = {
  parents: [true, true],
  mate: false,
  children: [false, false, true, true]
};

let aFamily: Family<Human> = {
  parents: [
    { name: 'Mom', job: 'software engineer' },
    { name: 'Dad', job: 'coding engineer' }
  ],
  mate: { name: 'Matesky', job: 'engineering coder' },
  children: [{ name: 'Babesky', job: 'none' }]
};

let anotherFamily: Family<Dog> = {
  parents: [
    { name: 'Momo', tailWagSpeed: 3 },
    { name: 'Dado', tailWagSpeed: 100 }
  ],
  mate: { name: 'Cheems', tailWagSpeed: 7 },
  children: [
    { name: 'Puppin', tailWagSpeed: 0.001 },
    { name: 'Puppenaut', tailWagSpeed: 0.0001 },
    { name: 'Puppenator', tailWagSpeed: 0.01 }
  ]
};

// ?______________________________________________

function getFilledArray<T>(value: T, n: number): T[] {
  return Array(n).fill(value);
}

let stringArray: string[];
let numberArray: number[];
let personArray: { name: string; age: number }[];
let coordinateArray: [number, number][];

// Write your code below:
stringArray = getFilledArray<string>('hi', 6);
numberArray = getFilledArray<number>(9, 6);
personArray = getFilledArray<{ name: string; age: number }>({ name: 'J. Dean', age: 24 }, 6);
coordinateArray = getFilledArray<[number, number]>([3, 4], 6);

// console.log(stringArray)

let functionTest = getFilledArray<[number, number]>([3, 4], 6);

// console.log(functionTest())

// ?______________________________________________

function formatValue(value: string | number) {
  // Write your code here
  if (typeof value === 'string') {
    console.log(value.toLowerCase());
  } else if (typeof value === 'number') {
    console.log(value.toFixed(2));
  }
}

// formatValue('Hiya');
// formatValue(42);

function formatListings(listings: (string | number)[]) {
  return listings.map((listing) => {
    if (typeof listing === 'string') {
      return listing.toUpperCase();
    }

    if (typeof listing === 'number') {
      return `$${listing.toLocaleString()}`;
    }
  });
}

const result = formatListings(['123 Main St', 226800, '580 Broadway Apt 4a', 337900]);

// console.log(result);

type Goose = {
  isPettable: boolean;
  hasFeathers: boolean;
  canThwartAPicnic: boolean;
};

type Moose = {
  isPettable: boolean;
  hasHoofs: boolean;
};

// const pettingZooAnimal: Goose | Moose = { isPettable: true, hasFeathers:true };

type Like = {
  username: string;
  displayName: string;
};

type Share = {
  username: string;
  displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
  return event.displayName || event.username;
}

const newEvent = {
  username: 'vkrauss',
  displayName: 'Veronica Krauss'
};

const friendName = getFriendNameFromEvent(newEvent);

// console.log(`You have an update from ${friendName}.`);

type Status = 'idle' | 'downloading' | 'complete';

function downloadStatus(status: Status) {
  if (status === 'idle') {
    console.log('Download');
  }
  if (status === 'downloading') {
    console.log('Downloading');
  }
  if (status === 'complete') {
    console.log('Your download is complete!');
  }
}

// downloadStatus('downloading');

function formatStatistic(stat: string | number) {
  if (typeof stat === 'number') {
    return stat.toFixed(2);
  }
  if (typeof stat === 'string') {
    return stat.toUpperCase();
  }
}

// console.log(formatStatistic('Win'));
// console.log(formatStatistic(0.364));

type Cat = {
  name: string;
  run: () => string;
};

type Fish = {
  name: string;
  swim: () => string;
};

const siameseCat = {
  name: 'Proxie',
  run: () => 'pitter pat'
};

const bettaFish = {
  name: 'Neptune',
  swim: () => 'bubble blub'
};

function move(pet: Cat | Fish) {
  if ('run' in pet) {
    return pet.run();
  }
  if ('swim' in pet) {
    return pet.swim();
  }
}

// console.log(move(siameseCat));

type Pasta = {
  menuName: string;
  boil: () => string;
};

type Meat = {
  menuName: string;
  panFry: () => string;
};

const fettuccine = {
  menuName: 'Fettuccine',
  boil: () => 'Heat water to 212 degrees'
};

const steak = {
  menuName: 'New York Strip Steak',
  panFry: () => 'Heat oil to 350 degrees'
};

function prepareEntree(entree: Pasta | Meat) {
  if ('boil' in entree) {
    return entree.boil();
  } else {
    return entree.panFry();
  }
}

// console.log(prepareEntree(fettuccine));

type Metal = {
  magnetize: () => string;
};

type Glass = {
  melt: () => string;
};

const iron = {
  magnetize: () => 'Electromagnet activated'
};

const bottle = {
  melt: () => 'Furnace set to 2,700 degrees'
};

function recycle(trash: Metal | Glass) {
  // Add your code below:
  if ('magnetize' in trash) {
    return trash.magnetize();
  }
  return trash.melt();
}

// console.log(recycle(iron));

// Write an interface here
interface Run {
  miles: number;
}

function updateRunGoal(run: Run) {
  console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `);
}

updateRunGoal({
  miles: 5
});

// Write an interface here
interface Directory {
  addFile: (name: string) => void;
}

class DesktopDirectory implements Directory {
  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop = new DesktopDirectory();

Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');

interface Directory2 {
  addFile: (name: string) => void;
  // Define a config type member here
  config: {
    default: {
      encoding: string;
      permissions: string;
    };
  };
}

class DesktopDirectory2 implements Directory {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-'
    }
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop2 = new DesktopDirectory2();

// console.log(Desktop2.config);

interface Directory3 {
  addFile: (name: string) => void;
  config: Config;
}

interface DefaultConfig {
  encoding: string;
  permissions: string;
}

interface Config {
  default: DefaultConfig;
}

class DesktopDirectory3 implements Directory3 {
  config = {
    default: {
      encoding: 'utf-8',
      permissions: 'drw-rw-rw-'
    }
  };

  addFile(name: string) {
    console.log(`Adding file: ${name}`);
  }

  showPreview(name: string) {
    console.log(`Opening preview of file: ${name}`);
  }
}

const Desktop3 = new DesktopDirectory3();

// console.log(Desktop3.config);

interface Developer extends Human2 {
  code: () => void;
}

// Add your interface here
interface Human2 {
  name: string;
  hobbies: string[];
}

const me: Developer = {
  code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
  name: 'Corrina',
  hobbies: ['Building rockets']
};

me.code();

// Write an interface here
interface UserNameOptions {
  firstName?: string;
  lastName?: string;
  username: string;
}

function getUserName(options: UserNameOptions) {
  if (options.firstName && options.lastName) {
    return console.log(`${options.firstName} ${options.lastName}`);
  }

  return console.log(options.username);
}

getUserName({
  firstName: "Mr.",
  lastName: "Oshiro",
  username: "hotelowner304",
});

getUserName({
  firstName: "Madeline",
  username: "mountainClimber",
});

