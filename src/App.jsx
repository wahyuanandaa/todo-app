import { useState } from "react"
import "./App.css"
import TodoHeader from "./components/TodoHeader"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import TodoFilters from "./components/TodoFilters"

function App() {
  const [todos, setTodos] = useState([])
  const [filter, setFilter] = useState("all")
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
    document.documentElement.dataset.theme =
      theme === "light" ? "theme-dark" : "theme-light"
  }

  const addTodo = (text) => {
    if (!text.trim()) return
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }])
  }

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed))
  }

  const reorderTodos = (draggedId, targetId) => {
    setTodos((prev) => {
      const draggedIndex = prev.findIndex((todo) => todo.id === draggedId)
      const targetIndex = prev.findIndex((todo) => todo.id === targetId)
      const newTodos = [...prev]
      const [draggedTodo] = newTodos.splice(draggedIndex, 1)
      newTodos.splice(targetIndex, 0, draggedTodo)
      return newTodos
    })
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  const activeCount = todos.filter((todo) => !todo.completed).length

  return (
    <main className={`app ${theme}`}>
      <section className="wrapper">
        <TodoHeader theme={theme} onToggleTheme={toggleTheme} />
        <TodoForm onAddTodo={addTodo} />
        <TodoList
          todos={filteredTodos}
          onToggleTodo={toggleTodo}
          onDeleteTodo={deleteTodo}
          activeCount={activeCount}
          onClearCompleted={clearCompleted}
          onReorder={reorderTodos}
        />
        <TodoFilters
          filter={filter}
          onFilterChange={setFilter}
          activeCount={activeCount}
          onClearCompleted={clearCompleted}
        />
        <p className="drag-help-info">Drag and drop to reorder list</p>
      </section>
    </main>
  )
}

export default App
