import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

import Colors from '../constants/colors';

import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
            your phone needed{' '}
            <Text style={styles.highLight}>{props.gameRound}</Text> rounds to
            guess the number{' '}
            <Text style={styles.highLight}>{props.userNumber}</Text>
          </BodyText>
        </View>
        <MainButton onPress={props.newGame}>RESTART GAME</MainButton>
      </View>
    </ScrollView>
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
    // borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    // width: 300,
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    overflow: 'hidden',
    // marginVertical:
    marginVertical: Dimensions.get('window').height / 30,
  },
  highLight: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultText: {
    textAlign: 'center',
    // fontSize: 20,
    fontSize: Dimensions.get('window').height < 100 ? 16 : 20,
  },
  resultContainer: {
    // marginVertical: 15,
    marginHorizontal: 30,
    marginVertical: Dimensions.get('window').height / 60,
  },
});

export default GameOverScreen;
