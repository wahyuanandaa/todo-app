// Input for adding new todo
function TodoInput({ value, onChange, onAdd }) {
  return (
    <form onSubmit={onAdd} className="todo-input-form">
      <input
        type="text"
        placeholder="Create a new todo..."
        value={value}
        onChange={onChange}
        className="todo-input"
      />
      <button type="submit" className="add-todo">
        +
      </button>
    </form>
  )
}
export default TodoInput
