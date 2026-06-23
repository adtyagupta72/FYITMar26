// let promiseArgument = (resolve, reject) =>
// {
//     setTimeout(()=>
//     {
//         let currTime = new Date().getTime();
//         console.log("currTime: ", currTime)
//         if(currTime %2 === 0)
//         {
//             resolve("Success!!")
//         }
//         else
//         {
//             reject("Failed!!")
//         }
//     }, 2000)
//     //Asynchronous call
// };
// console.log("This is before the promiss is triggered")
// let myPromise = new Promise(promiseArgument);       //Promiss 
// console.log("result:"+myPromise);

// console.log("This is after the promiss is triggered")

const fetchMessage = () =>
{
    return new Promise((resolve, reject) => 
        {
            // setTimeout(()=> resolve("This is successful promise!!"), 2000)
            setTimeout(()=> reject("Oh this is failed!"), 2000)
        })
}

async function getMessage()
{
    try
    {
        const message = await fetchMessage()
        console.log("Message from promiss: ",message)
    }
    catch(error)
    {
        console.log("Error: ", error)
    }
}

console.log("This is before getMessage is called!")
getMessage()
console.log("This is after getMessage is called!")