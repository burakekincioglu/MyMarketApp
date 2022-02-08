import React, { useState, useEffect } from 'react';
import { Alert, TextInput, View, Button } from 'react-native';
import CardSection from './CardSection';
import Spinner from './Spinner';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { emailChanged, passwordChanged } from '../actions/LoginActions';

// kullanicidan gelen login bilgisini redux ile 


const LoginForm = ({ navigation }) => {
    //state = {email: '', password: '', loading: false};
    //const navigation = props.navigation;
    const [email, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    //useEffect(() => {setMail(""), [] });
    const logmethod = () => {
        console.log("Email is Not Correct")
    }

    const handleValidEmail = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (!reg.test(text)) {
            console.log("Email is Not Correct");
            Alert.alert(
                "Email Alert",
                "Email is Not Correct. Please write in ***@**.com consept",
                [
                  { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
              );
        }
        else {
            //setMail(text);
            navigation.navigate('Store');
        }
    };

    const renderLoginButton = () => {
        if (!loading) {
            //return <Button title={"Login"} onPress={() => clickLogin()}> Login </Button>;
            return <Button title={"Login"} onPress={() => handleValidEmail(email)}> Login </Button>;
        }
        return <Spinner size="small" />;
    }

    const renderNewUserButton = () => {
        if (!loading) {
            //return <Button title={"Login"} onPress={() => clickLogin()}> Login </Button>;
            return <Button title={"New User"} onPress={() => navigation.navigate('Register')}> Register </Button>;
        }
        return <Spinner size="small" />;
    }


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
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
                {renderLoginButton()}
            </CardSection>
            <CardSection>
                {renderNewUserButton()}
            </CardSection>
        </View>

    );


};

const styles = {

    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
    },
    cardsection: {
        
    }
};

const mapStateToProps = ({ loginResponse }) => {
    const { email, password, loading } = loginResponse;
    return { // return dediğim anda artık bu değerler props'a dahil oluyor
        email,
        password
    };
}

function mapDispatchToProps(dispatch, ownProps) {

}


export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);

