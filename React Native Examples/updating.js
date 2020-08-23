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

export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      count: 0,
    }
    //this.inc=this.inc.bind(this)
  }

  //we can set up our timer after our components are mounted
  componentDidMount() {
    setInterval(this.inc , 1000) //inc will be called every 1 sec
  }

  //shorthand notation to create class properties
  inc = () => {
    this.setState( prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    return (
      <View style={styles.appContainer}>
        <CountEvenNumbers count={this.state.count} />
     </View>
    );
  }

}
