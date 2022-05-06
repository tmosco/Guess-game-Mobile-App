import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import Colors from '../constants/colors';
import Card from '../components/Card';
import InputField from '../components/InputField';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';


const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };

  const resetInputFieldHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
    dismissKeyboard();
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number', 'Number has to be between 1 and 99', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: resetInputFieldHandler,
        },
      ]);
      return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    dismissKeyboard();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <BodyText>You selected</BodyText>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="Start Game" onPress={()=>{props.onStartGame(selectedNumber)}}/>
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start Game!</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText> Select a Number</BodyText>
          <InputField
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttons}>
            <View style={styles.buttonSize}>
              <Button
                title="Reset"
                color={Colors.secondary}
                onPress={resetInputFieldHandler}
              />
            </View>
            <View style={styles.buttonSize}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  title: {
    marginVertical: 10,
  },
  buttons: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  buttonSize: {
    width: 80,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    alignItems:'center'
  },
});

export default StartGameScreen;
