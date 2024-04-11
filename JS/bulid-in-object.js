// console.log("Hello");
// console.dir(Date);
// console.log(Date.UTC(2024));
// console.log(Date.now());
// console.log(Date.parse("2003-11-17"));

// console.dir(d.toDateString());
// console.dir(d.toTimeString());
// console.dir(d.toLocaleDateString());
// console.dir(d.toLocaleTimeString());

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getMinutes());
// console.log(d.getSeconds());
// console.log(d.getMilliseconds());

// console.log(d.getTime());

// console.log(d);

// console.dir(Date);
// const d = new Date();
// console.log(d);
// d.setHours(d.getHours()+300);
// console.log(d);

// console.log(d.toLocaleDateString());
// d.setMonth(d.getMonth()+4);
// console.log(d.toLocaleDateString());

// console.log(d.toLocaleDateString());
// d.setDate(d.getDate()+25);
// console.log(d.toLocaleDateString());

// const md = new Date("2020-12-15");
// console.log(md.toLocaleDateString());
// md.setDate(md.getDate()+1000);
// console.log(md.toLocaleDateString());

// const myName = "Kaung Sike";
// console.log(myName);

// console.dir(String);

// console.log(String.fromCharCode(65,78,84));

// const st = new String("               San Gyi Dr Pr Byar          ");
// console.log(st.length);
// console.log(st.length);
// console.log(st.substr(0,3));
// console.log(st);
// console.log(st.substring(0,7));
// console.log(st.slice(3));
// console.log(st.search("G"));
// console.log(st.replaceAll("r","x"));

// const newSt = st.trim();
// console.log(newSt.length);

// const st = "AA";

// console.log(st.padStart(4,0));
// console.log(st.padEnd(5,"x"));

// String to Array
// const st = new String("San Gyi Dr Pr Byar");
// console.log(st.split(" "));

// console.dir(Number);
// console.dir(Number.MAX_SAFE_INTEGER);
// console.dir(Number.MAX_VALUE);
// console.dir(Number.MIN_VALUE);

// console.log(Number.isNaN(undefined/2));

// console.log(Number.isNaN(5/3));

// console.log(5/0);

// console.log(Number.isFinite(5/1));
//  console.log(Number.isInteger(123.6));

// console.log(Number.parseFloat(14.1));
// console.log(Number.parseInt(123.344));

// console.log(Number.parseInt("123sd"));
// console.log(Number.parseFloat("121.0013s"));


// const n = new Number(400000.231);

// console.log(n);
// console.log(n.toFixed(3));
// console.log(n.toExponential());
// console.log(n.toString());

// console.dir(Math);

// const circleArea = function(radius){
//     this.r=radius;
//     return Math.PI*r**2;
// }

// console.log(circleArea(2));

// console.log(Math.floor(5.68));
// console.log(Math.ceil(5.1));

// console.log((Math.random()*10).toFixed(2));

// console.log(parseInt("1200Kyats"));
// console.log(window);

// const person = {
//     firstName : "John",
//     lsatName : "Doe",
//     age : 30,
// };

// console.dir(Object);
// console.log(person);
// console.log(Object.values(person));

// function run(x,y){
//     return x+y;
// }

// console.log(run(3,5));

// function rArea(r){
//     return Math.PI*r**2;
// }

// console.log(rArea(5));

// console.dir(Number);

// function ret(){
//     return "San Gyi Dr Pr";
// }

// console.log(ret());


// console.dir(Array);

// const arr  = new Array(1,2,3,4,5,6,7,8,9);

// console.log(arr);

// const a = new Array("Banana","Apple")

// console.log(a);

const fruits = ["Apple","Mango","Banana","Kiwi","Orange","Coconut","Watermelon","Grapes","Peach","Strawberry"];

// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.join(" | "));

// fruits.unshift("Wow");

// console.log(fruits);

// fruits.shift();

// console.log(fruits);

// fruits.push("Wow");

// console.log(fruits);

// fruits.pop();

// console.log(fruits);

// fruits.sort();

// console.log(fruits);

const complexArray = ["aaa",123,122.4,"$wfe","ABC","!1"];
// console.log(complexArray);

// complexArray.sort();

// console.log(complexArray);

// complexArray.reverse();

// console.log(complexArray);

// console.log(fruits.isArray());

// console.dir(Array.isArray([]));

// const chars = ["a","b","c","d"];
// const numbs = [1,3,4,6,3,6];

// const result = chars.concat(numbs).concat(fruits);


// console.log(result);


// console.log(fruits.concat(numbs).concat(chars));

// const result = [...chars,...fruits,...numbs]

// console.log(result);

// const obj = {a:"aaa",b:"bbb",c:"ccc"};

// const myObj = {...obj};

// console.log(myObj);

// const sumAll = function(...a){
    // console.log(a); 
//     let total = 0;
//     for(x of a){
//         total +=x;
//     }
//     return total;
// }

// console.log(sumAll(...numbs));








const chars = ["a","b","c","d"];
const numbs = [1,3,4,6,3,6];

// numbs.map(function(el){
//     console.log(el);
// });

// console.log(numbs);
// const r = numbs.map(function(el){
//     // console.log(el);
//     return el*3;
// });

// console.log(r);

const gadgets = [
    {id:1,name:"Phone",price:11111,rating:3.5},
    {id:2,name:"Car",price:134531111,rating:5.5},
    {id:3,name:"Airplane",price:11111,rating:3.7},
    {id:4,name:"Laptop",price:19171,rating:5.5},
    {id:5,name:"Ball",price:111,rating:7.5},
    {id:6,name:"Shoe",price:144,rating:2.4},
];

console.table(gadgets);

// console.table(gadgets.reduce(function(pv,cv){
//     console.table(pv,cv);
// }));

// const saleGadgets = gadgets.map(function(el){
//     el.price = el.price+0.99;
//     el.rating = el.rating+3;
//     return el;
// });

// console.table(saleGadgets);

// const saleGadgets = gadgets.filter(function(el){
//     return el.name=="Phone";
// })

// console.table(saleGadgets);

// console.log(gadgets.find(function(el){
//     return el.name=="Phone";
// }));

// console.log(gadgets.findIndex(function(el){
//     return el.name=="Ball"
// }));







// console.log(numbs);

// const modifyArray = function(arr,logic){
//     const result = [];
//     for(el of arr){
//         result.push(logic(el));
//     }
//     return result;
// }

// console.log(modifyArray(numbs,double));

// function double(x){
//     return x =10;
// }

// const modifyArray = function(arr,y){
//     const result = [];
//     for(e of arr){
//         result.push(y(e));
//     }
//     return result;
// }

// function y(el){
//     return el+5;
// }

// console.log(modifyArray(numbs,y));



// const newArr = function(arr,logic){
//     const result = [];
//     for(el of arr){
//         result.push(logic(el));
//     }
//     return result;
// }

// function double(x){
//     return x*2;
// }

// console.log(newArr(numbs,double));

// console.dir(Array);

// console.log(chars);

// for(el of numbs){
//     console.log(el);
// }

// console.log(chars.forEach(function(el,index,arr){
//     console.log(el);
// }));

// chars.forEach(function(el){
//     console.log(el);
// })
























