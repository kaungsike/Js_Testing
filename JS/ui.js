const app = document.querySelector("#app");

const heading = document.createElement("h1");
heading.innerText = "Min Ka Lr Pr";
heading.classList.add("heading");
heading.id = "myHeading";
heading.title = "My Heading";
heading.setAttribute("data-id",3)
// console.log(heading);


const lists = document.createElement("ul");
console.log(lists);

const list1 = document.createElement("li");
list1.innerText = "Apple"
const list2 = document.createElement("li");
list2.innerText = "Orange"
const list3 = document.createElement("li");
list3.innerText = "Mango"
const list4 = document.createElement("li");
list4.innerText = "Lemon";

const textInput = document.createElement("input");
textInput.type = "text";
textInput.placeholder = "Say Something...";
console.log(textInput);

const createList = (input) => {
    const list = document.createElement("li");
    list.innerText = input;
    lists.append(list)
    return list
}

const btn = document.createElement("button");
btn.innerText = "Sent";
btn.onclick = () => {
    // console.log("Hello World");
    console.log(textInput.value);
    lists.append(createList(textInput.value))
    textInput.value = null;
}
// console.dir(btn);

// append li to ul
// lists.append(list1,list2,list3,list4);


// append to doc
app.append(heading);
// app.append(lists);
// lists.before(heading)
// app.append(textInput);
// app.append(btn);

// const createOption = (text,value) => {
//     const option = document.createElement("option");
//     option.innerText = text;
//     option.value = value;
//     return option;
// }

// console.log(createOption("Myanmar","MM"));

console.log(new Option("Myanmar","Mm"));

const img = new Image();
img.src = "../a.jpg";
console.log(img);

app.append(img)