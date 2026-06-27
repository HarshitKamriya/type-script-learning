// console.log("Hello Harshit");



// first program
function greet(name: string): string{
    return `Hello , ${name}`;
}

const message: string = greet("World");
console.log(message);

// npm -> package manager
// npx -> package runner

// to run this program run npx tsc filename -> it will create js file of this and after this run node filename 


// boolean
let isActive: boolean = true;
let hasPermission = false;   // typeScript infers 'boolean' type



// Number
// represents both interger and floating point
// typescript uses the same number type for all numeric values

let decimal: number = 6;
let hex: number = 0xf00d; // Hexadecimal
let binary : number = 0b1010; // binary
let octal: number = 0o744; // octal
let float: number = 3.14  // floating point



// String 
let color: string = "blue";
let fullName: string = "Harshit Kamriya";
let age : number = 18
let sentence : string = `Hello , my name is ${fullName}, and I love coding and my favourate color is${color} and i am currently ${age} years old`

// Big int
const hugeNumber = BigInt(9007199254740991);












