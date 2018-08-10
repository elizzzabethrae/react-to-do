import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
       todos: [
         { description: 'Walk the cat', isCompleted: true },
         { description: 'Throw the dishes away', isCompleted: false  },
         { description: ' Buy new dishes', isCompleted: false }
       ],
       newTodoDescription: ''
     };
}

handleChange(e) {
  const newState = {
    newTodoDescription: e.target.value
  }
  this.setState(newState)
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

  deleteToDo(index) {
     let filteredTodos = this.state.todos.filter( function(todo, loopIndex)  {
       if (loopIndex === index) { // this is what we want to delete
         return false;
       }
       // If it's not what we want to delete, keep it!
       return true;
     })
    this.setState({todos : filteredTodos}); //still not sure if that is right
  }


  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo
              key={ index }
              description={ todo.description }
              isCompleted={ todo.isCompleted }
              toggleComplete={ () => this.toggleComplete(index) }
              deleteToDo={ () => this.deleteToDo(index)}
            />
           )}
         </ul>
        <form onSubmit={ (e) => this.handleSubmit(e) }>
          <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) } />
          <input type="submit" />
          </form>
        </div>
      )
    }

}


export default App;
