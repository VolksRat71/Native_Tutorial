import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flexDirection: 'row',
    width: '80%',
    height: 300,
    justifyContent: 'space-between',
    alignItems: 'stretch'
  },
});
