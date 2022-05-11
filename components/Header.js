import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = (props) => {
  return (
    <View style={{...styles.headerBase, ...Platform.select({ios:styles.headerIos, android:styles.headerAndroid})}}>
      <TitleText style={styles.title}> {props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerBase: {
    width: '100%',
    height: 70,
    paddingTop: 36,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerIos: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    backgroundColor: 'white',
  },
  headerAndroid: {
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
    backgroundColor: Colors.primary,
  },
  title: {
    color: Platform.OS === 'ios' ? Colors.primary : 'white',
  },
});

export default Header;
