import React from "react";

import "./style.scss";

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodoHandler(this.state.text);
    this.setState({ text: "" });
  };
  onInput = e => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <form className="TodoInput" onSubmit={this.onSubmit}>
        <input type="text" value={this.state.text} onInput={this.onInput} />
        <button type="submit">Add</button>
      </form>
    );
  }
}
