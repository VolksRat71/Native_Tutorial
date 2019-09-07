import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors'
import Input from '../components/Input'

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>The Game Screen!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a Number</Text>
                <Input style={styles.textInputWidth} />
                <View style={styles.buttonFlex}>
                    <View style={styles.inputButtons}><Button color={Colors.primary} title="Reset" /></View>
                    <View style={styles.inputButtons}><Button color={Colors.accent} title="Confirm" /></View>
                </View>
            </Card>
        </View>
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
    }
});

export default StartGameScreen;