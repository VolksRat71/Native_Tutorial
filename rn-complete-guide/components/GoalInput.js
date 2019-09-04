import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Course Goal"
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoal}
            />
            <Button
                title="ADD"
                style={styles.button}
                onPress={props.onAddGoal.bind(this, enteredGoal)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        padding: 5,
    },
    button: {

    },
});

export default GoalInput;