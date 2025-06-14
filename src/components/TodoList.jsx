import React from "react"
import TodoItem from "./TodoItem"

// List of todos
function TodoList({
  todos,
  onToggleTodo,
  onDeleteTodo,
  activeCount,
  onClearCompleted
}) {
  return (
    <div className="todo-container">
      <ul className="todos">
        {todos.length === 0 ? (
          <div className="empty-container">No todo items left!</div>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => onToggleTodo(todo.id)}
              onDelete={() => onDeleteTodo(todo.id)}
            />
          ))
        )}
      </ul>
      <div className="actions">
        <p className="left-items">
          <span>{activeCount}</span> items left
        </p>
        <button className="clear-completed-btn" onClick={onClearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  )
}

export default TodoList
