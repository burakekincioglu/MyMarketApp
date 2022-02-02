import { Alert } from "react-native";
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./types";

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({ // dispatch burada reducer'ı ayağa kaldırmak için var
            type: PASSWORD_CHANGED,
            password
        });
    };
};

export const loginUser = ({ email, password, navigation }) => {
    return (dispatch) => {
        dispatch({
            type: LOGIN_USER,
            navigation
        });

    }
};

const loginSuccess = (navigation) => { // dispatch ile reducer hareket ettiriliyor. login_user_succes diye bir type göndericem ve o type loading'i false edicek.
    console.log('login başarılı');
    dispatch({
        type: LOGIN_USER_SUCCESS,
    });
    navigation.navigate('Store');
};

const loginFail = (dispatch) => {
    Alert.alert('Message', 'Login Failed',
        [{ text: 'Okay', onPress: () => null }]);
    dispatch({
        type: LOGIN_USER_FAIL
    });
    Actions.main();
};