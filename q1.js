// i. generate a random integer between 0 and 18

function generateRandom() {
    return Math.floor(Math.random() * 19)
}
console.log(generateRandom())


//ii. Find the max number in an array
function getMax(arr) {
    return Math.max(...arr)
}
console.log(getMax([1, 2, 5, 6, 3]))


//iii. Convert an array of strings into a single comma seperated strings
function convertToStrings(arr) {
    // return arr.reduce((acc, currVal)=> acc + ',' + currVal)
    return arr.join(',')
}
console.log(convertToStrings(['s', 's', 'a', 'b']))


//iv. write a function to flattern a nested array onelevel deep
function flat1level(arr) {
    return arr.flat(1)
}


// v. write a function to check if all elements of an array are numbers
function checkIfAllElementsAreNumber(arr) {
    return arr.every((element) => typeof element === 'number')
}
console.log(checkIfAllElementsAreNumber([1, 2, 3, '4', 5]))


// vi. create a function that removes duplicate elements from an array
function removeDuplicate(arr) {
    return Array.from(new Set(arr))
}
console.log(removeDuplicate([1, 2, 3, 3, 4, '4', 5]))

const date = new Date('2025-08-30T20:23:00')
console.log(date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: 'Asia/Kolkata'
})
)

//30 Aug 2025, 08:23:00 pm

console.log(JSON.stringify("hii"))



const waitForClick = new Promise((resolve) => {
    document.getElementById("myButton").addEventListener("click", () => {
        resolve("Button was clicked!");
    }, { once: true }); // Ensure the listener runs only once
});


waitForClick.then(message => {
    console.log(message); // Logs after button click
});


