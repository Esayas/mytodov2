import React from "react";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";

class Todos extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChange={this.props.handleChange}
            deleteItem={this.props.deleteItem}
          />
        ))}
      </div>
    );
  }
}

// function Todos(props) {
//   return (
//     <div>
//       {props.todos.map((todo) => (
//         <li key={todo.id}>{todo.title}</li>
//       ))}
//     </div>
//   );
// }

export default Todos;
