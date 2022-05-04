import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const InputField = (props) => {
  return (
    <View>
      <TextInput {...props} style={{ ...styles.input, ...props.style }} />
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth:1,
    margin:10
  },
});

export default InputField;
