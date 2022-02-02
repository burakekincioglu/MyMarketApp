
import * as React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginForm, Card} from './components/LoginFrom';
//import Card from './components/LoginFrom';

const Stack = createNativeStackNavigator();

const RouterComponent = () => {
    
    return(
        <Router sceneStyle={{marginTop: 65}}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Login" component={LoginForm} />
                    <Stack.Screen name="Store" component={Card} />
                </Stack.Navigator>
            </NavigationContainer>
        </Router>
    );
}

export default RouterComponent;