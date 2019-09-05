// Sort an array, 3
// Given an array of array of numbers like:

var arr = [
  [1, 3, 4],
  [2, 4, 6, 8],
  [3, 6]
];
// Sort the array by the sum of each inner array. For the above example, the respective sums for each inner array is 8, 20, and 9. Therefore, the solution should be:

// [
//   [1, 3, 4],
//   [3, 6],
//   [2, 4, 6, 8]
// ]


const reducer = (accumulator, currentValue) => accumulator + currentValue;


let sumOrder = arr.sort(function(a, b) {
    return a.reduce(reducer) - b.reduce(reducer);
})

console.log(sumOrder);


