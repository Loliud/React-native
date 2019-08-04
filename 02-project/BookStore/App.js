import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryListItem from './components/CategoryListItem';
import home from './assets/Home.png';
import book from './assets/book.png';
import cart from './assets/cart.png'
export default function App() {
  return (
    <View>
      <ScrollView style={{paddingLeft: 16, paddingRight: 16}} contentContainerStyle={{marginTop: 200}}>
        <CategoryListItem image={home} title="Home" />
        <CategoryListItem image={book} title="Products" />
        <CategoryListItem image={cart} title="Cart" />
        <CategoryListItem image={home} title="Home" />
        <CategoryListItem image={book} title="Products" />
        <CategoryListItem image={cart} title="Cart" />
        <CategoryListItem image={home} title="Home" />
        <CategoryListItem image={book} title="Products" />
        <CategoryListItem image={cart} title="Cart" />
        <CategoryListItem image={home} title="Home" />
        <CategoryListItem image={book} title="Products" />
        <CategoryListItem image={cart} title="Cart" />
      </ScrollView>
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
