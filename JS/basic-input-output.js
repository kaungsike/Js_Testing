// area function

const area = (w,h) => w*h;

// console.log(area(3,4));

// output
// window.alert("San gyi dr pr")

// input
// const width= window.prompt("Width")
// const height =window.prompt("Height");

// document.write(area(width,height))
// window.alert(area(width,height))

// const x = window.confirm("Sir pp lr");
// window.alert(x? "Sir pp" : "ma sir ya dil bu");

// console.dir(window);

// console.dir(window.document);

// document.write("Hello")
// document.write("Kaung Sike Pr")
// console.log(document);

const heading = document.getElementById("heading")
const btn = document.getElementById("btn")
const list1 = document.getElementById("list-1")
const lists = document.getElementById("lists")
const textInput = document.getElementById("textInput")

// console.dir(heading);
// console.dir(heading.innerText);
// console.dir(heading.innerHTML);

// console.dir(btn);
// console.dir(btn.innerText);
// console.dir(btn.innerHTML);

// console.dir(lists);
// console.dir(lists.innerText);
// console.dir(lists.innerHTML);
// console.log(btn);
// console.log(list1);
  const run = () => {
    //  input
    const data = textInput.value

    heading.innerText = data
    textInput.value = null
  }







