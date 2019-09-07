import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return <TextInput style={{ ...styles.userInput, ...props.style }} />
}

const style = StyleSheet.create({
    userInput: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
    },
});

export default Input;