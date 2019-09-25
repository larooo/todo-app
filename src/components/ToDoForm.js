import React from "react";

export class ToDoForm extends React.Component {
  textInput = React.createRef();

  handleSubmit = e => {
    e.preventDefault();
    const text = this.textInput.current.value.trim();
    this.props.addToDo(text);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="input-group my-3" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Add new Todo item"
          ref={this.textInput}
        ></input>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            <i className="fa fa-plus" aria-hidden="true"></i> Add Item
          </button>
        </div>
      </form>
    );
  }
}
