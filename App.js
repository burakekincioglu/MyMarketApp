import React, { Component } from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './src/reducers';
//import Router from './src/Router';
import LoginForm from './src/components/LoginFrom';
//import StoreList from './src/components/StoreList';
import StoreList from './src/components/StoreList';
import Sepet from './src/components/Sepet'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class App extends Component {

  render() {
    const store = createStore( rootReducer, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginForm}  />
                     <Stack.Screen name="Store" component={StoreList} />
                     <Stack.Screen name="Sepet" component={Sepet} />  
                </Stack.Navigator>
            </NavigationContainer>
      </Provider> 
    );
  }
}


export default App;








