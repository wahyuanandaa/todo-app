// Theme switcher button
function ThemeSwitcher({ theme, onToggle }) {
  return (
    <button className={`btn theme-btn ${theme}`} onClick={onToggle}>
      <img
        src={
          theme === "light" ? "/images/icon-moon.svg" : "/images/icon-sun.svg"
        }
        alt={theme === "light" ? "moon svg" : "sun svg"}
      />
    </button>
  )
}
export default ThemeSwitcher
