import React from "react";
import { ToDoItem } from "./ToDoItem";

export class ToDoList extends React.Component {
  render() {
    console.log(this.props);

    return (
      <div className="todo-list">
        <table className="todo-items table table-borderless">
          <tbody>
            {Object.keys(this.props.items).map(uuid => (
              <ToDoItem
                key={`todo=item-${uuid}`}
                data={this.props.items[uuid]}
                updateTodoText={this.props.updateTodoText}
                toggleToDoDone={this.props.toggleToDoDone}
                removeToDo={this.props.removeToDo}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
