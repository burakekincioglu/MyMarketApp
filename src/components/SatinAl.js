import React, { useState } from 'react';
import { View, Text, TextInput, Button} from 'react-native';
import CardSection from './CardSection';
//import Button from './Button';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';


const SatinAl = ({ navigation }) => {
    const [kartno, setKart] = useState("");

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <CardSection >
                <Text> Kart Bilgisi Giriniz </Text>
            </CardSection>

            <CardSection>
                <TextInput
                    placeholder='Kart Numarası'
                    style={styles.inputStyle}
                    value={kartno}
                    onChangeText={kartNo => setKart(kartNo)}
                />
            </CardSection>

            <CardSection>

                <Button title={"Satın Al"} onPress={() => navigation.navigate('IslemOkay')} />

            </CardSection>
        </View>
    )
}

const styles = {

    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    }
};

export default SatinAl;