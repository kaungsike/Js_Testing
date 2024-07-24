console.log("Hello Array");

// const arr = Array.from("array");
// console.log(arr)
// console.log(Array.from([1,2,3],(x) => x + x))

// const set = new Set(["san","gyi","dr","pr"])

// console.log(Array.from(set))

// const map = new Map([
//     [1,2],
//     [3,4],
//     [5,6]
// ])

// console.log(Array.from(map.keys()))

// const images = document.querySelectorAll("img");

// const sources = Array.from(images, (img) => img.src);
//  sources.map((source) => {
//     // const a = source.startsWith("http://");
//     console.log(source.startsWith("http:"))
// })

// console.log(Array.from({length : 5},(v,i) => ++i))

const arr = []

console.log(arr)

const run = Array.from({length:5},(_,i) => ++i );

run.map((r) => arr.push(r))

console.log(arr)