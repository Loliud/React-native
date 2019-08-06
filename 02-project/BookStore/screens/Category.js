import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';


export default class Category extends Component {
  static navigationOptions = ({ navigation }) => {
    console.log(navigation);
    return {
      title: navigation.getParam('categoryName'),
      headerTitleStyle: {
        position: 'absolute',
        left: '50%',
        transform: [{ translateX: -70 }]

      },
    }
  }


  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get('https://5d3029eb28465b00146aaca5.mockapi.io/api/products').then(res => {
      let list = res.data.filter((item) => {
        return item.category === 1;
      });
      this.setState({
        products: list
      });
    });
  }

  render() {


    return (
      <FlatList data={this.state.products}
        numColumns={2}
        renderItem={({ item }) =>
          <View style={styles.shadow}>
            <Image
              style={styles.img}
              source={{ uri: item.image }}
            />
            <View >
              <Text style={styles.info}>{item.name}</Text>
              <View style={styles.priceRow}>
                <Text style={styles.price}>{item.price} $</Text>
                <Text style={styles.button}>Mua +</Text>
              </View>
            </View>
          </View>

        }
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
      />


    );
  }

}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f4f4f4',
    alignItems: 'stretch',
    flex: 1,
    justifyContent: "center",
    paddingTop: 16
  },
  shadow: {
    elevation: 5,
    backgroundColor: '#FFF',
    marginBottom: 16,
    flex: 1,
    paddingTop: 16,
    paddingLeft: 8,
    paddingRight: 8,
    marginHorizontal: 8
  },
  img: {
    alignSelf: 'center',
    width: 100,
    height: 100
  },
  info: {
    paddingTop: 8,
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-start'
  },

  priceRow: {

    flexDirection: 'row',
    justifyContent: 'space-between'

  },
  price: {
    fontSize: 15,
    textTransform: 'uppercase',
  },
  button: {
    fontSize: 18,
    textTransform: 'uppercase',
    color: '#196677'
  }

});

