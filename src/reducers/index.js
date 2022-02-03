import { combineReducers } from "redux";
import { sepeteEklendi } from "../actions";
import loginReducer from "./loginReducer";
import sepetReducer from "./sepetReducer";

export default combineReducers({
    loginResponse: loginReducer,
    sepetResponse: sepetReducer
});
