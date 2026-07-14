import { useEffect, useState } from 'react'
import './Dashboard.css'
import Counter from './ReusableComponents/Counter'
import style from './ReusableComponents/Button.module.css'

const Dashboard = () =>
{
    const [temp, setTemp] = useState(1)
    useEffect(()=>{
        console.log("Use Effect in on the work!")
    })
    //Variation where it will be called in all the updation on the components -> Updation

    useEffect(()=>{
        console.log("Use Effect version 2 in on the work!")
    }, [])
    //Variation which will work on first render only -> Mounting

    useEffect(()=>{
        console.log("Use Effect version 3 in on the work!")
    }, [temp])
    //Variation of dependency
    
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
    
    return <div style={ condition==="Open"? divStyleOpen: divStyleClosed}>
        {/*  id='dashboardDiv' */}
        <label >
            Dashboard
        </label>
        {/* <Counter/> */}
        <br/>
        <button onClick={()=>toggleCondition()}>Change Condition</button>
        <button className={style.myButton}>Test Button</button>
    </div>
}
export default Dashboard

// backgroundColor
// background-color