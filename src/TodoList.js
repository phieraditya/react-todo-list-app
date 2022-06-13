import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTask = this.addTask.bind(this);
  }
  addTask(newTask) {
    this.setState({ todos: [...this.state.todos, newTask] });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo key={todo.id} task={todo.task} />
    ));
    return (
      <div>
        <NewTodoForm addTask={this.addTask} />
        {todos}
      </div>
    );
  }
}

export default TodoList;
