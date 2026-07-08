// let TestComp = (props) =>
// {
//     console.log(props)



//     return <div style={{backgroundColor: props.color}}>
//         {/* <h1>This is my Class Component!</h1>
//         <br></br>
//         <button onClick={props.clickFunction}>Click me!</button> */}

//     </div>
// }

import React from "react";

class TestComp extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log("Props:", props)
    }
    state = {
        count: this.props.count,
        todoList: []
    }

    incrementCount()
    {
        //this.count++
        this.setState({count: this.state.count+1})//
        console.log("Count: ", this.state.count)//
    }

    addTodo()
    {
        var todo = document.getElementById("newTodo").value
        console.log("todo:", todo)
        var todoObject = {
            title:todo,
            id:this.state.todoList.length+1
        }
        let tempTodoList = this.state.todoList
        tempTodoList.push(todoObject)
        this.setState({...this.state, todoList: tempTodoList})
    }

    render()
    {
        return <div style={{backgroundColor: this.props.color}}>
                {/* <h1>This is my Class Component! {this.state.count}</h1>
                <br></br>
                <button onClick={this.props.clickFunction}>Click me!</button>
                <button onClick={()=>this.incrementCount()}>Increment count</button>
                <button onClick={()=>console.log(this.state.count)}>Check count</button> */}
                <h1>To Do App</h1>
                <br/>
                <input placeholder="Add todo here..." id="newTodo"/>
                <button onClick={()=>this.addTodo()}>Add Todo</button>
                <br/>
                <ul id="todoListID">
                    {this.state.todoList.map((tempTodo)=>{
                        return <li>
                            <label>{tempTodo.title}</label>
                        </li>
                    })}
                </ul>
                <button onClick={console.log(this.state.todoList)}>Test Todo List</button>
                <br/>
                <button onClick={()=>{
                    this.props.callBackFun(document.getElementById("newTodo").value)
                    }}>Call my Parent</button>
            </div>
    }
}

export default TestComp