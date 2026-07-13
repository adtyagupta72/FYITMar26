import { useState } from 'react'
import './Dashboard.css'
import Counter from './ReusableComponents/Counter'
import style from './ReusableComponents/Button.module.css'

const Dashboard = () =>
{
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
    
    return <div style={ condition==="Open"? divStyleOpen: divStyleClosed}>
        {/*  id='dashboardDiv' */}
        <label >
            Dashboard
        </label>
        <Counter/>
        <br/>
        <button>Test Button</button>
        <button className={style.myButton}>Test Button</button>
    </div>
}
export default Dashboard

// backgroundColor
// background-color