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
    this.remove = this.remove.bind(this);
  }
  addTask(newTask) {
    this.setState({ todos: [...this.state.todos, newTask] });
  }
  remove(id) {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        removeTask={this.remove}
      />
    ));
    return (
      <div>
        <h1>Todo List!</h1>
        <ul>{todos}</ul>
        <NewTodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
