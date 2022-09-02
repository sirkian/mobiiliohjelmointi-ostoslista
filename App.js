import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Button } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.length < 1) return;
    const newItem = ([...items, text]);
    setItems(newItem);
    setText('');
  }

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        onChangeText={text => setText(text)} 
        value={text} 
      />
      <View style={styles.btnContainer}>
        <Button 
          title='ADD' 
          onPress={addItem} 
        />
        <Button 
          title='CLEAR'
          onPress={() => setItems([])}
        />
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.text}>Shopping List</Text>
        <FlatList
          data={items}
          renderItem={({item}) =><Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <StatusBar style="auto" />
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    marginTop: 150,
    backgroundColor: '#afdeed',
    width: 200,
    height: 40,
    borderRadius: 2,
    textAlign: 'center'
  },
  btnContainer: {
    flexDirection: 'row',
    margin: 20
  },
  text: {
    fontSize: 18,
    color: 'dodgerblue',
    margin: 8,
    fontWeight: 'bold'
  },
  listContainer: {
    backgroundColor: '#afdeed',
    alignItems: 'center',
    maxHeight: 250,
    width: 200,
    borderRadius: 2,
    padding: 5
  }
});
