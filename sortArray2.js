// Sort an array, 2
// Sort the same array, but not by alphabetically order, but by how long each name is, shortest name first.


var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];

let makingArray = people.sort(function(a, b) {
    
    return a.length - b.length;
})

console.log(makingArray);
