// Program - 1 
// str = ""
// for(let num = 1; num<=50; num++)
// {
//     if(num == 1)
//     {
//         str = str + num
//     }
//     else{
//         str = str + ", " + num
//     }
//     // console.log(num)
// }
// console.log(str)

// Program - 2
// str2 = ""
// for(let num = 1; num<=50; num++)
// {
//     if(num%3 == 0)
//     {
//         str2 = str2 + "Fizz"
//     }
//     if (num%5 == 0) {
//         str2 = str2 + "Buzz"
//     }
//     if( num%3 != 0 && num%5 != 0)
//     {
//         str2 = str2 + " "+ num
//     }
//     str2 = str2 + " "
// }
// console.log(str2)

// Program - 3 ( Factorial)
// let givenNum = 8
// let result = 1
// for( fac = 1; fac <= givenNum; fac++)
// {
//     // fac = fac * fac
//     result = result * fac 
// }
// console.log(result)

// Program - 4 (Whole Square  Astric)

// for(let sqr = 1; sqr <= 5; sqr++)
// {
//     let ast = ""
//     for( let sqrInner = 1; sqrInner <= 5; sqrInner++)
//     {
//         ast = ast + "* "
//     }
//     console.log(ast)
// }
// console.log("\n")

// Program - 5 (hollow Square Astric)
// let n = 5
// for(let sqr1 = 1; sqr1 <= n; sqr1++)
// {
//     let ast1 = ""
//     for( let sqrInner1 = 1; sqrInner1 <= n; sqrInner1++)
//     {
//         if(sqr1 === 1 || sqr1 === n || sqrInner1 === 1 || sqrInner1 === n)
//         {
//            ast1 = ast1 + "* "
//         }
//         else{
//             ast1 = ast1 + "  "
//         }
        
//     }
//     console.log(ast1)
// }
// console.log("\n")

// Program - 4 (WHole Square hash)

// for(let sqr2 = 1; sqr2 <= 5; sqr2++)
// {
//     let ast2 = ""
//     for( let sqrInner2 = 1; sqrInner2 <= 5; sqrInner2++)
//     {
//         ast2 = ast2 + "# "
//     } 
//     console.log(ast2)
// }
// console.log("\n")

// Program - 5 (Hollow Square hash)
// let n2 = 5
// for(let sqr3 = 1; sqr3 <= n2; sqr3++)
// {
//     let ast3 = ""
//     for( let sqrInner3 = 1; sqrInner3 <= n; sqrInner3++)
//     {
//         if(sqr3 === 1 || sqr3 === n2 || sqrInner3 === 1 || sqrInner3 === n2)
//         {
//            ast3 = ast3 + "# "
//         }
//         else{
//             ast3 = ast3 + "  "
//         }
        
//     }
//     console.log(ast3)
// }
// console.log("\n")

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
//             SqrSide = SqrSide + "* "            
//         }
//         console.log(SqrSide)
//     }

//     console.log("\n");
//     readline.close();
// });

// Print the Number triangle Pattern
//      1
//     2 2
//    3 3 3
//   4 4 4 4
//  5 5 5 5 5
// 6 6 6 6 6 6


// for( let pyrOuterIndex = 1; pyrOuterIndex<=6; pyrOuterIndex++)
// {
//     let pyrNum =""
//     for(let pyrInnerIndex = 1; pyrInnerIndex <= 6 ; pyrInnerIndex++)
//     {
//         if( 6 - (pyrInnerIndex + pyrOuterIndex - 1) > 0)
//         {
//             pyrNum += " "
//         }
//         else
//         {
//             pyrNum = pyrNum + pyrOuterIndex
//         }

        
//     }
//     console.log(pyrNum)
    // console.log("\n")
// }

// Print the Number-increasing Pyramid Pattern
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5
// 1 2 3 4 5 6

// let incNumPry = ""
// for(let incIndexOuter = 1; incIndexOuter<=6; incIndexOuter++)
// {
//     incNumPry = incNumPry + incIndexOuter
//     console.log(incNumPry)
// }
// console.log("\n")

// Print the Number-increasing reverse Pyramid Pattern
// 1 2 3 4 5 6
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// for(let incIndexOuter2 = 0; incIndexOuter2 <= 6; incIndexOuter2++)
// {
//     let incNumPry2 = ""
    
//     for(let incIndexInner = 1; incIndexInner<= 6-incIndexOuter2; incIndexInner++)
//     {
//         incNumPry2 = incNumPry2 + incIndexInner
//     }
//     console.log(incNumPry2)
// }
// console.log("\n")

// Print the Number-changing Pyramid Pattern
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// 16 17 18 19 20 21

//  let chngPlace = 1
// for(let chngPryOutside = 1; chngPryOutside <= 6; chngPryOutside++)
// {
//     let chngPryNum = " "
//     for(chngPryInside = 1; chngPryInside <= chngPryOutside; chngPryInside++)
//     {
         
//         chngPryNum = chngPryNum + " " + chngPlace 
//         chngPlace++
//     }
//     console.log(chngPryNum)  
// }

// Print the Zero-One Triangle Pattern
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// 0 1 0 1 0 1

// let zONum = 1
// for(let zoTriOutside = 1; zoTriOutside <= 6; zoTriOutside++)
// {
//     let zONum2 = ""
//     for(let zoTriInside = 1; zoTriInside <= zoTriOutside; zoTriInside++)
//     {
//         zONum2 = zONum + zONum2
//         if(zONum == 1 ) 
//         {
//             zONum = 0
//         }
//         else{
//             zONum = 1
//         }
//     }
//     console.log(zONum2)
// }
// console.log(count)
 
// Print the pattern - Palindrome Triangle Pattern
//           1
//         2 1 2
//       3 2 1 2 3
//     4 3 2 1 2 3 4
//   5 4 3 2 1 2 3 4 5
// 6 5 4 3 2 1 2 3 4 5 6

// 1
// 212
// 32123
// 4321234
// 543212345
// 65432123456

let strPattern = ""
let count = 1
let spaceCount = 10
for(let index = 1; index <= 6; index++)
{
    let indexCopy = index
    let incPattern = 1
    let patternStr = " "
    for(let spaceIndex = 1; spaceIndex <= spaceCount; spaceIndex++)
    {
        patternStr = patternStr + " "   
    }
    for(let rowIndex = 1; rowIndex <= count; rowIndex++)
    {
        // console.log(count)
        
        if(indexCopy > 1)
        {
            patternStr = patternStr + indexCopy+" "
            indexCopy--
        }
        else
        {
            patternStr = patternStr + incPattern+" "
            incPattern++ 
               
        }
    }
    console.log(patternStr)
    count = count + 2
    spaceCount = spaceCount - 2
}
console.log("\n")

// Print the pattern - Rhombus Pattern
//      ******
//     ******
//    ******
//   ******
//  ******
// ******

for(IndexOuter = 1; IndexOuter <=6; IndexOuter++)
{
    let str = " "
    let spaceNum = 6 - IndexOuter
        for(IndexInner = 1; IndexInner <= spaceNum; IndexInner++)
        {  
            str = str + " "
        }
        for(IndexInner = 1; IndexInner <= 6; IndexInner++)
        {  
            // str = "*"
            str = str + "*"
        }
        console.log(str)
}
console.log("\n")
// Print the pattern - Diamond Star Pattern
//      *
//     ***
//    *****
//   *******
//  *********
// ***********
//  *********
//   *******
//    *****
//     ***
//      *
let patternCount = 1
spaceCount = 1
let reversePattern = 9
for(let indexOuter = 1; indexOuter <= 11; indexOuter++)
{
    let strStar = " "
    if(indexOuter <= 6)
    {  
        let spaceCounter = 6 - indexOuter
        for(IndexInner = 1; IndexInner <= spaceCounter; IndexInner++)
            {  
                strStar = strStar + " "
            }
        for(let indexInner = 1; indexInner <= patternCount; indexInner++)
            {
                strStar = strStar + "*" 
            }  
            patternCount = patternCount + 2              
    }
    else
    {     
        for(indexInner = 1; indexInner <= spaceCount; indexInner++)
            {  
                strStar = strStar + " "
                
            }
            spaceCount++
        for(indexInner = 1; indexInner <= reversePattern; indexInner++)
            {  
                strStar = strStar + "*"
            }
            reversePattern = reversePattern - 2
    }
    console.log(strStar)
    
}
console.log("\n")

// Print the pattern - Butterfly Star Pattern
//      *          *
//     **        **
//    ***      ***
//   ****    ****
//  *****   *****
//  ************
//  ************
//  *****  *****
//   ****    ****
//   ***      ***
//    **        **
//    *          *
let spaceCountNum = 0
for(let indexOuter = 1; indexOuter <= 12; indexOuter++)
{
    let strStar = " "
    if(indexOuter <= 6)
    {   
        let spaceCounter = 6 - indexOuter
    for(let indexInner = 1; indexInner <= spaceCounter; indexInner++)
        {  
            strStar = strStar + " "
        }
    for(indexInner = 1; indexInner <= indexOuter; indexInner++)
        {
            strStar = strStar + "*" 
        }  
    for(indexInner = 1; indexInner <= spaceCounter; indexInner++)
        {  
            strStar = strStar + " "
        }
    for(indexInner = 1; indexInner <= indexOuter; indexInner++)
        {
            strStar = strStar + "*" 
        } 
    }
    else
    {
    for(IndexInner = 1; IndexInner <= spaceCountNum; IndexInner++)
        {  
            strStar = strStar + " "
        }
        
    for(IndexInner = 1; IndexInner <= 6 - spaceCountNum; IndexInner++)
        {  
            strStar = strStar + "*"
        }
    for(IndexInner = 1; IndexInner <= spaceCountNum; IndexInner++)
        {  
            strStar = strStar + " "
        }
    for(IndexInner = 1; IndexInner <= 6 - spaceCountNum; IndexInner++)
        {  
            strStar = strStar + "*"
        }
        spaceCountNum++
    }
    console.log(strStar)
}
console.log("\n")
// Print the pattern - Right Half Pyramid Pattern
// *
// **
// ***
// ****
// *****
// ******

let str = " "
for( IndexOuter = 1; IndexOuter <= 6; IndexOuter++)
{
    str = str + "*"
    console.log(str)
}
console.log("\n")
// Print the pattern - Reverse Right Half Pyramid Pattern
// ******
// *****
// ****
// ***
// **
// *
for( let indexOuter = 0; indexOuter <=6; indexOuter++)
{
    let str = ""
    for(let indexInner = 1; indexInner <= 6-indexOuter; indexInner++)
    {
        str = str + "*"
    }
    console.log(str)
}

// Print the pattern - Left Half Pyramid Pattern
//      *
//     **
//    ***
//   ****
//  *****
// ******

for(IndexOuter = 1; IndexOuter <=6; IndexOuter++)
{
    let str = " "
    let spaceNum = 6 - IndexOuter
    for(IndexInner = 1; IndexInner <= spaceNum; IndexInner++)
        {  
            str = str + " "
        }
      for(IndexInner = 1; IndexInner <= IndexOuter; IndexInner++)
        {  
            // str = "*"
            str = str + "*"
        }
        console.log(str) 
}
console.log("\n")
// Print the pattern - Reverse Left Half Pyramid Pattern
// ******
//  *****
//   ****
//    ***
//     **
//      *
for(IndexOuter = 0; IndexOuter <= 6; IndexOuter++)
{
    let str = " "
    let spaceNum = IndexOuter
    for(IndexInner = 1; IndexInner <= spaceNum; IndexInner++)
        {  
            str = str + " "
        }
      for(IndexInner = 1; IndexInner <= 6-IndexOuter; IndexInner++)
        {  
            // str = "*"
            str = str + "*"
        }
        console.log(str)
    
}

// Print the pattern - Triangle Star Pattern
//      *
//     * *
//    * * *
//   * * * *
//  * * * * *
// * * * * * *

for(let indexOuter = 1; indexOuter <= 6; indexOuter++)
{
    let strStar = " " 
    let spaceCounter = 6 - indexOuter
    for(indexInner = 1; indexInner <= spaceCounter; indexInner++)
        {  
            strStar = strStar + " "
        }
    for(let indexInner = 1; indexInner <= indexOuter; indexInner++)
        {
            strStar = strStar + "*" 
        }  
    console.log(strStar)
}

let str1 = "Print the Number triangle Pattern\n\
     1\n\
    2 2\n\
   3 3 3\n\
  4 4 4 4\n\
 5 5 5 5 5\n\
6 6 6 6 6 6\n"

// console.log(str1)

// Print the Mirror Image Triangle Pattern
// 1 2 3 4 5 6
//  2 3 4 5 6
//   3 4 5 6
//    4 5 6
//     5 6
//      6
//     5 6
//    4 5 6
//   3 4 5 6
//  2 3 4 5 6
// 1 2 3 4 5 6
let spaceCount2 = 3
let indexInnerReverse = 1
let reversePatternString = 6
let patternString = " "
for(let indexOuter = 0; indexOuter < 11; indexOuter++)
{
    patternString = " "
    if(indexOuter <= 5)
    {
        for(indexInner = 1; indexInner <= 6; indexInner++)
        {
            if(indexOuter >= indexInner)
            {
                patternString = patternString + " "
            }
            else
            {
                patternString = patternString + " " + indexInner
            }
        }
    }
    else
    {
        let spaceCount = 1
        let temp = 11 - indexOuter
        for(indexInner = 6; indexInner >= 1; indexInner--)
        {
            if(11 - indexOuter - spaceCount > 0)//.....
            {
                patternString = patternString + " "
                spaceCount++
            }
            else
            {
                patternString = patternString + " " + temp
                temp++
            }
        }
    }
    console.log(patternString)
}
/*
indexOuter  7   8
spaceCount  0   1   2   3
temp        4   5   6
indexInner  6   5   4   3   2   1
op          _____5_6    ____4_5_6
*/