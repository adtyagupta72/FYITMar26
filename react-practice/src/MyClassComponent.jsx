import React from "react"
import AppInner from "./AppInner"

class MyClassComponent extends React.Component
{
    state = {counter: 0, innerComponent:<AppInner/>}
    constructor()
    {
        super()
        // console.log("Consturctor called!")
    }

    incrementCounter()
    {
        console.log(this.state)
        this.setState({counter: this.state.counter+1})
    }

    // static getDerivedStateFromProps()
    // {
    //     console.log("Inside the getDerivedStateFromProps")
    //     // console.log(state)
    //     return null
    // }
    shouldComponentUpdate()
    {
        // console.log("Inside the shouldComponentUpdate")
        return true
    }

    unmountChildComponent()
    {
        console.log("unmountChildComponent")
        
    }

    componentDidMount()
    {
        // console.log("Inside the componentDidMount method")
        setTimeout(() => 
        {
            console.log("Unmounting...")
            this.setState({
                        ...this.state,
                        innerComponent:<div>Unmounted</div>
                    })
        }, 5000);
    }

    getSnapshotBeforeUpdate(prevProps, prevState)
    {
        // console.log("Inside the getSnapshotBeforeUpdate")
        // console.log("counter:", this.state.counter)
        // console.log("prevState:", prevState)
        return true
    }

    componentDidUpdate()
    {
        console.log("Inside the componentDidUpdate method")
        console.log(this.state)
    }

    render()
    {
        // console.log("Inside the render method")
        // console.log(this.props)
        return (
            <div>
                <button onClick={()=>this.incrementCounter()}>Click me</button>
                <br/>
                <AppInner/>
                <br/>
                <button onClick={()=> this.unmountChildComponent()}>
                        Unmount the Component
                </button>
            </div>  
        )
    }
    

}


export default MyClassComponent