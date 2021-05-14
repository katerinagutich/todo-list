import React from 'react';
import ToDoList from './ToDo/ToDoList';
import Context from "./context";
import AddTodo from "./ToDo/AddTodo";

function App() {

    const [todos, setTodos] = React.useState(
        [
            {id: 1, completed: false, title: "Buy milk"},
            {id: 2, completed: false, title: "Buy bread"},
            {id: 3, completed: false, title: "Buy chocolate"}
        ]
    )

    const toggleTodo = id => {
        let todosWithUpdatedStatus = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(todosWithUpdatedStatus);
    }

    const removeTodo = id => {
        let remainedTodos = todos.filter(todo => todo.id !== id);
        setTodos(remainedTodos);
    }

    const addTodo = title => {
        let expandedTodos = todos.concat(
            {
                title,
                id: Date.now(),
                completed: false
            }
        );
        setTodos(expandedTodos);
    }

    return (
        <Context.Provider value={{removeTodo}}>
            <div className="wrapper">
                <h1>ToDo List: </h1>
                <AddTodo onCreate={addTodo}/>
                {todos.length ? <ToDoList list={todos} onToggle={toggleTodo}/> : <p>Nothing to do</p>}
            </div>
        </Context.Provider>
    )
}

export default App;
