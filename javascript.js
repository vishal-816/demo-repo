 // 1.ways to print in js
//  console.log("hello world")
//  // alert("shreya")
//  document.write("this is my document")

//  // 2.js console api 
//  console.warn("stay single")
// console.error("error816");

// 3.js variables
// what are variables = container to store data values.
// var number1 = 26;
// var number2 = 09;
// console.log(number1+number2);

// 4.data tyoes in Js
// numbers 
// var num1 = 45;
// var num2 = 55;
// console.log(num1+num2);

// string
// var str1 = "this is a string";
// var str2 = "this is also a string";
// console.log(str1+str2);

// objects
// var marks ={
//     vishal : 26,
//     shreya : 09,
//     robert : 17,
// }
// console.log(marks);

// Booleans
// var a = true;
// var b = false;
// console.log(a,b);

// var und = undefined;
// var und;
// console.log(und);

// var n = null;
// var n;
// console.log(n);

// var arr = [ 1, 2, 3, "shreya", 4, 5]
// console.log(arr);

// at a vary high level, there are two types of data types in JS 
// 1.primitive data type : undefined, null, number, string, boolean, Symbol
// 2.reference data type : arrays and objects

// operators in js 
// 1. arithematic operators
// var a = 100
// var b = 150
// console.log("the value of a+b is", a+b);
// console.log("the value of a-b", a-b);
// console.log("the value of a*b", a*b);
// console.log("the value of a/b", a/b);
 
// 2. assignment operators
// var c = b;
// // c += 10;
// // c -= 20;
// // c *= 5;
// // c /= 10;
// console.log(c);

// 3. comparison operators
// var x = 34;
// var y = 54;
// console.log(x ==y);
// console.log( x >= y);
// console.log(x <= y);
// console.log(x > y);
// console.log(x < y);

// 4. logical operators
// logical and 
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);

// logical Not
// console.log(!false);
// console.log(!true);
 
// functions in js 
// function avg(a,b){
//     c = (a+b)/2;
//     return c;
// }
// DRY = do not repeat yourself;
// c1 =avg(4,6);
// c2 =avg(14,26);
// console.log(c1,c2);

// conditionals in js 
// 1. single if statement 
// var age = 31;
// if (age > 8);
// console.log("you are not a kid");

// 2. if else statement 
// var age = 26;
// if (age > 18){
//     console.log("you can drink wine")
// }
// else {
//     console.log("you can not drink wine")
// }

// 3.if else ladder
// var age = 77;
// if (age > 18){
//     console.log("you are not a kid");
// }
// else if ( age < 18 ){
//     console.log("you are a kid ")
// }
// else if ( age > 60){
//     console.timeLog(" you are a senior citizen")
// }else if (age < 6){
//     console.log("you are a baby")
// }
// else {
//     console.log("you are a boy")
// }
// console.log("end of ladder");

// var arr =[1,2,3,4,5];
// console.log(arr);
// for (var i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }
// arr.forEach(function(element){
//     console.log(element);
// })

// use const when u dont want to change variable 
// let j=0;
// const ac =0;
// ac++;
// ac = ac+1;

// let j=10;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do{
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

// break and continue 

// var arr =[1,2,3,4,5,6,7];
// for(var i=0; i<arr.length; i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i]);
// }

// methods in arry 
// let myarr = ['fan', 'mobile','26','null','true'];
// console.log(myarr.length);
// myarr.pop();
//  used to remove last element
// myarr.shift();
// used to remove first element 
// const newLen = myarr.unshift('robert');
// console.log(newLen);
// used to add element before fisrt element 
// myarr.push('robert');  
// console.log(myarr);
// visit internet to learn more array methods 

// string methods in js
// let myfavstring = "vishal is an iitian iitian";
// console.log(myfavstring.length);
// console.log(myfavstring.indexOf('an'));
// console.log(myfavstring.lastIndexOf("iitian"));
// console.log(myfavstring.slice(1,8));
// console.log(myfavstring.replace("iitian", "engineer"));

let mydate = new Date();
// console.log(mydate);
// console.log(mydate.getHours());
// console.log(mydate.getFullYear());

// DOM manipulation
let element = document.getElementById("click");
console.log(element);

let elementclass = document.getElementsByClassName("container");
console.log(elementclass);
// elementclass[0].style.background='yellow';
elementclass[0].classList.add('bg-1');
// console.log(elementclass[0].innerHTML);
// console.log(elementclass[0].innerText);
// tn = document.getElementsByTagName('div');
// console.log(tn);
createdElement = document.createElement('p');
createdElement.innerText="this is created para";
tn[0].appendChild(createdElement);

createdElement2 = document.createElement('b','i');
createdElement2.innerText = "this is a created bold and italic";
tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); ----> removes an element 


// selecting using query 
sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);

function clicked(){
    console.log('clicked');
}
// window.onload = function(){
//     console.log('The document was loaded');
// }

// events in js 
firstcontainer.addeventlistner('click', function(){
    console.log("clicked on container")
})














