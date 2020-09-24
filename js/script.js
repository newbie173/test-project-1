"use strict";

console.log('Hello World! \n----------------');


console.log('Sum result is ' + sum(50, 10));

function sum(a, b){
    return a + b;
}


console.log('Sum result is ' + sum(5, 10));


function pow (x, y){
    return Math.pow(x,y);
}

console.log('Pow result is ' + pow(2, 5));

let result = 0;
let i = 0;
const base = 5;

do {
    result = pow(base, i);
    console.log(base + '^' + i + ' = ' + result);
    i++;
} while(i <= 39);

const id = Symbol("id");
console.log(id);

const Arseniy = {
    "name" : "Arseniy",
    "surname" : "Danilin",
    "phone" : 12563,
    "age" : Math.random(10),
    "isAggressive" : true
};

const Ann = {
    "name" : "Ann",
    "surname" : "Petrova",
    "phone" : 202063,
    "age" : Math.random(20),
    "isAggressive" : false
};

confirm("Are you ready?");

const answer = confirm("Are you here?");

console.log("Answer is " + answer);

const Dan = {};

Dan.name = prompt("Please enter Your name","");
Dan.surname = prompt("Please enter Your surname","");
Dan.phone = prompt("Please enter Your phone","");
Dan.age = prompt("Please enter Your age","");
Dan.isAggressive = prompt("Are Your aggressive true or false","");
console.log(Dan);
document.write(Dan.name + " " + Dan.surname);

const page = 3;
const category = "shooter";

console.log(`https://game-pro.ru/${category}?page=${page}`);

const username = "Piter Hate";
console.log(`Your authorized as ${username}`);

let test = 10;
let res1 = test++ + 1;
let res2 = ++test + 1;

console.log(res1);
console.log(res2);

console.log("Prefix " + ++test);
console.log("Postfix " + test++);

