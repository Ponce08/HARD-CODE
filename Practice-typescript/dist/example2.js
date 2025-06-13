"use strict";
let petOnSale = 'chinchilla';
let ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50]
];
// Write your code below:
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
let petOnSaleTS = Pet.Chinchilla;
let ordersArrayTS = [
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
var Pet2;
(function (Pet2) {
    Pet2["Hamster"] = "HAMSTER";
    Pet2["Rat"] = "RAT";
    Pet2["Chinchilla"] = "CHINCHILLA";
    Pet2["Tarantula"] = "TARANTULA";
})(Pet2 || (Pet2 = {}));
let petOnSaleTS2 = Pet.Chinchilla;
let ordersArrayTS2 = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50]
];
// ordersArrayTS.push(['HAMSTER', 1]);
function sayHappyBirthdayWithObject(personObject) {
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
let birthdayBabies = [
    { name: 'Liam', age: 0, giftWish: 'karate skills', success: false },
    { name: 'Olivia', age: 0, giftWish: 'a bright future', success: true },
    { name: 'Ava', age: 0, giftWish: '$0.25', success: true }
];
// birthdayBabies.forEach(sayHappyBirthdayWithObject);
// Math Operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function wrongAdd(a, b) {
    return a + b + '';
}
// Math Tutor Function That Accepts a Callback
function mathTutor(operationCallback) {
    console.log("Let's learn how to", operationCallback.name, '!');
    let value25 = operationCallback(2, 5);
    console.log('When we', operationCallback.name, '2 and 5, we get', value25, '.');
    console.log('When we', operationCallback.name, value25, 'and 7, we get', operationCallback(value25, 7), '.');
    console.log('Now fill out this worksheet.');
}
//Do not change the code above this line.
//Provide type annotations for the variables below:
let theFamily = {
    parents: [3, 4],
    mate: 9,
    children: [5, 30, 121]
};
let someFamily = {
    parents: [true, true],
    mate: false,
    children: [false, false, true, true]
};
let aFamily = {
    parents: [
        { name: 'Mom', job: 'software engineer' },
        { name: 'Dad', job: 'coding engineer' }
    ],
    mate: { name: 'Matesky', job: 'engineering coder' },
    children: [{ name: 'Babesky', job: 'none' }]
};
let anotherFamily = {
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
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
let stringArray;
let numberArray;
let personArray;
let coordinateArray;
// Write your code below:
stringArray = getFilledArray('hi', 6);
numberArray = getFilledArray(9, 6);
personArray = getFilledArray({ name: 'J. Dean', age: 24 }, 6);
coordinateArray = getFilledArray([3, 4], 6);
// console.log(stringArray)
let functionTest = getFilledArray([3, 4], 6);
// console.log(functionTest())
// ?______________________________________________
function formatValue(value) {
    // Write your code here
    if (typeof value === 'string') {
        console.log(value.toLowerCase());
    }
    else if (typeof value === 'number') {
        console.log(value.toFixed(2));
    }
}
// formatValue('Hiya');
// formatValue(42);
function formatListings(listings) {
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
function getFriendNameFromEvent(event) {
    return event.displayName || event.username;
}
const newEvent = {
    username: 'vkrauss',
    displayName: 'Veronica Krauss'
};
const friendName = getFriendNameFromEvent(newEvent);
function downloadStatus(status) {
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
function formatStatistic(stat) {
    if (typeof stat === 'number') {
        return stat.toFixed(2);
    }
    if (typeof stat === 'string') {
        return stat.toUpperCase();
    }
}
const siameseCat = {
    name: 'Proxie',
    run: () => 'pitter pat'
};
const bettaFish = {
    name: 'Neptune',
    swim: () => 'bubble blub'
};
function move(pet) {
    if ('run' in pet) {
        return pet.run();
    }
    if ('swim' in pet) {
        return pet.swim();
    }
}
const fettuccine = {
    menuName: 'Fettuccine',
    boil: () => 'Heat water to 212 degrees'
};
const steak = {
    menuName: 'New York Strip Steak',
    panFry: () => 'Heat oil to 350 degrees'
};
function prepareEntree(entree) {
    if ('boil' in entree) {
        return entree.boil();
    }
    else {
        return entree.panFry();
    }
}
const iron = {
    magnetize: () => 'Electromagnet activated'
};
const bottle = {
    melt: () => 'Furnace set to 2,700 degrees'
};
function recycle(trash) {
    // Add your code below:
    if ('magnetize' in trash) {
        return trash.magnetize();
    }
    return trash.melt();
}
function updateRunGoal(run) {
    console.log(`
Miles left:       ${50 - run.miles}
Percent of goal:  ${(run.miles / 50) * 100}% complete
  `);
}
updateRunGoal({
    miles: 5
});
class DesktopDirectory {
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop = new DesktopDirectory();
Desktop.addFile('lesson-notes.txt');
Desktop.showPreview('lesson-notes.txt');
class DesktopDirectory2 {
    constructor() {
        this.config = {
            default: {
                encoding: 'utf-8',
                permissions: 'drw-rw-rw-'
            }
        };
    }
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop2 = new DesktopDirectory2();
class DesktopDirectory3 {
    constructor() {
        this.config = {
            default: {
                encoding: 'utf-8',
                permissions: 'drw-rw-rw-'
            }
        };
    }
    addFile(name) {
        console.log(`Adding file: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}`);
    }
}
const Desktop3 = new DesktopDirectory3();
const me = {
    code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
    name: 'Corrina',
    hobbies: ['Building rockets']
};
me.code();
function getUserName(options) {
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
