import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50 }}>
      <View style={styles.container}>
        <TextInput placeholder="Course Goal" style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 20, width: '80%' }} />
        <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
