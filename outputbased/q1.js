let x = 10;
function foo(){
    console.log(x)
    let x = 5
}
foo()  // output: error


function foo1(){
    console.log(x)
}
foo1() // output 10

function foo2(){
    console.log(x)
    var x = 5
}
foo2() // output undefined

y = 10 // thisline is fine for common js, its create the y in globally in execution phase but not in module js

function foo3(){
    z = 10;
    console.log(z)
}
console.log(z) // this line give error because z will be created in execution phase so when we run foo3() afterthat z willbe created
foo3() // if we use this console log after calling foo3() then it will be fine