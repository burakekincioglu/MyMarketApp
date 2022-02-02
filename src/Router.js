
import * as React from 'react';
import {Router} from 'react-native-router-flux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {LoginForm} from './components/LoginFrom';
import {StoreList} from './components/StoreList';
import {Sepet} from './components/Sepet';
//import Card from './components/LoginFrom';

const Stack = createNativeStackNavigator();

const RouterComponent = () => {
    
    return(
        <Router sceneStyle={{marginTop: 65}}>
            <NavigationContainer>
                <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginForm} />
                 <Stack.Screen name="Store" component={StoreList} /> 
                 <Stack.Screen name="Sepet" component={Sepet} />
                    
                </Stack.Navigator>
            </NavigationContainer>
        </Router>
    );
}

export default RouterComponent;