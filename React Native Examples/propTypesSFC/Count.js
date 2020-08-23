import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  text: {fontSize: 72},
})

const Count = props => (
  <Text style={styles.text}>{props.count}</Text>
)

Count.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Count
