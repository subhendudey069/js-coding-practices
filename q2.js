//i. write a function to check a number is prime or not
function checkPrime(num){
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}
console.log(checkPrime(5))

// ii. check a number is integer or not
function checkIsInteger(num){
    return Number.isInteger(num)
    return (num % 1 === 0)
    return parseInt(num) === num
}

// iii. reverse a number
function reverseNum(num){
    return Number(String(num).split('').reverse().join(''))
}

