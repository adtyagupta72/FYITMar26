// let TestComp = () =>
// {
//     return <div>
//         <h1>This is my functional Component!</h1>
//     </div>
// }

import React from "react";

class TestComp extends React.Component
{
    state = {count: 0}      //
    incrementCount()
    {
        //this.count++
        this.setState({count: this.state.count+1})//
        console.log("Count: ", this.state.count)//
    }
    render()
    {
        return <div>
                <h1>This is my Class Component! {this.state.count}</h1>
                <br></br>
                <button onClick={()=>this.incrementCount()}>Increment count</button>
                <button onClick={()=>console.log(this.state.count)}>Check count</button>
            </div>
    }
}

export default TestComp