import React from 'react'
import ToDoList from './ToDo/ToDoList'

function App() {

    const todos = [
        {id: 1, completed: false, title: "Buy milk"},
        {id: 2, completed: false, title: "Buy bread"},
        {id: 3, completed: false, title: "Buy chocolate"}
    ]

    return (
      <div className="wrapper">
          <h1>ToDo List: </h1>
          <ToDoList todos={todos}/>
      </div>
  )
}

export default App;
