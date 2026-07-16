import { useEffect, useRef, useState } from 'react'
import './Dashboard.css'
import Counter from './ReusableComponents/Counter'
import style from './ReusableComponents/Button.module.css'

const Dashboard = () =>
{
    const inputElement = useRef()
    const [temp, setTemp] = useState(1)
    // var [count, setCount] = useState(0)
    useEffect(()=>{
        console.log("All renders!!")
        count.current = count.current + 1
        // setCount(count++)
    })

    const [inputValue, setInputValue] = useState("")
    const count = useRef(0)


    //Variation where it will be called in all the updation on the components -> Updation

    // useEffect(()=>{
    //     console.log("Use Effect version 2 in on the work!")
    // }, [])
    // //Variation which will work on first render only -> Mounting

    // useEffect(()=>{
    //     console.log("Use Effect version 3 in on the work!")
    // }, [temp])
    // //Variation of dependency
    
    const [condition, setCondition] = useState("Open")
    let divStyleOpen = {
        backgroundColor: "#e3f540", 
        height: "500px",
        width: "500px"
    }

    let divStyleClosed = {
        backgroundColor: "#f5483f", 
        height: "500px",
        width: "500px"
    }

    function toggleCondition()
    {
        condition === "Open" ? setCondition("Closed") : setCondition("Open")
        if(condition === "Closed")
            setTemp(temp + 1)
    }
    // function incrementCount()
    // {
    //     setCount(count++)
    //     console.log("count:", count)
    // }
    
    return <div style={ condition==="Open"? divStyleOpen: divStyleClosed}>
        {/*  id='dashboardDiv' */}
        <label >
            Dashboard
        </label>
        {/* <Counter/> */}
        <br/>
        <button onClick={()=>toggleCondition()}>Change Condition</button>
        <button className={style.myButton}>Test Button</button>
        <br/>
        {/* <button onClick={()=> incrementCount()}>Increment Count</button> */}
        <br/>
        <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <h1>Render Count: {count.current}</h1>
        <input ref={inputElement}/>
        <br/>
        <button onClick={()=> console.log(inputElement.current.value)}>Read Input</button>
    </div>
}
export default Dashboard

// backgroundColor
// background-color