import React from "react";

import "./style.scss";

export default function TodoList({
  todos = [],
  toggleTodoHandler = () => {},
  removeTodoHandler = () => {}
}) {
  return (
    <ul className="TodoList">
      {todos.map((todo, i) => (
        <li key={i}>
          <p>{todo.text}</p>
          <div className="actions">
            <div className={todo.done ? "led green" : "led red"} />
            <div className="buttons">
              <button onClick={() => toggleTodoHandler(i)}>Toggle</button>
              <button onClick={() => removeTodoHandler(i)}>Remove</button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
