// 3. Reverse a sentence or string
function reverseStr(str){
    return str.split('').reverse().join('')
}
console.log(reverseStr('ab cd ef'))

// ii. Sort a string
function sortStr(str){
    return str.split('').sort().join('')
}
console.log(sortStr('badcA1'))


// iii. In a sentence convert the first letter of each word in capital letter
function convertFirstLetterCapital(str){
    return str.split(/\s+/)
    .map((word)=> word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}
console.log(convertFirstLetterCapital('i am  a boy'))
