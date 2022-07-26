import React, { Component } from "react";
import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      todoItems: [
        // { action: "Go to BBS", done: false },
        // { action: "Go Home", done: false },
        // { action: "Go to GYM", done: false },
      ],
      newTodo: "",
    };
  }

  updateName = (event) => {
    this.setState({ name: event.target.value });
  };

  updateValue = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  toggleDone = (todo) => {
    this.setState({
      todoItems: this.state.todoItems.map((item) =>
        item.action === todo.action ? { ...item, done: !item.done } : item
      ),
    });
  };

  deleteItems = (item) => {
    const todoItems = this.state.todoItems.slice();
    const index = todoItems.indexOf(item);

    todoItems.splice(index, 1);

    this.setState({ todoItems: todoItems });
  };

  toDorows = () =>
    this.state.todoItems.map((item) => (
      <tr key={item.action}>
        <td>{item.action}</td>
        <td>
          <input type="checkbox" onChange={() => this.toggleDone(item)} />
        </td>
        <td>
          <button className="btn btn-outline-dark" onClick={this.deleteItems}>
            Delete
          </button>
        </td>
      </tr>
    ));

  addTask = () => {
    const todoItems = this.state.todoItems.slice();
    todoItems.push({ action: this.state.newTodo, done: false });
    this.setState({ todoItems: todoItems });
  };

  render() {
    return (
      <div>
        <div className=" col-12">
          <h2 className="titlee text-center bg-warning bg-gradient text-black">
            {this.state.name} Todo List
          </h2>
        </div>
        <div className="text-center">
          <input
            value={this.state.name}
            onChange={this.updateName}
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="forms">
          <input
            className="input-form"
            value={this.state.newTodo}
            onChange={this.updateValue}
            type="text"
          />
          <button
            className="btn btn-warning btn-gradient"
            onClick={this.addTask}
          >
            Add Task
          </button>
        </div>
        <div className="col-12">
          <table className="tableau table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Done</th>
              </tr>
            </thead>
            <tbody>{this.toDorows()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
