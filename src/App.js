import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ],
      newTodoDescription: ''
    };
  }
  handleChange(e) {
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) { return }
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index) {
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos });
  }


  deleteTodo(e) {
    const data = this.state.todos.filter(item => item.isCompleted !== true)
    this.setState({ todos: data });
    console.log(data);

  }


  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((todo, index) =>
            <ToDo key={index} description={todo.description} isCompleted={todo.isCompleted} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
          )}
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input type="text" value={this.state.newTodoDescription} onChange={(e) => this.handleChange(e)} />
            <input type="submit" />
            <button onClick={(e) => this.deleteTodo(e)}>delete</button>
          </form>

        </ul>
      </div>
    );
  }
}

export default App;
