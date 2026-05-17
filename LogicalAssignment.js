str2 = ""
for(let num = 1; num<=50; num++)
{
    if(num%3 == 0)
    {
        str2 = str2 + "Fizz"
    }
    if (num%5 == 0) {
        str2 = str2 + "Buzz"
    }
    if( num%3 != 0 && num%5 != 0)
    {
        str2 = str2 + " "+ num
    }
    str2 = str2 + " "
}
console.log(str2)

// Program - 3 ( Factorial)
let givenNum = 8
let result = 1
for( fac = 1; fac <= givenNum; fac++)
{
    // fac = fac * fac
    result = result * fac 
}
console.log(result)

// Program - 4 (Whole Square  Astric)

for(let sqr = 1; sqr <= 5; sqr++)
{
    let ast = ""
    for( let sqrInner = 1; sqrInner <= 5; sqrInner++)
    {
        ast = ast + "* "
    }
    console.log(ast)
}
console.log("\n")

// Program - 5 (hollow Square Astric)
let n = 5
for(let sqr1 = 1; sqr1 <= n; sqr1++)
{
    let ast1 = ""
    for( let sqrInner1 = 1; sqrInner1 <= n; sqrInner1++)
    {
        if(sqr1 === 1 || sqr1 === n || sqrInner1 === 1 || sqrInner1 === n)
        {
           ast1 = ast1 + "* "
        }
        else{
            ast1 = ast1 + "  "
        }
        
    }
    console.log(ast1)
}
console.log("\n")

// Program - 4 (WHole Square hash)

for(let sqr2 = 1; sqr2 <= 5; sqr2++)
{
    let ast2 = ""
    for( let sqrInner2 = 1; sqrInner2 <= 5; sqrInner2++)
    {
        ast2 = ast2 + "# "
    } 
    console.log(ast2)
}
console.log("\n")

// Program - 5 (Hollow Square hash)
let n2 = 5
for(let sqr3 = 1; sqr3 <= n2; sqr3++)
{
    let ast3 = ""
    for( let sqrInner3 = 1; sqrInner3 <= n; sqrInner3++)
    {
        if(sqr3 === 1 || sqr3 === n2 || sqrInner3 === 1 || sqrInner3 === n2)
        {
           ast3 = ast3 + "# "
        }
        else{
            ast3 = ast3 + "  "
        }
        
    }
    console.log(ast3)
}
console.log("\n")

// Make a Hollow square with sides coming from a variable NxN

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question("Enter number:", (num) => {
//     console.log("Number is " + num);
//     num = Number(num); 

//     for(let sqrOuter = 1; sqrOuter <= num; sqrOuter++)
//     {
//         let SqrSide = ""
//         for( let sqrInnerindex = 1; sqrInnerindex <= num; sqrInnerindex++)
//         {
//             if(sqrOuter === 1 || sqrOuter === num || sqrInnerindex === 1 || sqrInnerindex === num)
//             {
//             SqrSide = SqrSide + "* "
//             }
//             else{
//                 SqrSide = SqrSide + "  "
//             }
            
//         }
//         console.log(SqrSide)
//     }

//     console.log("\n");
//     readline.close();
// });

// Make a square with sides coming from a variable NxN

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter number:", (num) => {
    console.log("Number is " + num);
    num = Number(num); 

    for(let sqrOuter = 1; sqrOuter <= num; sqrOuter++)
    {
        let SqrSide = ""
        for( let sqrInnerindex = 1; sqrInnerindex <= num; sqrInnerindex++)
        {
            SqrSide = SqrSide + "* "            
        }
        console.log(SqrSide)
    }

    console.log("\n");
    readline.close();
});