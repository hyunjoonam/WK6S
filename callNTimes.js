// n times
// You will write a function callNTimes that takes two arguments: times as a number, and fun as a function. It will call that function for that many times. Example:

// > callNTimes(5, hello)
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// Hello, world!
// You are allowed to use a loop in the implementation of callNTimes.
let hello = 'Hello, world!';
function callNTimes(num, hello) {
    for (let i=0; i<num; i++) {
        console.log(hello);
    }
}

callNTimes(5, hello);