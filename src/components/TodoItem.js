import React, { Component } from "react";

export class TodoItem extends Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#c5e2d2",
      textDecoration: "line-through",
    };

    const { completed, title, id } = this.props.todo;

    return (
      <li className="todo-item">
        <input
          type="checkbox"
          checked={completed}
          onChange={() => this.props.handleChange(id)}
        />
        <button
          className="btn-style"
          id="delete"
          onClick={() => this.props.deleteItem(id)}
        >
          X
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </li>
    );
  }
}

export default TodoItem;
