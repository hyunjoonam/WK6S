// Bonus: forEach
// Implement your own custom map function which takes two arguments: an array arr and a function fun. 
// It will return a new array, with each of its results being the result of calling fun with each array element.


var arr = [
    { name: 'Bob' },
    { name:'Alice' },
    { name:'Joe' }
  ];
  
map(arr, function(person) {
console.log('Hello, ' + person.name + '!');
});

function map(arr, fun){
    let newArr = [];
    for (let i=0; i<arr.length; i++){
        let newEle = fun(arr[i]);
        newArr.push(newEle);
    }
}