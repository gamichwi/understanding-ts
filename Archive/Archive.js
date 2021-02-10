"use strict";
//basics
function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
add(number1, number2, printResult, resultPhrase);
//objects arrays enums
// const person: {
//   name: string;
//   age: number;
// } = {
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
// applies a label based on position
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
const person = {
    name: 'Gavin',
    age: 33,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
let favoriteActivities;
favoriteActivities = ['Sports'];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === Role.AUTHOR) {
    console.log('Author');
}
//functions
function addTwo(n1, n2) {
    return n1 + n2;
}
function printResultTwo(num) {
    console.log("Result:", num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResultTwo(addTwo(5, 12));
let combineValues;
combineValues = addTwo;
//combineValues = printResult;
//combineValues = 5;
console.log(combineValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);
const combinedNames = combine("Chris", "Amy", "as-text");
console.log(combinedNames);
// never
let userInput;
let userName;
userInput = 5;
userInput = "GW";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error has occured!", 500);
