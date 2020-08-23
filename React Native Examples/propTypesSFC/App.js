import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import CustomCount from './Count.js'  //no {} so default import

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CustomCount count={"0"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
