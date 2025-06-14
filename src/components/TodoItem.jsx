import React from "react"

function TodoItem({
  todo,
  onToggle,
  onDelete,
  onDragStart,
  onDragOver,
  onDrop,
  isDragging
}) {
  return (
    <div
      className={`todo-item ${todo.completed ? "strike" : ""} ${
        isDragging ? "ondrag" : ""
      }`}
      draggable
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDrop={onDrop}
    >
      <label className="check-label">
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <span className="check-round"></span>
      </label>
      <span className="todo" onClick={onToggle}>
        {todo.text}
      </span>
      <button className="btn delete" onClick={onDelete}>
        <img src="/images/icon-cross.svg" alt="delete todo" />
      </button>
    </div>
  )
}

export default TodoItem
