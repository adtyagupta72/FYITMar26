import { useReducer } from "react";

const AboutUs = () =>
{
    var initialTodos = [
        {
            id:1,
            title: "Hello Todo",
            complete: false
        }
    ]
    const [todos, dispatch] = useReducer(reducer, initialTodos);
    const handleComplete = (todo) => 
    {
        console.log(todos)
        dispatch({ type: "COMPLETE", id: todo.id })
    }
    const addTodo= () =>
    {
        console.log(todos)
        dispatch({type: "ADD", title: "New Todo"})
    }
    return <div>
        About Us
        <br/>
        <button onClick={()=> addTodo()}>Add Todo</button>
        <br/>
        {todos.map((todo) => {
            return <div key={todo.id}>
                <label>
                <input
                    type="checkbox"
                    checked={todo.complete}
                    onChange={() => handleComplete(todo)}
                />
                {todo.title}
                </label>
            </div>
        }
        )}
    </div>
}
export default AboutUs


const reducer = (state, action) =>
{
    switch (action.type)
    {
        case "COMPLETE":
            return state.map((todo) =>
            {
                if (todo.id === action.id)
                {
                    return { ...todo, complete: !todo.complete };
                }
                else
                {
                    return todo;
                }
            });
        case "ADD":
        {
            var todo = {
                id: 2,
                title: action.title,
                complete: false
            }
            let tempState = state
            tempState.push(todo)
            state = tempState
            return state
        }
        default:
            return state;
    }
}
