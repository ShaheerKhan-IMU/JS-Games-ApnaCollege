console.log("Hello, Welcome!");
var Lastname = 'Khan';
let firstName = 'Shaheer'; //let is much better than VAR bcz can be recall anytime anywhere
let midName = 'Muhammad';
console.log('Your Name is: ');
console.log(firstName +' '+ midName +' '+ Lastname);

let name = 'zafar'; //string
let height = 30.32; //number like integer, float etc
let male = true; //boolean
let available = undefined;
let selectedColor = null;
 
// typeof is used to check the type of data like type() in python
 
const age = 20;
console.log(firstName + ' age: ' + age);

//OBJECTS
let person = {
    name: 'iftikhar',
    age: 20
};
person.age = 35.3;
person['name'] = 'zubair';
console.log(person);
console.log(person.age);
console.log(typeof person.age);

let array = ['red', 'blue'];
console.log(array);
array[1] = 'black';
array[2] = 'white';
array[3] = 30;
console.log(array);
console.log(array[3]);
console.log(typeof array[3]);
console.log(array.length);

function greets(name){
    console.log('Hello ' + name);
}
greets('zafar');

function sq(n){
    console.log(n*n);
}
sq(6)


// let Username = window.prompt("Whats your Username?");
// console.log(Username);

// let Username;
// document.getElementById('mybutton').onclick = function(){
    // Username = document.getElementById('myinput').value;    
//     alert("Button clicked!");
// }


const namer = prompt("Enter your name:");
      console.log("Hello, " + namer);