import React, {useState, useEffect} from 'react';
import {Alert,TextInput, View, Button} from 'react-native';
import CardSection from './CardSection';
import Spinner from './Spinner';
import { connect } from 'react-redux';
//import StoreList from './StoreList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { emailChanged, passwordChanged, loginUser } from '../actions/LoginActions';

// kullanicidan gelen login bilgisini redux ile 


 const LoginForm =  (props) => {
        //state = {email: '', password: '', loading: false};
        const navigation = props.navigation;
        const [email, setMail] = useState("");
        const [password, setPassword] = useState("");
        const [loading, setLoading] = useState(false);

        //useEffect(() => {setMail(""), [] });

       

        const renderButton = () =>
        {
            if(!loading){
            //return <Button title={"Login"} onPress={() => clickLogin()}> Login </Button>;
            return <Button title={"Login"} onPress={() => navigation.navigate('Store')}> Login </Button>;
            }
            return <Spinner size="small" />;
        }

        
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
                {renderButton()}
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
      }
};

const mapStateToProps = ( {storeResponse} ) => {
    const { email, password, loading } = storeResponse;
    return { // return dediğim anda artık bu değerler props'a dahil oluyor
        email,
        password
    };
}

export default connect(mapStateToProps, {emailChanged, passwordChanged})(LoginForm);

