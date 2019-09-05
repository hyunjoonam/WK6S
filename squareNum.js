// Square the Numbers
// Write a function which takes an array of numbers as input and returns a new array containing result of squaring each of the numbers in the given array by two. Example: squareTheNumbers([1, 2, 3]) should give [1, 4, 9].

let array = [1, 2, 3];

let squareTheNumbers = array.map(function(element){
    return element*element;
})

console.log(squareTheNumbers);