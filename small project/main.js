"use strict";
// this is an interface which create an person blue print containing 
// age as number, name  as string and say function returning string
// create an object implementing the interface
let mike = {
    age: 25,
    name: "Mike",
    say: function () {
        return "My name is " + this.name + " and I'm " + this.age + " years old";
    }
};
// this functino takes Person interface as input and calling Person say() function
function sayIt(person) {
    return person.say();
}
console.log(sayIt(mike));
document.getElementById("index").innerHTML = "Changed by TypeScript";
