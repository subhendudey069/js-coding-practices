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