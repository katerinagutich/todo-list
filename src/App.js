import React from 'react';
import ToDoList from './ToDo/ToDoList';
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
        const todosWithUpdatedStatus = todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        setTodos(todosWithUpdatedStatus);
    }

    const removeTodo = id => {
        const remainedTodos = todos.filter(todo => todo.id !== id);
        setTodos(remainedTodos);
    }

    const addTodo = title => {
        const expandedTodos = todos.concat(
            {
                title,
                id: Date.now(),
                completed: false
            }
        );
        setTodos(expandedTodos);
    }

    return (
        <div className="wrapper">
            <h1>ToDo List: </h1>
            <AddTodo onCreate={addTodo}/>
            {todos.length ? <ToDoList onRemove={removeTodo} list={todos} onToggle={toggleTodo}/> : <p>Nothing to do</p>}
        </div>
    )
}

export default App;
