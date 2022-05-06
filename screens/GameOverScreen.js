import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import BodyText from '../components/BodyText';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game Over!</BodyText>
      <BodyText>Number of rounds: {props.gameRound}</BodyText>
      <BodyText>Number was :{props.userNumber}</BodyText>
      <Button title="Restart Game"  onPress={props.newGame}/>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default GameOverScreen;
