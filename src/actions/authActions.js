import { Alert } from "react-native";
import {Actions} from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from "./types";

export const studentCreate = ({ name, surname, no }) => {
    return (dispatch) => {
        dispatch({ type: CREATE_REQUEST });
        firebase.database().ref(`/users/${currentUser.uid}/students`)
        .push({ name, surname, no })
        .then(() => {
            dispatch({ type: CREATE_REQUEST_SUCCESS });
            Actions.pop();//bir önceki sayfaya dönmeyi sağlar. kayıt sayfasından öğrenci listesi sayfasına dönmüş oldu
        })
    }
};

export const emailChanged = (email) => {
    return (dispatch) => {
        dispatch({
            type: EMAIL_CHANGED,
            payload: email
        });
    };
};

export const passwordChanged = (password) => {
    return (dispatch) => {
        dispatch({ // dispatch burada reducer'ı ayağa kaldırmak için var
            type: PASSWORD_CHANGED,
            payload: password
        });
    };
};


export const loginUser = ({email, password}) => {
    return(dispatch) => {
        dispatch({type: LOGIN_USER});
        if(email === '' || password === '')
        {
            Alert.alert('Message', 'Email and Password should not be empty.', 
            [ {text: 'Okay', onPress: () => dispatch({type: LOGIN_USER_FAIL}) 
            } ]);
        }
        else
        {
            firebase.auth().signInWithEmailAndPassword(email, password) // firebase de böyle bir kullanıcı varsa loginSuccess metodunun içine düşüyor
            .then(user => loginSuccess(dispatch, user))
            .catch(()=>{
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => loginSuccess(dispatch, user))
                .catch( () => loginFail()); // çağrılma şekline dikkat
            });
        }
    }
};

const loginSuccess = (dispatch, user) => { // dispatch ile reducer hareket ettiriliyor. login_user_succes diye bir type göndericem ve o type loading'i false edicek.
    console.log('login başarılı');
    dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: user
    });
    Actions.studentList();
};

const loginFail = (dispatch) => {
    Alert.alert('Message', 'Login Failed', 
            [ {text: 'Okay', onPress: ()=> null} ]);
    dispatch({
        type: LOGIN_USER_FAIL
    });
    Actions.main();
};