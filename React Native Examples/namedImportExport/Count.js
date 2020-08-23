import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  text: {fontSize: 72},
})

export const num = 50

export const Count = props => (
  <Text style={styles.text}>{props.count}</Text>
)
