// window.console.log('Hello');
// console.log('Hello');
// window.alert('hello');
// alert('hello');
// window.prompt('Enter value');
// prompt('Enter value'); // window works as browser so because google itself make it for us so we dont have to mention it again and again.

// console.dir(window.document);//.dir used to show the properties in the console
// console.dir(window.document.body);
// document.body.background = 'green'; //we use these document. to change the things directly  




// let h1 = document.getElementById('h1'); //ID is always unique
// let p = document.getElementsByClassName('p'); //className can more multiple, its like an array
// let B = document.getElementsByTagName('button'); // tags to get anything, its like an array
// console.log(h1, p, B);
// console.dir(h1, p, B);


// let QS1 = document.querySelector('h1');// its used to get first id,class and tagname, for class use .class, and #id
// let QS2 = document.querySelectorAll('#h1');// its used to get all id, and class only not tagname, for class use .class, and #id
// let tag = document.querySelector('#h1').tagName;// it will return the tag i am using from this #ID.
// // console.dir(QS1);
// // console.dir(QS2);
// console.log(tag);

// we also have first child and last we can access from like arr[0] like by any index. like in a tree with children and siblings

// let divTag = document.querySelector('div').innerText; // it will display the text inside all tag under the div tags text in a string node like here its not ALL so it will get the first div tag
// let divTag2 = document.querySelectorAll('div')[1].innerText;// here with ALL i can get the specific div tag as well
// console.log(divTag2);


// let divTagHTML = document.querySelector('div').innerHTML; // it will display the text inside all tags in a string node under the div tag like here its not ALL so it will get the first div tag
// let divTagHTML2 = document.querySelectorAll('div')[1].innerHTML;// here with ALL i can get the specific div tag as well
// console.log(divTagHTML2);
// // divTagHTML.innerHTML = <h1>Hello from innerHTML tag add up</h1> // do add any tag directly

// let h1hidden = document.querySelector('.hiddenh1').textContent;// we also have .textContent it will show every text when if the text is invisible it will show us,
// console.log(h1hidden);// here i used the visiblity to hidden but even though it shows to me


//project
// let h1str = ' from NGES';
// let appendOne = document.querySelector('#jspara').innerText;
// // console.log(appendOne);
// console.log(appendOne + h1str);


let boxDIVS = document.querySelectorAll('.box');
// boxDIVS[0].innerText = 'Box 1';
// boxDIVS[1].innerText = 'Box 2';
// boxDIVS[2].innerText = 'Box 3';



// let index = 0;
// for(let div of boxDIVS){
//     div.innerText = `This is Box ${index} by ofLOOP`;
//     index++;
// }




//DOM2
// let para = document.querySelectorAll('p')[1];
// console.log(para.innerText);
// console.log(para.getAttribute("name")); // getAttribute is used to get the attributes like id, class or anything
// para.setAttribute('name', 'Iftikhar'); //setAttribute(att, value to be chnaged)
// console.log(para.getAttribute("name"));



// let pstyles = document.querySelector('p');
// console.log(pstyles.style);
// // pstyles.style.visibility = 'hidden';
// pstyles.innerText = 'Hello bhai'; // we can chnage and access the whole styles CSS of any class



// let btn = document.createElement('button');
// btn.innerHTML = '<i>Hello Click Me</i>';
// let div5 = document.querySelectorAll('div')[6];
// // let div5 = document.querySelector('#btn')[6];
// // div5.append(btn); //after at last
// // div5.prepend(btn); // before the tag
// // div5.before(btn);// just before
// div5.after(btn); // just after


// let clickmebtn = document.querySelector('#clickmebtn');
// clickmebtn.innerHTML = "<i>Zafar</i>";
// clickmebtn.remove(); // to remove any tag or sometime



//Project
// let body = document.querySelector('body');
// let newBTN = document.createElement('button');
// newBTN.innerHTML = '<i>Click Me!</i>';
// newBTN.style.background = 'red';
// newBTN.style.color = 'white';
// body.prepend(newBTN);



// let pFinal = document.querySelector('.FinalP');
// pFinal.classList.add('newFinalP');//Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods. You can test whether the element contains a given class using the classList.contains() method. We can even add or remove etc many classes at a time



//Events

let JShandler = document.querySelector('#jshandler'); //node.event = () => {}

// JShandler.ondblclick = (e) => {//dblclick is for 2x click which oncilck is simple one
//     console.log(e);
    //  console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);
// }

// JShandler.onmouseover = (evt) => {//dblclick is for 2x click which oncilck is simple one
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }



JShandler.addEventListener('click', () => {
    console.log("hello #1");
})
let handler2 = () => {
    console.log("hello #2");
}
JShandler.addEventListener('click', handler2);

//if use removeEventListener
JShandler.removeEventListener('click', handler2); //it will recognize the handler2 function easily



// //Project
// let projectevent = document.querySelector('#projectEvent');
// let body = document.querySelector('body');
// let mode = 'dark';
// projectevent.addEventListener('click', () => {
// if(mode === 'dark'){
//     mode = 'Light'
//     // body.style.background = 'white';
//     body.classList.add('light');
//     body.classList.remove('dark');
// } else{
//     mode = 'dark';
//     // body.style.background = 'black';
//     body.classList.add('dark');
//     body.classList.remove('light');
// }
// console.log(mode);
// })




const div = document.createElement("div");
div.className = "foo";

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("another-class");

// <div class="another-class"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");






function simulateClick() {
  // Get the element to send a click event
  const cb = document.getElementById("checkbox");

  // Create a synthetic click MouseEvent
  let evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // Send the event to the checkbox element
  cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener("click", simulateClick);
