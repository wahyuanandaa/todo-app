import React from "react"

function TodoHeader({ theme, onToggleTheme }) {
  return (
    <header>
      <h1>Todo</h1>
      <button className={`btn theme-btn ${theme}`} onClick={onToggleTheme}>
        <img
          src={
            theme === "light" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"
          }
          alt={theme === "light" ? "moon icon" : "sun icon"}
        />
      </button>
    </header>
  )
}

export default TodoHeader
