import React from 'react'
import ToDoList from './ToDo/ToDoList'
import Context from "./context";

function App() {
    const [todos, setTodos] = React.useState(
        [
            {id: 1, completed: false, title: "Buy milk"},
            {id: 2, completed: false, title: "Buy bread"},
            {id: 3, completed: false, title: "Buy chocolate"}
        ]
    )

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>ToDo List: </h1>
                {todos.length ? <ToDoList list={todos} onToggle={toggleTodo}/> : <p>Nothing to do</p>}
            </div>
        </Context.Provider>
    )
}

export default App
