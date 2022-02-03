import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { Button } from './Button';
import { connect } from 'react-redux';


const SatinAl =  () => {

    return( 
        <View style={{flex:1,backgroundColor: 'white'}}>
            <CardSection>
                <TextInput 
                placeholder='Email'
                style={styles.inputStyle}
                value={email}
                onChangeText={email => setMail(email)} // ikinci kullanımı {text => this.setState({email: text})}
                /> 
            </CardSection>

            <CardSection>
                <TextInput
                secureTextEntry 
                placeholder='Password'
                style={styles.inputStyle}
                value={password}
                onChangeText={password => setPassword(password)} // ikinci kullanımı {text => this.setState({email: text})}
                /> 
            </CardSection>

            <CardSection>
                <Button title={"SatinAlmaIslemi"} onPress={() => navigation.navigate('IslemGerceklesti')}> Satın Al </Button>
            </CardSection>
            </View>
    )
}

export default SatinAl;