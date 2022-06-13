import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newTask = { ...this.state, id: uuidv4() };
    this.props.addTask(newTask);
    this.setState({ task: '' });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.task}
          name="task"
          onChange={this.handleChange}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default NewTodoForm;
