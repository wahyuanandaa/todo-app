import React from "react"

function TodoFilters({ filter, onFilterChange }) {
  return (
    <div className="filters">
      <button
        className={`filter-btns all ${filter === "all" ? "active" : ""}`}
        onClick={() => onFilterChange("all")}
      >
        All
      </button>
      <button
        className={`filter-btns live ${filter === "active" ? "active" : ""}`}
        onClick={() => onFilterChange("active")}
      >
        Active
      </button>
      <button
        className={`filter-btns completed-btn ${
          filter === "completed" ? "active" : ""
        }`}
        onClick={() => onFilterChange("completed")}
      >
        Completed
      </button>
    </div>
  )
}

export default TodoFilters
