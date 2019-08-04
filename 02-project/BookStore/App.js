import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import home from './assets/Home.png';
import book from './assets/book.png';
import cart from './assets/cart.png'
export default function App() {
  return (
    <View style={styles.container}>
      <CategoryListItem image={home} title="Home"/>
      <CategoryListItem image={book} title="Products"/>
      <CategoryListItem image={cart} title="Cart"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
