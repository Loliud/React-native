import {createStackNavigator }  from 'react-navigation';
import Categories from './screens/Categories';
import Category from './screens/Category';

const MainNavigator = createStackNavigator({
    Categories: {screen: Categories },
    Category: {screen: Category}
});

export default MainNavigator;