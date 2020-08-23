import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  text: {fontSize: 72},
})

class Count extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired,
  }
  render() {
    return (
      <Text style={styles.text}>
        {this.props.count}
      </Text>
    )
  }
}

export default Count
