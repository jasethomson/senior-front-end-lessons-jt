import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.getAllTodos = this.getAllTodos.bind(this);
  }
  componentDidMount() {
    this.getAllTodos();
  }
  getAllTodos() {
    fetch(`/api/todos`)
      .then(response => response.json())
      .then(todos => this.setState({ todos }));
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the JSON is received and parsed,
     * update state with the received todos.
     */
  }

  addTodo(newTodo) {
    function postTodo(url, newTodo) {
      return fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodo)
      })
        .then(response => response.json());
    }
    postTodo(`/api/todos`, newTodo)
      .then(todo => this.setState({ todos: this.state.todos.concat(todo) }));
    /**
     * Use fetch to send a POST request to `/api/todos`.
     * Then 😉, once the JSON is received and parsed,
     * add the created todo to state.
     * Be sure to SERIALIZE the todo in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }
  toggleCompleted(todoId) {
    // const targetObjectId = this.state.todos.find(element => element.id === todoId);
    fetch(`/api/todos/${todoId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(changeTodo => {
        if (changeTodo.isCompleted === true) {
          changeTodo.isCompleted = false;
        } else {
          changeTodo.isCompleted = true;
        }

      });

    // .then(changeTodo => this.setState({ todos: changeTodo }));

    /**
     * Use fetch to send a PATCH request to `/api/todos/${todoId}`
     * Then 😉, once the JSON is received and parsed,
     * replace the updated todo in state.
     * Be sure to SERIALIZE the updates in the body with JSON.stringify()
     * And specify the "Content-Type" header as "application/json"
     */
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="React Todo"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
