import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER } from "../actions/types";

const INITIAL_STATE = {
    email: '',
    password: '',
    loading: false
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.email};
        case PASSWORD_CHANGED:
            return  { ...state, password: action.password};
        case LOGIN_USER:
            action.navigation.navigate('Store');
            return { ...state, navigation: action.navigation};
        default:
            return state;
    }
}