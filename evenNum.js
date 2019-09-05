// Even Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the even numbers in the given array.

let array = [1, 2, 3, 4, 5, 6, 7, 8];

let evenNum = array.filter(function(element){
    return element%2 == 0;
})

console.log(evenNum);