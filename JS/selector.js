// query selector

// tag

const els = document.querySelectorAll("li");
// for(el of els){
//     // console.log(el);
//     el.innerText  += " San gyi dr"
// }
// els.forEach(el => el.innerText += " San gyi dr")
// console.log(els);
// console.log(els);
// console.log(els[0]);
// console.log(els[1]);
// console.log(els[2]);

// id
// const yourName = document.querySelector("#yourName");
// yourName.value = "Hello World"

// class
// const lis = document.querySelectorAll("li.a")
// console.log(lis);

// attribute
// const yourName = document.querySelector(`[name=your_name]`);
// yourName.value = "Hello World"

// pseudo class


// /======================================================================/

const h1 = document.querySelector("h1");
console.dir(h1);
// set style
// h1.style.color = "red";
// h1.style.backgroundColor = "skyBlue"
// h1.style.textAlign = "center";

// get style
// console.log(h1.style);
// console.log(h1.style.backgroundColor);
// console.log(h1.style.color);

// get class
// console.log(h1.className);
// console.log(h1.classList);

// set class
// h1.className += " dd ee ff"
// console.log(h1.className);
h1.classList.add("dd")
h1.classList.add("ee")
h1.classList.add("ff")
console.log(h1.className);

h1.classList.replace("bb","xx")

// h1.classList.toggle("xx")

console.log(h1.className);

// case



// css => kebab case



// js => cameLCase


const vonzy = document.querySelector("#vonzy")

console.log(vonzy);
console.log(vonzy.getAttribute("src"));

// vonzy.src = "../images.jpg"

const changeImg = (src) => {
    vonzy.src = src
} 
const hsPhoto = document.querySelector(".hs-photo")

const toggleImg = () => {
    hsPhoto.classList.toggle("hs-photo-active")
}