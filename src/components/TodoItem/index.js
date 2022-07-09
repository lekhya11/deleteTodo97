import './index.css'

const TodoItem = props => {
  const {todoListItem, deleteTodo} = props
  const {title, id} = todoListItem
  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoList-container">
      <p className="description"> {title}</p>
      <button className="delete-button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
