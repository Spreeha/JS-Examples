import React from "react";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from "react-native";
import Constants from 'expo-constants'

//import App from "./App";


const styles = StyleSheet.create({
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    },
  appContainer: {
    paddingTop: Constants.statusBarHeight+50,
    },
    fill: {
      flex: 1,
    },
})

let id = 0   //to identify each todo by a unique id

//Todo is a React component
const Todo = props => (
  <View style={styles.todoContainer}>
    <Switch value={props.todo.checked} onValueChange={props.onToggle} />
    <Text>{props.todo.text}</Text>
    <Button onPress={props.onDelete} title="Delete" />
  </View>
)

export default class App extends React.Component {

  constructor() {
    super() //calling the constructor on React.Componenet that is responsible for setting state

    //initializing todos that are stored in the state
    this.state = {
      todos: [] ,
    }
  }

  //addTodo() adds an object with 3 keys, an id, text and checked field
  addTodo() {
    id++
    const text = `TODO number ${id}`
    this.setState({
      todos: [
        ...this.state.todos,
        {id: id, text: text, checked: false},
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
      <View style={[styles.appContainer, styles.fill]}>
        <Text>Todo count : {this.state.todos.length}</Text>
        <Text>Unchecked Todo count : {this.state.todos.filter(todo => !todo.checked).length}</Text>
        <Button onPress={() => this.addTodo()} title="Add TODO" />
        <ScrollView style={styles.fill}>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleTodo(todo.id)}
              onDelete={() => this.removeTodo(todo.id)}
              todo={todo}
            />
          ))}
        </ScrollView>
     </View>
    );
  }

}
