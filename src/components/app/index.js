import React from "react";

import "./style.scss";

import TodoList from "../todolist";
import TodoInput from "../todoinput";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { text: "Go to Sweden", done: true },
        { text: "Get a job", done: false },
        { text: "Get a house", done: false },
        { text: "Get a car", done: false },
        { text: "Get a woman", done: false }
      ]
    };
  }
  addTodo = text => {
    this.setState({ todos: [...this.state.todos, { text, done: false }] });
  };
  removeTodo = index => {
    let todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };
  toggleTodo = index => {
    let todos = [...this.state.todos];
    todos[index].done = !todos[index].done;
    this.setState({ todos });
  };
  render() {
    return (
      <div className="App">
        <h1>Todo List</h1>
        <h2>Yet another todo app</h2>
        <TodoList
          todos={this.state.todos}
          toggleTodoHandler={this.toggleTodo}
          removeTodoHandler={this.removeTodo}
        />
        <TodoInput addTodoHandler={this.addTodo} />
      </div>
    );
  }
}
