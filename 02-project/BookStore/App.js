import React, { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryListItem from './components/CategoryListItem';

// image
import book from './assets/book.png';
import soccer from './assets/soccer.png';
import movie from './assets/movie.png';
import ski from './assets/ski.png';
import game from './assets/game.png';

export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        categories: [
          {
            id: 1,
            title: 'Books',
            image: book
          },
          {
            id: 2,
            title: 'Soccer',
            image: soccer
          },
          {
            id: 3,
            title: 'Movie',
            image: movie
          },
          {
            id: 4,
            title: 'Ski',
            image: ski
          },
          {
            id: 5,
            title: 'Game',
            image: game
          },
          {
            id: 6,
            title: 'Ski',
            image: ski
          },
          {
            id: 7,
            title: 'Game',
            image: game
          },
          {
            id: 8,
            title: 'Books',
            image: book
          },
          {
            id: 9,
            title: 'Soccer',
            image: soccer
          },
          {
            id: 10,
            title: 'Movie',
            image: movie
          }
        ]
    }

  }

  render() {
    const {categories} = this.state;
    return (
      <View>
        
          <FlatList 
            data={categories}
            renderItem={({item}) => <CategoryListItem category={item}/>}
            keyExtractor={(item) => `${item.id}`}
            contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
          />
         
      </View>
    );
  }

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
