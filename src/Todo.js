import React, { Component } from 'react';

class Todo extends Component {
  render() {
    return (
      <div>
        <div>{this.props.task}</div>
        <button>X</button>
      </div>
    );
  }
}

export default Todo;
