import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./App.css"

// Set initial theme
document.documentElement.dataset.theme = "theme-light"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
