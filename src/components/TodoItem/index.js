import {Component} from 'react'

import './index.css'

class TodoItem extends Component {
  render() {
    const {eachItem, onDeleteTodo} = this.props
    const {title, id} = eachItem

    const onDelete = () => {
      onDeleteTodo(id)
    }

    return (
      <li className="todo-item">
        <p className="title">{title}</p>
        <button type="button" className="delete-button" onClick={onDelete}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
