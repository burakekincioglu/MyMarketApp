import React, { useState} from 'react';
import { TextInput, View } from 'react-native';
import { Button } from './Button';
import { CardSection } from './CardSection';




const Register = () => {

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [no, setNo] = useState("");

    const { inputStyle } = styles;
    
    return (

        <View>
            <CardSection>
                <TextInput
                    placeholder='Name'
                    style={inputStyle}
                    value={name}
                    onChangeText={name => setName(name)} // ikinci kullanımı {text => this.setState({email: text})}
                />
            </CardSection>

            <CardSection>
                <TextInput
                    placeholder='SurName'
                    style={inputStyle}
                    value={surname}
                    onChangeText={surname => setSurname(surname)} // ikinci kullanımı {text => this.setState({email: text})}
                />
            </CardSection>

            <CardSection>
                <TextInput
                    placeholder='Telephon No'
                    style={inputStyle}
                    value={no}
                    onChangeText={no => setNo(no)} // ikinci kullanımı {text => this.setState({email: text})}
                />
            </CardSection>

            <CardSection>
                <Button onPress={null}> Register </Button>;
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


export default Register;