import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return <TextInput {...props} style={{ ...styles.userInput, ...props.style }} />
}

const styles = StyleSheet.create({
    userInput: {
        marginVertical: 10,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
});

export default Input;