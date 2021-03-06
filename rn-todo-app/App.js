import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Button,
  FlatList
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }

  return (
    // Text Input and Button
    <View style={styles.screen}>
      <Button
        title="Add New Goal" onPress={() => setIsAddMode(true)}
        style={styles.addButton} />
      <GoalInput
        onCancel={cancelGoalAdditionHandler}
        visible={isAddMode}
        onAddGoal={addGoalHandler} />
      {/* Upon Render, empty container, onPress list */}
      <View>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={courseGoals}
          renderItem={itemData =>
            <GoalItem
              id={itemData.item.id}
              onDelete={removeGoalHandler}
              title={itemData.item.value}
            />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  addButton: {
    paddingBottom: 5,
  }
});
