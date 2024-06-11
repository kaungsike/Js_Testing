// import * as me from "./me.js";

import mySelf, { myAge, myName } from "./me.js";
import Person from "./person.js";
import runner from "./runner.js";

console.log(mySelf);
console.log(myAge);
console.log(myName);

console.log(runner());


const p1 = new Person("Kyaw Kyaw",30);
console.log(p1);