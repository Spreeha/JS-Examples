import React from "react";
import {View, Button, Text, ScrollView, StyleSheet, Switch} from "react-native";
import Constants from 'expo-constants'

//import App from "./App";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontSize: 48,
  }
})

//update only even seconds
class CountEvenNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    //if(nextProps.count % 2)
      //return true
    return !(nextProps.count % 2) //we exit early on odd numbers
  }

  componentDidUpdate() {
    console.log(this.props.count) //only even nos get logged
  }

  render() {
    return (
      <Text style={styles.count}>{this.props.count}</Text>
    )
  }
}

class Counter extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0,
    }
    //this.inc=this.inc.bind(this)
  }

  //we can set up our timer after our components are mounted
  componentDidMount() {
    //When it remounts it creates a new interval
    this.interval = setInterval(this.inc , 1000) //creates an ID of the created interval
  }

  componentWillUnmount() {
    clearInterval(this.interval) //clearing the interval before it gets unmounted
  }

  //shorthand notation to create class properties
  inc = () => {
    console.log('Increment')
    this.setState( prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}>{this.state.count}</Text>
     </View>
    );
  }

}


export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      showCounter: true,
    }
  }

  toggleCounter = () => this.setState(prevState => ({
    showCounter: !prevState.showCounter,
  }))

  render() {
    if(this.state.showCounter) {
      return (
        <View style={styles.appContainer}>
          <Button title="toggle" onPress={this.toggleCounter} />
          <Counter />
        </View>
      )
    }
    else {
      return <Button title="toggle" onPress={this.toggleCounter} />
    }
  }
}
