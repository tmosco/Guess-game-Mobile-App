import React from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import Colors from '../constants/colors';

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
      <View style={styles.resultContainer}>
        
      <BodyText style={styles.resultText}>
        your phone needed <Text style={styles.highLight}>{props.gameRound}</Text> rounds to guess the
        number <Text style={styles.highLight}>{props.userNumber}</Text>
      </BodyText>
      </View>
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
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    width: 300,
    height: 300,
    overflow: 'hidden',
    marginVertical: 30,
  },
  highLight:{
    color:Colors.primary,
    fontFamily:'open-sans-bold',
  },
  resultText:{
    textAlign:'center',
    fontSize:20
  },
  resultContainer:{
    marginVertical:15,
    marginHorizontal:30
  }
});

export default GameOverScreen;
