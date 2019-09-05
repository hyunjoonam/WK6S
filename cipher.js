// Bonus: Caesar Cipher
// Rewrite this cipher function without using a loop, using the help of array's map, join, and string's split method.

// function cipher(text) {
//   var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
//   var result = '';
//   for (var i = 0; i < text.length; i++) {
//     var chr = text[i];
//     var idx = alphabet.indexOf(chr.toUpperCase());
//     var newIdx = idx + 13;
//     if (newIdx >= alphabet.length) {
//       newIdx -= 26;
//     }
//     result += alphabet[newIdx];
//   }
//   return result;
// }

// // You can assume that the text is only one word, all letters are capitalized, and the offset is always 13
// var encrypted = cipher('GENIUS');
// // TRAVHF
// console.log(encrypted);

let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');

function cipher(input){
    let arrayed = input.split('');
    let cipheredArr = arrayed.map(function(letter){
        let indx = alphabet.indexOf(letter);
        let newIndx = indx + 13;
        if (newIndx >= alphabet.length) {
            newIndx -= 26;
        } 
        return alphabet[newIndx];
    })
    console.log(cipheredArr.join(''))
}

cipher('GENIUS')