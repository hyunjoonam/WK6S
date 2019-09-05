// Sum an array
// Write a function sum that takes an array of numbers as argument and returns the sum of those numbers. Use the reduce method to do this.

// > sum([1, 2, 3])
// 6


function sum(array) {
    let sumNum = array.reduce((a, b) => a + b, 0);
    console.log(sumNum);
}

sum([1,2,3,4]);
