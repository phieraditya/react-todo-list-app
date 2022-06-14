import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTask = this.addTask.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.toggleCompletion = this.toggleCompletion.bind(this);
  }
  addTask(newTask) {
    this.setState({ todos: [...this.state.todos, newTask] });
  }
  remove(id) {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  }
  update(id, updatedTask) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, task: updatedTask };
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  toggleCompletion(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) return { ...todo, completed: !todo.completed };
      return todo;
    });
    this.setState({ todos: updatedTodos });
  }
  render() {
    const todos = this.state.todos.map((todo) => (
      <Todo
        key={todo.id}
        id={todo.id}
        task={todo.task}
        completed={todo.completed}
        removeTask={this.remove}
        updateTask={this.update}
        isCompleted={this.toggleCompletion}
      />
    ));
    return (
      <div className="TodoList">
        <h1>
          Todo List! <span>A Simple React Todo List App.</span>
        </h1>
        <ul>{todos}</ul>
        <NewTodoForm addTask={this.addTask} />
      </div>
    );
  }
}

export default TodoList;
