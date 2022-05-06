import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/success.png')}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <BodyText>Number of rounds: {props.gameRound}</BodyText>
      <BodyText>Number was :{props.userNumber}</BodyText>
      <Button title="Restart Game" onPress={props.newGame} />
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
  image: {
    width: '100%',
    height: '100%',
  },
  imageContainer:{
    borderRadius: 150,
    borderWidth:3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow:'hidden',
    marginVertical:30

    
  }
});

export default GameOverScreen;
