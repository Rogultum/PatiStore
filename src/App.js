import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  TextInput,
  Text,
  StyleSheet,
} from 'react-native';
import Product from './components/Products/Product';
import Data from './product-data.json';

function App() {
  const [text, setText] = useState('');

  const renderProducts = item => <Product product={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATISTORE</Text>
      <TextInput
        style={styles.input}
        placeholder="Ara..."
        value={text}
        onChangeText={setText}
      />
      <FlatList data={Data} renderItem={renderProducts} numColumns={2} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    color: 'purple',
    fontSize: 44,
  },
  input: {
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    margin: 4,
    padding: 5,
  },
});

export default App;
