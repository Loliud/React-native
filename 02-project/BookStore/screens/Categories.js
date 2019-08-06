import React, { Component } from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import CategoryListItem from '../components/CategoryListItem';

// image
import book from '../assets/book.png';
import soccer from '../assets/soccer.png';
import movie from '../assets/movie.png';
import ski from '../assets/ski.png';
import game from '../assets/game.png';

export default class Categories extends Component {


  constructor(props) {
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

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Home',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#0D2143',
      display: 'flex',
    },
    headerTitleStyle: {
     position: 'absolute',
     left: '50%',
     transform: [{translateX: -45}]

    },
    headerTintColor: '#fff',

  });

  render() {
    const { categories } = this.state;
    const {navigation} = this.props;
    
    return (


      <FlatList
        data={categories}
        renderItem={({ item }) => <CategoryListItem category={item}  onPress={() => navigation.navigate('Category', {categoryName: item.title})} />}
        keyExtractor={(item) => `${item.id}`}
        contentContainerStyle={styles.container}
      
      />


    );
  }

}

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
});
