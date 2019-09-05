// Bonus: forEach
// Implement your own custom forEach function which takes two arguments: an array arr and a function fun. 
// It will call fun passing each item in arr to fun as the first argument. Example:

var arr = [
  { name: 'Bob' },
  { name:'Alice' },
  { name:'Joe' }
];

forEach(arr, function(person) {
  console.log('Hello, ' + person.name + '!');
});
// The above program will print:

// Hello, Bob!
// Hello, Alice!
// Hello, Joe!
// You can use a loop in the implementation of this function.

// function forEach(arr, fun){
//     for (let i=0; i<arr.length; i++){
//         console.log('Hello, ' + arr[i]['name'] + '!');
//     }
// }

// forEach(arr)

function forEach(arr, fun){
    for (let i=0; i<arr.length; i++){
        fun(arr[i]);
    }
}

