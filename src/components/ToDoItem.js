import React, { Component } from "react";

export class ToDoItem extends Component {
  handleKeyUp(e) {
    if (e.keyCode === 13) {
      e.target.blur();
    }
  }

  render() {
    const todo = this.props.data;
    let strike = "";
    todo.done ? (strike = "line-through") : (strike = "none");

    return (
      <tr className="todo-item" data-id={todo.uuid}>
        <td>
          <div className="custom-control custom-checkbox">
            <input
              className="custom-control-input"
              value={todo.uuid}
              id={`todo-done-${todo.uuid}`}
              type="checkbox"
              checked={todo.done}
              onChange={this.props.toggleToDoDone}
            ></input>
            <label
              className="custom-control-label"
              htmlFor={`todo-done-${todo.uuid}`}
            ></label>
          </div>
        </td>
        <td className="col-1">
          <input
            style={{ textDecoration: strike }}
            type="text"
            className="form-control"
            value={todo.text}
            onChange={e => {
              this.props.updateTodoText(todo.uuid, e.target.value);
            }}
            onKeyUp={e => {
              this.handleKeyUp(e);
            }}
          ></input>
        </td>
        <td className="col-action">
          <i
            className="icon-remove far fa-trash-alt"
            onClick={e => this.props.removeToDo(todo.uuid)}
          ></i>
        </td>
      </tr>
    );
  }
}
