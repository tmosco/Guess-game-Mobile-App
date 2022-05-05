import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const NumberContainer = (props) => {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.number}>{props.children}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  numberContainer: {
    backgroundColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    padding:10,
    borderRadius:10,
    marginVertical:10
  },
  number:{
      color: Colors.accent,
      fontSize:22
  }
});

export default NumberContainer;
