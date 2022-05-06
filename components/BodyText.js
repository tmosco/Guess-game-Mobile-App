import React from 'react';
import {Text, StyleSheet } from 'react-native';



const BodyText = props => <Text style={styles.text}>{props.children}</Text>


const styles = StyleSheet.create({
text:{
    fontFamily:'open-sans'
}
})

export default BodyText;

