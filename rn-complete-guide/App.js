import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  };

  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    // Text Input and Button
    <View style={styles.screen}>
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
          onPress={addGoalHandler}
        />
      </View>
      {/* Upon Render, empty container, onPress list */}
      <View>
        {courseGoals.map((goal) =>
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
  listItem: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  }
});
