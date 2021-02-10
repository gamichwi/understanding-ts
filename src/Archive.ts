//basics
function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    // if (typeof n1 !== 'number' || typeof n2 !== 'number') {
    //   throw new Error('Incorrect input!');
    // }
    const result = n1 + n2;
    if (showResult) {
      console.log(phrase + result);
    } else {
      return result;
    }
  }
  
  let number1: number;
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
    enum Role { ADMIN, READ_ONLY, AUTHOR };

    const person = {
        name: 'Gavin',
        age: 33,
        hobbies: ['Sports', 'Cooking'],
        role: Role.ADMIN
      };

      let favoriteActivities: string[];
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
function addTwo(n1: number, n2: number) {
    return n1 + n2;
  }
  
  function printResultTwo(num: number): void {
    console.log("Result:", num);
  }
  
  function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
  }
  
  printResultTwo(addTwo(5, 12));
  
  let combineValues: (a: number, b: number) => number;
  combineValues = addTwo;
  //combineValues = printResult;
  
  //combineValues = 5;
  
  console.log(combineValues(8, 8));
  
  addAndHandle(10, 20, (result) => {
      console.log(result);
  });
  
  // union aliases

  type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
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

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "GW";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error has occured!", 500);