// Positive Numbers
// Write a function which takes an array of numbers as input and returns a new array containing only the positive numbers in the given array.

let arrayOfNum = [-3, -2, -1, 0, 1, 2, 3];

let posNum = arrayOfNum.filter(function(element) {
    return element > 0;
})

console.log(posNum);