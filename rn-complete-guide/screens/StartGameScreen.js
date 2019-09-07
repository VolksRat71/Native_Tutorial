import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Image
} from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };
    const resetInputHandler = () => {
        setEnteredValue('');
    };

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Card style={styles.inputContainer}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.textInputWidth}
                        blurOnSubmit
                        autoCapitalize='none'
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonFlex}>
                        <View style={styles.inputButtons}>
                            <Button
                                color={Colors.accent}
                                title="Reset"
                                onPress={resetInputHandler}
                            />
                        </View>
                        <View style={styles.inputButtons}>
                            <Button
                                color={Colors.primary}
                                title="Confirm"
                            />
                        </View>
                    </View>
                </Card>
                <Image
                    style={styles.imageStyle}
                    source={require('../assets/images/computer_guess_emoji.gif')}
                />
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
    buttonFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 15,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        marginVertical: 35,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    userInput: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        marginVertical: 10,
    },
    inputButtons: {
        width: '40%',
    },
    textInputWidth: {
        width: 50,
        textAlign: 'center',
    },
    imageStyle: {
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '65%',
    }
});

export default StartGameScreen;