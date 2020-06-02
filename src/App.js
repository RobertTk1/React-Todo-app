import React from 'react';
import './App.css';
import Todos from './components/Todos'
import Header from './components/Header'
import AddTodo from './components/AddTodo'

class App extends React.Component {
  state = {
    todos:[
    {
      id: 1,
      title: 'Take out the trash',
      completed: false
    },
    {
      id: 2,
      title: 'Diner with wife',
      completed: true
    },
    {
      id: 3,
      title: 'Meeting with brother',
      completed: false
    }]
  }
  //Togles complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if(todo.id === id ) {
        todo.completed = !todo.completed
      }
      return todo;
    }) })
  }

  //Delete todo
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id)]})
  }
  
  //Add todo
  addTodo = (title) => {
    const newTodo = {
      id: 4,
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  render() {

    return (
      <div className="App">
        <Header />
        <AddTodo addTodo={this.addTodo} />
        <Todos todos={this.state.todos} markComplete= {this.markComplete} 
        delTodo = {this.delTodo} />
      </div>
    );
  }
}

export default App;
