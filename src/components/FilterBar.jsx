// Filter buttons
function FilterBar({ filter, setFilter }) {
  return (
    <div className="filters">
      <a
        href="#"
        className={`filter-btns all${filter === "all" ? " active" : ""}`}
        onClick={() => setFilter("all")}
      >
        All
      </a>
      <a
        href="#"
        className={`filter-btns live${filter === "active" ? " active" : ""}`}
        onClick={() => setFilter("active")}
      >
        Active
      </a>
      <a
        href="#"
        className={`filter-btns completed-btn${
          filter === "completed" ? " active" : ""
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </a>
    </div>
  )
}
export default FilterBar
