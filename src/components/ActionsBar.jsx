// Actions bar: items left, clear completed
function ActionsBar({ count, onClearCompleted }) {
  return (
    <div className="actions">
      <p className="left-items">
        <span id="count">{count}</span> items left
      </p>
      <a href="#" className="clear-completed-btn" onClick={onClearCompleted}>
        Clear Completed
      </a>
    </div>
  )
}
export default ActionsBar
