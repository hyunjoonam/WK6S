// Acronym
// Write a function acronym that takes an array of words as argument and returns the acronym of the words. Use the reduce method to do this.

// > acronym(['very', 'important', 'person'])
// 'VIP'
// > acronym(['national', 'aeronautics', 'space', 'administration'])
// 'NASA'



function acronym(array){
    let splitWord = array.reduce((a, b) => a + b[0], '');
    console.log(splitWord.toUpperCase());
}
acronym(['very', 'important', 'person']);
acronym(['national', 'aeronautics', 'space', 'Administration']);