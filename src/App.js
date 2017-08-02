import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo';
import Filter from './components/todofilter';
import TodoInput from './components/inputtodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: !!localStorage.getItem('todo-list') ?
        JSON.parse(localStorage.getItem('todo-list')) :
        [],
      display: 'All'
    };
    this.filterTodos = this.filterTodos.bind(this);
  }

  addTodo(content) {
    this.setState({ todos: this.state.todos.concat({ completed: false, content: content }) },
      () => {
        localStorage.setItem('todo-list', JSON.stringify(this.state.todos));
      });
  }
  markTodo(index) {
    let modifiedTodo =
      {
        completed: !this.state.todos[index].completed,
        content: this.state.todos[index].content
      };
    this.setState({
      todos: [
        ...this.state.todos.slice(0, index),
        modifiedTodo,
        ...this.state.todos.slice(index + 1)
      ]
    },
      () => {
        localStorage.setItem('todo-list', JSON.stringify(this.state.todos));
      });
  }
  remTodo(index){
    this.setState({
      todos: this.state.todos.filter((_, i) => i !== index)
    }, () => localStorage.setItem('todo-list', JSON.stringify(this.state.todos)));
  }
  changeDisplay(filt) {
    console.log(this.state.display);
    console.log(filt);
    this.setState({ display: filt });
  }
  filterTodos() {
    switch (this.state.display) {
      case 'All':
        return this.state.todos;
      case 'Active':
        return this.state.todos.filter(todo => { return todo.completed === false });
      case 'Completed':
        return this.state.todos.filter(todo => { return todo.completed === true });
      default:
        return this.state.todos;
    }
  }
  render() {
    return (
      <div className="App">
        <h1>todos</h1>
        <TodoInput addTodo={this.addTodo.bind(this)} />

        {!!this.state.todos && this.filterTodos().map((todo, i) =>
          <Todo content={todo.content}
            id={i}
            key={i}
            completed={todo.completed}
            del={this.remTodo.bind(this)}
            toggle={this.markTodo.bind(this)} />)}
        <Filter numItems={this.state.todos.length}
          changeFilter={this.changeDisplay.bind(this)}
          display={this.state.display} />
      </div>
    );
  }
}

export default App;
