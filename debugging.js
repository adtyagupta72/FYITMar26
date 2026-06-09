function average(a, b) 
{
    var c = a + b
    return c / 2
}
console.log("Before debugger")
debugger
console.log(average(2, 10))   
console.log(average(5, 5)) 
console.log("After debugger")



// console.log("After debugger 1")
// console.log("After debugger 2")
// console.log("After debugger 3")
// console.log("After debugger 4")
