import React, { Component } from 'react';
import TodoList from './TodoList.js';
import TodoEditor from './TodoEditor.js';
import Filter from './Filter.js';
import Info from './Info.js';
import initialTodos from './todo.json';
import './App.css';

class App extends Component {
  state = {
    todos: [
    ],
    filter: '',
    textValue: '',
  };

  componentDidUpdate(prevState) {                                              // dz 13
    if (prevState.todos !== this.state.todos) {                                // dz 13
      localStorage.setItem('todos', JSON.stringify(this.state.todos))          // dz 13
    }                                                                          // dz 13
  }                                                                            // dz 13

  componentDidMount(){                                                         // dz 13
    const savedTodos = localStorage.getItem('todos')                           // dz 13                  
    if (savedTodos) {                                                          // dz 13
      this.setState({ todos: JSON.parse(savedTodos) })                         // dz 13
    }                                                                          // dz 13
  }                                                                            // dz 13
 
  addTodo = () => {
    const { textValue, todos } = this.state;
    if (textValue.trim() === '') return;

    const newTodo = {
      id: `id-${todos.length + 1}`,
      text: textValue,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [...prevState.todos, newTodo],
      textValue: '',
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  toggleTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { textValue, filter } = this.state;
    const visibleTodos = this.getVisibleTodos();
    const totalTodos = this.state.todos.length;
    const completedTodos = this.state.todos.filter(todo => todo.completed).length;

    return (
      <div className="container">
        <h1>Todo Application</h1>

        <div className="todo-editor">
          <input
            className="todo-input"
            type="text"
            placeholder="Додати нове завдання"
            value={textValue}
            name="textValue"
            onChange={this.handleChange}
          />
          <button className="add-button" onClick={this.addTodo}>
            Додати
          </button>
        </div>

        <div className="filter-container">
          <input
            className="filter-input"
            type="text"
            placeholder="Фільтрувати завдання"
            value={filter}
            name="filter"
            onChange={this.handleChange}
          />
        </div>

        <ul className="todo-list">
          {visibleTodos.map(({ id, text, completed }) => (
            <li key={id} className={`todo-item ${completed ? 'completed' : ''}`}>
              <span className="todo-text">{text}</span>
              <div className="todo-actions">
                <button onClick={() => this.toggleTodo(id)}>✔️</button>
                <button onClick={() => this.deleteTodo(id)}>🗑️</button>
              </div>
            </li>
          ))}
        </ul>

        <div className="info-container">
          <p className="info-text">Загальна кількість завдань: {totalTodos}</p>
          <p className="info-text">Виконано: {completedTodos}</p>
        </div>
      </div>
    );
  }
}



export default App;