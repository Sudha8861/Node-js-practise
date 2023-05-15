//local module
// const addFn = require("./add.js");

// console.log("Hello from index.js");
// const sum = addFn(1, 2);
// const sum2 = addFn(2, 3);
// console.log(sum);
// console.log(sum2);

// require("./superman.js");
// require("./batman.js");

// const superHero = require("./super-hero");
// console.log(superHero.getName());
// superHero.setName("Superman");
// console.log(superHero.getName());

// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());

// const SuperHero = require("./super-hero");

// const batman = new SuperHero("Batman");
// console.log(batman.getName());
// batman.setName("Bruce Wayne");
// console.log(batman.getName());

// const superman = new SuperHero("Superman");
// console.log(superman.getName());

//module imports and exports

// const math = require("./math");

// console.log(math.add(1, 2));
// console.log(math.subtract(2, 3));

//importing json in node js

// const json = require("./data.json");
// console.log(json.address.street);

//path module

// const path = require("node:path");

// console.log(__filename);
// console.log(__dirname);

// console.log(path.basename(__filename)); //index.js is a filename
// console.log(path.basename(__dirname)); //node js is a directory name

// console.log(path.extname(__filename)); // extname means .js
// console.log(path.extname(__dirname));

// console.log(path.parse(__filename)); //json formate
// console.log(path.format(path.parse(__filename)));

// console.log(path.isAbsolute(__filename));
// console.log(path.isAbsolute("./data.json"));

//event module

const EventEmitter = require("node:events");
const emitter = new EventEmitter();

emitter.on("order-pizza", (size, topping) => {
  console.log(`Order received! Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("serving complementry drink");
  }
});

console.log("Do work before event occure in  the system");
emitter.emit("order-pizza", "large", "mushrooms");
