import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
//import { Button } from './Button';
import {CardSection} from './CardSection';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';



const IslemOkay =  (navigation) => {

    return( 
           
            <View>
                <Text>  İşleminiz başarıyla gerçekleştirilmiştir. </Text>
            </View>
    );
}

export default IslemOkay;