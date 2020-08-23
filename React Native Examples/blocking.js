import React, { Component } from "react";
import { Button, Image, StyleSheet, ScrollView, Text, View } from "react-native";


const Link = props => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(
      styles.link,
      props.style
    )}
  />
);

class App extends Component {

  blockJS() {
    console.log('Blocking!')
    const done = Date.now() + 5000
    while(Date.now() < done) {

    }
    console.log('Unblocked')
  }

  render() {
    return (
      <ScrollView style={styles.app}>

        <View style={styles.text}>
          <Text style={styles.title}>My First App</Text>
        </View>

        <Button onPress={() => this.blockJS()} title="block js" />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
