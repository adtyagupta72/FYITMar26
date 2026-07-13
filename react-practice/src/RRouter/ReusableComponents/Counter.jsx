import { useState } from "react"
import style from './Button.module.css'

const Counter = () =>
{
    const [counter, setCounter] = useState(0)

    function incrementCounter()
    {
        setCounter(counter+1)
    }

    return <div>
            <label>
                Counter: {counter}
            </label>
            <br/>
            <button className={style.myButton} onClick={() => incrementCounter()}>
                Increment Counter
            </button>
        </div>
}
export default Counter