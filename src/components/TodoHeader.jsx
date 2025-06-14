export default function TodoHeader({ theme, onToggleTheme }) {
  return (
    <header>
      <h1>Todo</h1>
      <button className="btn theme-btn" onClick={onToggleTheme}>
        <img
          src={
            theme === "light"
              ? "./images/icon-moon.svg"
              : "./images/icon-sun.svg"
          }
          alt={
            theme === "light" ? "Switch to dark theme" : "Switch to light theme"
          }
        />
      </button>
    </header>
  )
}
