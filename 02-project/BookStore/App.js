import React, { Component } from 'react';
import {createAppContainer} from 'react-navigation';
import MainNavigator from './MainNavigator';

const AppContainer = createAppContainer(MainNavigator);

export default class App extends Component {

  
  render() {
    return (
     
        <AppContainer/>   
       

    );
  }

}


