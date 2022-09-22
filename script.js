'use strict';
/*
// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  
  const arr = [2, 3, 4];
  const a = arr[0];
  const b = arr[0];
  const c = arr[0];
  
  const [x, y, z] = arr;
  console.log(x, y, z);
  console.log(arr);
  
  let [main, , secondary] = restaurant.categories;
  console.log(main, secondary);
  
  [main, secondary] = [secondary, main];
  console.log(main, secondary);
  const [starter, mainCourse] = restaurant.order(2, 0);
  console.log(starter, mainCourse);
  */
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//;
/*
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:20',
    address,
  }) {
    console.log(
      `Order received : ${this.starterMenu[starterIndex]} and 
      ${this.mainMenu[mainIndex]}will be delivered to 
      ${address} by ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Mint Park 32',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Mint Park 32',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 16 };

({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

//Destructuring
//The Spread Officer
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];

let ezp = 'shweta is a good girl';
let output = ezp.split(' ');
console.log(output);

let result = output.map(e => e.split('').reverse().join('')); //.reverse().join(''));
console.log(result.join(' '));

//console.log(result.join(' '));

let testData = 'I am very humble';
let testOutput = ezp.split(' ');
console.log(output);

let resultNew = output.map(e => e.split('').reverse().join('')); //.reverse().join(''));
console.log(result.join(' '));

//iterables: arrays, strings, maps, sets, NOT objects
const str = 'shweta';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);

// const ingredients = [
//   prompt("Let's make pasta!Ingredient 1?"),
//   [prompt("Let's make pasta!Ingredient 2?")],
//   [prompt("Let's make pasta!Ingredient 3?")],
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = { ...restaurant, founder: 'Garry' };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurantCopy);

//spread operator on RIGHT side of assignment operator(=)
const arry = [1, 2, ...[3, 4]];

//rest operator on LEFT side of assignment operator(=)
const [n, m, ...others] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(n, m, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Objects
const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

//functions
const add = function (...numbers) {
  let ourSum = 0;
  for (let i = 0; i < numbers.length; i++) ourSum += numbers[i];
  console.log(ourSum);
};
add(2, 3);
add(5, 3, 7, 2);
add(8, 4, 9);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'onions,', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');

//Short-Circuiting
//use any datatype, return any datatype, and do short circuiting
console.log(3 || 'nini');
//if  the fist value is truthy then second will not be evaluated.

console.log('' || 'Nini');
console.log(true || 0);
console.log(undefined || null);
console.log(typeof null); //object but it's a bug

console.log(undefined || 0 || '' || 'hello' || 23 || null);

//and operator returns falsy value if any one is false, but  returns true only when all the values are true
console.log(0 && 'nini');
console.log('Hello' && 23 && null && 'jonas');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza &&
  restaurant.orderPizza('mushroom', 'spinach', 'chilly', 'chesse');

//Nullish Coalescing, nullish value are null, undefined

restaurant.numGuests = 0;
//const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
//console.log(guest1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

const rest1 = {
  name: 'La Piazza',
  owner: 'Giovami Rossi',
};

const rest2 = {
  name: 'Capri',
  numGuests: 0,
};

//rest1.numGuests = rest1.numGuests || 10;
//rest2.numGuests = rest2.numGuests || 10;

//or assignment
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

//rest1.owner = rest1.owner && '<ANONYMOUS>';
//rest2.owner = rest2.owner && '<ANONYMOUS>';

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<Anonymous>';

console.log(rest1, rest2);


*/

//coding challenge

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Never',
      'Pavard',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretza',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],

    [
      'Burki',
      'schulz',
      'Hummels',
      'Akanji',
      'hakimi',
      'Weigl',
      'witsel',
      'Hazard',
      'Brandt',
    ],
  ],
};

const playerFinal = ['thiago', 'Coutinho', 'Perisic', ...game.team1.players];
console.log(playerFinal);
