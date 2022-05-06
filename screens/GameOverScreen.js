import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Game Over!</Text>
      <Text>Number of rounds: {props.gameRound}</Text>
      <Text>Number was :{props.userNumber}</Text>
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
