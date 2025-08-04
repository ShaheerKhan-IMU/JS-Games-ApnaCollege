// let employee = {
//     fullName :'Shaheer',
//     salary:214,
//     printsalary: function(){
//         return(this.salary);
//     }
// }
// console.log(employee.printsalary);



// // every object like these and also arrays, they have there own builtin functions as well like push() like many more as well
// let functions = { //every function is usable here
//     calctax(){
//         console.log('tax is 10%');
//     },
//     calctax2 : function(){
//         console.log('calctax2');
//     },
//     calctax3 : () => {
//         console.log('calctax3');
//     }
// }
// console.log(functions.calctax2());//it will give concole value


// let maaz = {
//     salary : 5000,
//     caltax() {
//         console.log('tax is 20%');
//     }
// }
// maaz.__proto__ = functions //by this we can use any object in different object but if the objects are same in the both objects then it will prefer the own one.
// console.log(maaz.caltax());





// //OOP ....       class objectName {constructor(){} object(){}}
// class toyota {
//     constructor(brand, mileage){//constructor is default function that we can create if we want otherwise system will create it on its own. Its use to display any deafult like without any calling any function. It mainly used to initaizes the variables
//         this.brand = brand;
//         this.mileage = mileage;
//         console.log('New car Added: ' + this.brand + " with mileage: " + this.mileage);
//     }
//     start() {
//         console.log('Start');
//     }
//     stop() {
//         console.log('Stop');
//     }
// }

// let fortuner = new toyota('Fortuner', 10);// we are passing the objects to the constructor
// fortuner.start();
// fortuner.stop();



// let Lexus = new toyota('Lexus', 14);
// Lexus.start();
// Lexus.stop();



// //Inheritance in OOP
// class person {
//     constructor(profession){//every variable will be passed from the constructor
//         this.profession = profession;
//         console.log('Profession of this Person is ' + this.profession);
//     }
//     eat(){
//         console.log('eat');
//     }
//     sleep(){
//         console.log('sleep');
//     }
// }

// class engineer extends person{//it inherits from person class, so engineer class is the object child of person parent, it prefers the child function if function name is same in both the parent and the child and its also overriding whenever two same name objects came
//     constructor(major){
//         super();// its used to call the parent constructor first then call the child contructor
//         this.major = major;
//     }
//     work(){
//         super.eat();// to call anything from parent in any other child object
//         console.log('work');
//     }
// }
// let shaheer = new engineer('Engineer');
// shaheer.work();




//project
// class user{
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log('Name: ' + this.name);
//         console.log('Email: ' + this.email);
//     }
// }

// class admin extends user{
//     constructor(){
//         let editedname = prompt("Enter new Name: ");
//         let editedemail = prompt("Enter new Email: ");
//         super(editedname, editedemail);
//     }
//     editData(){
//         console.log('Edited Name: ' + this.name);
//         console.log('Edited Email: ' + this.email);
//     }
// }

// let hashir = new admin('Hashir', 'hashir@std.pk');
// let hafsah = new admin('hafsah', 'hafsah@std.pk');
// hashir.viewData();
// hafsah.viewData();
// hashir.editData();
// hafsah.editData();





// try{
//     console.log(6+a);
// } catch(err){
//     console.log(err);
// }








// //ASYNC
// console.log('one');// its synchoronous programming where its works in a proper flow like one then two and then last one
// console.log('two');
// console.log('three');


// // function print(){ //using its value
// //     console.log('hello');
// // }

// console.log('one');// its synchoronous programming where its works in a proper flow like one then two and then last one
// console.log('two');
// // setTimeout(print(), 16000); //2s == 2000ms
// setTimeout(() => {console.log('Hello')}, 16000); //2s == 2000ms// using direct arrow function here, its also a example fo callback bcz i am using function into another function
// console.log('three');
// console.log('four');// its Asynchoronus programming where it willnot wait for 4ms then print other, it will print all and then after 4s it will print hello as well but doesnt wait ofr too long and doesnt excute the fastest one.


// //CALLBACKS
// function sum(a,b){
//     return a+b;
// }
// let calc = (a,b,sum) => {// its also a example fo callback bcz i am using function into another function
//     return sum(a,b);
// }
// console.log(calc(1,2,sum));




// // CALLBACKS HELL - its like a hell bcz its very confusing
// function print(data, newdata) {
//     setTimeout(
//         () => {
//             console.log('Data: ', data);
//             if(newdata){
//                 newdata();
//             }
//         }, 2000);
// }
// print(1, () => {
//     console.log('Waiting for the next one.')
//     print(2, () => {
//         console.log('Waiting for the next one.')
//         print(3, () => {
//             console.log('Waiting for the next one.')
//             print(4);
//         })
//     })
// })




//promise
// let promise = new Promise((resolve, reject) => {//PROMISE has three statuses like pending, resulve and rejected. rejected means some error occurred.
//     console.log("Hello");
//     resolve('Suceess');// resolve and reject are builting functions by JS
//     reject("error occured");
// })



// function print(data, newdata) {
//     return new Promise((resolve, reject) => {
// setTimeout(
//         () => {
//             console.log('Data: ', data);
//             resolve('Suceess');
//             reject("error occured");
//             if(newdata){
//                 newdata();
//             }
//         }, 2000);
//     })
// }
// let ans = print(123);




// //// PROMISE CHAIN - its always better then callback hell
// function asyncfunc(data) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Data: ',data);
//             resolve('Success');
//         }, 2000);
//     })
// }

// asyncfunc(1).then((res) => { // this is prmoise chain where you use it again and again, there are some other things as well like we did above to make a chain but this way is the easiest one to do like similar to callback hell
//     console.log('Waiting for the next one....')
//     return asyncfunc(2);
// }).then((res) => {
//     console.log('Waiting for the next one....')
//     return asyncfunc(3);
// }).then((res) => {
//     console.log('Waiting for the next one....')
//     return asyncfunc(4);
// }).then((res) => {
//     console.log(res);
// })






//ASYNC AWAIT
function wadda(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data: ",data);
            resolve('Success');
       }, 1000);
    })
}
// async function hashir(){//its the best way of doing it most easiest of all. but await only works under async function
//     await wadda(1);
//     await wadda(2);
//     await wadda(3);
//     await wadda(4);
// }
// hashir(); // here we have to call the functions again which is hard but there is a way which is IIFE where you just have to do this----(function)();---- just this and u dont have to call the funtion to run, but you cannot recall this function again.


(async function hashir(){//its the best way of doing it most easiest of all. but await only works under async function
    console.log('With IIFE method')
    await wadda(1);
    await wadda(2);
    await wadda(3);
    await wadda(4);
})();//IIFE method    (function)();