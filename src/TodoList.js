import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Oven Tahu', 'Haluskan bumbu', 'Prep Kacang Panjang'],
    };
  }
  render() {
    const todos = this.state.todos.map((todo) => <Todo task={todo} />);
    return (
      <div>
        <NewTodoForm />
        {todos}
      </div>
    );
  }
}

export default TodoList;
