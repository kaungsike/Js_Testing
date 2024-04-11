// const sum = function(a,b){
//     return a+b;
// }

// console.log(sum(3,3));

// const arrSum = (a,b) => a+b;

// console.log(arrSum(3,3));

// const run = function(){
//     return "This is function"
// }

// console.log(run());

// const arrFun = () => "This is arrow function";

// console.log(arrFun());

// const squareArea = function (x){
//     return x**2;
// }

// console.log(squareArea(4));

// const circleArea = function(r){
//     return Math.PI*r**2;
// }

// console.log(circleArea(5));

// const arrCycleArea = (r) => Math.PI*r**2;

// console.log(arrCycleArea(5));

// const arrSquareArea = function(x){
//     return x**2;
// }

// console.log(arrSquareArea(4));

// const findAge = function(dateString){
//     const date = new Date();
//     const inputDate = new Date(dateString);

//     const currentYear = date.getFullYear();
//     const birthYear = inputDate.getFullYear();

//     return currentYear - birthYear ;
// }

// const arrowFindAge = (dateString) => {
//     const inputDate = new Date(dateString);
//     const birthDate = inputDate.getFullYear();

//     const date = new Date();
//     const currentDate = date.getFullYear();
    
//     return currentDate - birthDate;
// }

// console.log(arrowFindAge("2003-11-17"));

// console.log(findAge("2003-11-17"));



// console.table(gadgets);

// console.table(gadgets.map(function(el){
//     el.price = el.price+.05;
//     return el
// }));

// console.table(gadgets.map((el)=>{
//     el.price = el.price+.99
//     return el;
// }));
// console.table(gadgets.map(el => ({...el,price:el.price + .999})));

// console.table(gadgets.filter(el => ({...el,price:el.price >200})));

// console.table(gadgets.filter((el) => {el.price>200}));

// console.table(gadgets.map((el) => {
//     el.price = el.price+0.999
//     return el;
// }));

// console.table(gadgets.map(el => ({...el,price:el.price+.111})));

// console.table(gadgets.filter((el) => el.price<200));

// console.log(gadgets.reduce((pv,cv) => pv+cv.price,0));
const gadgets = [
    {id:1,name:"Phone",price:11111,rating:3.5},
    {id:2,name:"Car",price:134531111,rating:5.5},
    {id:3,name:"Airplane",price:11111,rating:3.7},
    {id:4,name:"Laptop",price:19171,rating:5.5},
    {id:5,name:"Ball",price:111,rating:7.5},
    {id:6,name:"Shoe",price:144,rating:2.4},
];

const chars = ["a","b","c","d","e","f"];

const numbs = [1,3,4,6,3,6,-45,4.5,0,-9];

const complexArray = ["aaa",123,122.4,"$wfe","ABC","!1"];

const fruits = ["Apple","Mango","Banana","Kiwi","Orange","Coconut","Watermelon","Grapes","Peach","Strawberry"];

// console.table(gadgets.sort((a,b) => a.name.charCodeAt()-b.name.charCodeAt()));

// console.log(fruits.sort((a,b) => b.charCodeAt()-a.charCodeAt()));

// console.log(chars.sort((a,b) => b.charCodeAt()-a.charCodeAt()));
// console.log(chars.sort((a,b) => b.charCodeAt()-a.charCodeAt()));

// console.log(chars.sort((a,b) => a.charCodeAt()-b.charCodeAt()));
// console.log(numbs.sort((a,b) => a-b));
// console.log(numbs.sort((a,b) => b-a));

// console.table(gadgets);

// console.table(gadgets.sort((a,b) => a.price - b.price));

// const arr = [];

// arr[0] = "a";
// arr[1] = "b";
// arr[2] = "c";

// console.log(arr);

//  const obj = { a:"aaa",b:"bbb"}

//  console.log(obj);
 
// obj.c="ccc";

//  console.log(obj);

// const string = "San gyi dr pr"

// console.log(string);

// string[0] = "b";

// console.log(string);

const obj = {a:"a",b:"b"}

// obj.c= "ccc";
// obj.d = "ddd";
// console.log(obj);

// console.log({...obj,c:"ccc",e:"ddd"});

// stock > 100 , discount 20%

// console.table(gadgets.filter((el) => el.price>200).map((el) => el.price = el.price+.099).map((el) => el.name));

// console.table(gadgets.filter((e) => e.price>=200).map((e) =>({...gadgets,price:e.price+0.99})).map((e) => e.name).join("\n"));

console.table(gadgets.filter( (el) => el.id>=3)
    .map( (el) => ({...el,price:el.price+.099}))
    .map( (el) => el.name)
    .join(" | ")
);

const text ="sna gyi dr pr byar ma ya bu lar kwar";

console.log(text.split(" ")
    .filter((el) => el.length===3)
    .map( (el) => el.toUpperCase())
    .join(" | ")
);

class Test {
    a(){
        console.log("process a");
        return this;
    }
    bbb(){
        console.log("process b");
        return this;
    }
    ccc(){
        console.log("process c");
        return this;
    }
}

const test = new Test();

console.log(test.a().bbb().ccc());





























