import React, { useState } from 'react';
import {
    View,
    TextInput,
    Button,
    StyleSheet,
    Modal
} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    };

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide" >
            <View style={styles.container}>
                <TextInput
                    placeholder="Course Goal"
                    style={styles.textInput}
                    onChangeText={goalInputHandler}
                    value={enteredGoal}
                />
                <View style={styles.buttonFlex}>
                    <View style={styles.buttonWidth}>
                        <Button
                            onPress={props.onCancel}
                            color="red"
                            title="CANCEL"
                        />
                    </View>
                    <View style={styles.buttonWidth}>
                        <Button
                            onPress={addGoalHandler}
                            color="green"
                            title="ADD"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        width: '80%',
        padding: 5,
        marginBottom: 5,
    },
    buttonFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
    },
    buttonWidth: {
        width: '40%',
    },
});

export default GoalInput;