import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Button } from './Button';
import { connect } from 'react-redux';
import CardSection from './CardSection';


const IslemOkay =  () => {

    return( 
        <View style={{flex:1,backgroundColor: 'white'}}>
           
            <CardSection>
                <Text>  İşleminiz başarıyla gerçekleştirilmiştir. </Text>
            </CardSection>

            <CardSection>
                <Button title={"AnasayfaDon"} onPress={() => navigation.navigate('StoreList')}> Anasayfaya Dön </Button>
            </CardSection>
            </View>
    )
}

export default IslemOkay;