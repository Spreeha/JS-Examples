import React from "react";
import { render } from "react-dom";

//import App from "./App";


const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

let id = 0   //to identify each todo by a unique id

//Todo is a React component
const Todo = props => (
  <li>
    <input type = "checkbox" checked ={props.todo.checked} onChange={props.onToggle} />
    <button onClick={props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
)

class App extends React.Component {

  constructor() {
    super() //calling the constructor on React.Componenet that is responsible for setting state

    //initializing todos that are stored in the state
    this.state = {
      todos: [] ,
    }
  }

  //addTodo() adds an object with 3 keys, an id, text and checked field
  addTodo() {
    const text = prompt("Enter ToDo!")
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id++, text: text, checked: false},
      ],
    })
  }

  removeTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => (todo.id !== id))
    })
  }

  //without this toggle function, even on clicking the checkbox it won't get checked or unchecked since it has initially been set as false
  toggleTodo(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id !== id) return todo
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked,
        }
      })
    })
  }

  render() {
    return (
      <div>
        <div>Todo count : {this.state.todos.length}</div>
        <div>Unchecked Todo count : {this.state.todos.filter(todo => !todo.checked).length}</div>
        <button onClick={() => this.addTodo()}>Add TODO</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
     </div>
    );
  }

}

let count = 0;
render(<App count={count++} />, document.getElementById("root"));
