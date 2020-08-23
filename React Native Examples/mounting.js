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
        <Text style={styles.count}>{this.state.count}</Text>
     </View>
    );
  }

}
