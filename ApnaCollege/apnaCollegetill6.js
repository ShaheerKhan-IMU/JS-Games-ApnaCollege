// console.log('Welcome to my Website');

// age = 20;
// price = 91.4;
// x=null;
// y=undefined;
// isFollow = true;

// // console.log(x);

// price = 1000.41 
// // JS is dynamic typed language where u dont have to Specify whether its a INT or String like C++ or java, it will detect itself. 
// // And also it will use the new value if called later

// fname$ = 'Zafar'; //no space while variable name is not allowed
// FNAM12E = 'Khan'
// // console.log(fname$);
// // console.log(FNAM12E);


// var age = 12;
// var age = 20;
// var age = 75; //VAR can be updated and declared but its confusing so we dont use it


// let height = 9846;
// height = 10000; // let can be updated but cannot be declared again BCZ of LET

// const PI = 3.14; //CONST value cannot be chnaged or declared

// // {
// //     let a = 5;
// //     console.log(a);
// // }
// // {
// //     let a = 10;
// //     console.log(a);
// // }

// // console.log(typeof(price))




// const object = {
//     fullName : 'Shaheer',
//     age : 20,
//     gpa : 3.2
// }
// console.log(object['age']);
// object['age'] = object['age'] + 1;

// console.log(object.age);






// Chap2
// let a = 5;
// let b = 7;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b); //remiander modulus
// console.log(a**b); //power



// console.log(a++);//First use the same then increment it
// console.log(a); //same for a-- and --a
// console.log(++a);//pre direct increment


// a += 1; //a=a+1 same for -,*,/,%,**

// console.log(a==b); //equal and also we have <,>,<=,>=, AND &&, OR ||, NOT!
// console.log(a!=b)  //not equal and === means strict version same as !==

// console.log(a===6 && b===7);

//Conditional STATEMENTS

// let num = 61;
// if(num % 2 === 0){
//     console.log(num, 'is Even');
// } else{
//     console.log(num, 'is Odd');
// }

// num >= 61 ? console.log('greater') : console.log('Lesser'); // conditiond ? true output : false output


// let expr = 'papayas';
// switch(expr){
//     case 'orange': 
//     console.log('Orange');
//     break;
//     case 'papayas': 
//     console.log('papayas');
//     break;
//     default: 
//     console.log('default');
// }

//Project 1
// alert('Please Enter the value: ');
// let input = prompt("Please enter a number: ");
// if(input % 5 === 0){
//     console.log('Its divisible by 5');
// } else{
//     console.log("Its NOT");
// }


//Project 2

// let marks = prompt("Enter your Marks: ");
// if(marks >= 60 && marks <70){
//     console.log("Grade is: 'C'");
// } else if(marks >= 70 && marks <80){
//     console.log("Grade is: 'B'")
// } else if(marks > 80){
//     console.log("Grade is: 'A'")
// } else{
//     console.log("Grade is: 'FAIL'")
// }









// LOOPS chapter 3
// for (let i = 1; i <=10000; i++){
//     console.log(i ,'Hello');
// }
// console.log('Loop has ended');




// let sum = 0;
// for (let i = 0; i <= 6; i++){
//     sum += i;
// }
// console.log(sum);



// let i = 0; //initiliazing
// while(i <6){ //1=5
//  console.log('Heelloo bhai');
//  i++;
// } // it works from 0 to 5 so total 6



// let i =1;
// do{
//     console.log('Heelo bhai');
//     i++;
// } while(i<=5);




// let sum = 0;
// let str = 'IFTIKHAR';
// for ( let val of str){
//     console.log(val);
//     sum++;
// } console.log(sum);





// let student = {
//     name : 'Shaheer',
//     age : 20,
//     city: 'Karachi'
// }
//  for(let key in student){
//     console.log(key, " = ", student[key]);
//  }



// Project 1
// for(let i = 0; i <= 100; i++){
//     if(i % 2=== 0){
//         console.log(i);
//     }
// }


//project 2
// let RandomNumber = Math.floor(Math.random() * 101); //random from 0 to 100
// let Guess = prompt('Enter your Guess BT (0-100): ');
// while(Guess != RandomNumber){
//     let Guess = prompt('Enter your Guess BT (0-100): ');
//     if(Guess > RandomNumber){
//         console.log('Guess is Greater than the Random one.');
//     } else if(Guess< RandomNumber){
//         console.log('Guess is Less than the Random one.');
//     } else{
//         console.log("Its a match, ", RandomNumber);
//     }
// }    



// //String
// let mySTR = 'Hashir BHai';
// console.log(mySTR.length, mySTR[0], mySTR[3]);

// //String Literals
// let obj = {
//     item : 'Pen',
//     price : 19
// }
// let stringFor = `The price of ${obj.item} is ${obj.price} rupees of QTY:${1+2+3+1}`;
// console.log(stringFor);

// let company = 'nextgen\nesol';
// let tab = 'nextgen\tesol'; //\n or \t are escape methods
// console.log(length(company), company);
// console.log(tab);

// let app = 'nextgenesol';
// let APP = app.toUpperCase();
// console.log(APP);
// console.log(APP.toLowerCase());

// let trims = "           jbvej     jcbsa              appp                      ";
// console.log(trims.trim()); // removes all spaces from back and front


// let strs = 'Hello Bhai';
// console.log(strs.slice(1,6)); //(start, end) end is not included
// console.log(strs.slice(2)); //after 2 all included with 2 as well


// let a = 'hello';
// let b = 'Bhai';
// console.log(a.concat(b));

// let h = 'hello';
// console.log((h.replace('h','y')).concat('w'));
// console.log(h.replaceAll('l', 's'));
// console.log(h.charAt(1));//e


// //project
// let fillNAME = prompt("Enter your Name: ");
// console.log(('@',fillNAME).concat(fillNAME.length));


// const browserType = "mozilla";

// if (browserType.includes("zilla")) {// also have endsWith and startsWith as well to check it
//   console.log("Found zilla!");
// } else {
//   console.log("No zilla here!");
// }




// Chap4 Array
// let marks = [21,5,26,36,96]; // Arrays are muttable while String are not
// let info = ['Shaheer', 20, 807];
// console.log(marks, marks.length);
// console.log(info[0]); //slicing from 0 to any
// console.log(info[100]);//undefined
// info[0] = 'maaz';
// console.log(info);

let cities = ['karachi', 'lahore', 'quetta', 'islamabad'];//length is 4 here
// for(let index = 0; index < cities.length; index++){// stopping is from 0 to 3
//     console.log(cities[index].toUpperCase());
//     console.log(cities[index].toLowerCase());
// }
// for(let city of cities){
//     console.log(city);
// }

//project 1
// let studentMarks = [52, 25, 84, 82, 92, 12];
// let sumMarks = 0;
// for(let i = 0; i < studentMarks.length; i++){
//     sumMarks += studentMarks[i];
// }
// let final = Math.round(sumMarks/studentMarks.length);
// console.log(`'${final}'`);



//project2
let prices = [250, 625, 300, 900, 50];
// for(let itemPrice of prices){
//     discountedPrice = itemPrice - (itemPrice * 0.1);
//     console.log(itemPrice * 0.1);
//     console.log(`Disounted Prices '${itemPrice = discountedPrice}'`);
// }

// console.log(prices.push(1000321, "Shaheer"));//push adds to back while unshift adds to front
// console.log(prices.pop());//pop deletes to from back while shift deletes from front
// console.log(prices.toString());
// let items = ['potato', 'aloo'];
// console.log(prices.concat(items));
// console.log(prices.slice(1,4));
// let final = prices.splice(1, 2, 101);//(starting, delete from start, add element any will be added from starting)
// console.log(final);


// let companies = ['bloomberg', 'microsoft', 'uber', 'google', 'IBM', 'Netflix'];
// companies.shift();
// companies.splice(1,1,'OLA');
// companies.push('Amazon');
// console.log(`Final Answer: ${companies}`);





// //Functions
// function sum(x, y){ //variables X and Y can only be called inside this function
//     return x + y;
// }
// console.log(sum(3,5));

//Arrow Function  =========>>>>>>>>>>>    () => {do}
// const arrowSum = (x,y) => {
//     return x + y;
// }
// console.log(arrowSum(9,12));

// const printHello = () => {
//     console.log('Hello');
// }
// printHello();



// //project
// function strVowel(val){
//     let sum = 0;
//     for(let i = 0; i < val.length; i++){
//         if(val[i] == 'a' || val[i] == 'e' || val[i] == 'i' ||val[i] == 'o' || val[i] == 'u'){
//             sum++;
//         }
//     }
//     console.log(sum);
// }
// strVowel("Hellobhai");

// //arrow function
// const ArrowVowel = (val) => {
//     let sum = 0;
//     for(let i = 0; i < val.length; i++){
//         if(val[i] == 'a' || val[i] == 'e' || val[i] == 'i' ||val[i] == 'o' || val[i] == 'u'){
//             sum++;
//         }
//     }
//     console.log(sum);
// }
// ArrowVowel("Hellobhai");


let arr = [1,2,3,4,5,6]; //ForEach only works on arrays
// arr.forEach(function print(val){// val is from arr
//     console.log(val);
// })


// //arrow ForEach (val, idx, array) if you want something specific ForEach is used for printing the values or calculations
// arr.forEach((val) => { // val is from arr
//     console.log(`Square of ${val} is ${val*val}`);
// })



// let newarr = arr.map((val) => {//arr.map(function(value,index,array)) this.map() is used to create a new array
//     return val;
// })
// console.log(newarr);



// let evenArr = arr.filter((val) => {//its also used to create a new array
//     // return val % 2 === 0;
//     return val >= 3;
// })
// console. log(evenArr);



// const reduceArr = arr.reduce((previous, current) => {
//     // return previous + current;
//     return previous > current ? previous : current;//returns largest number
// }) 
// console.log(reduceArr);



//project 
// let array = [100, 91,41,15 ,66, 72,13,97,19];
// let arr90 = array.filter((val) => {
//     return val > 90;
// })
// console.log(arr90);


let input = prompt("Enter the 'n' value: ");
let array = [];
for(let i = 1; i <= input; i++){
    array.push(i);
}
console.log(`Simple Array: [${array}]`);
let sumArray = array.reduce((prev, curr) => {
    return prev + curr;
})
let mulArray = array.reduce((prev, curr) => {
    return prev * curr;
})
console.log(`Sum of Arrays: ${sumArray}`);
console.log(`Mul of Arrays: ${mulArray}`);