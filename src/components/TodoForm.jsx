import React, { useState } from "react"

function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTodo(text)
    setText("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <span className="round"></span>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Create a new todo..."
      />
      <button type="submit" className="add-todo">
        +
      </button>
    </form>
  )
}

export default TodoForm
