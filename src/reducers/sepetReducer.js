import { SEPET_EKLENDI } from "../actions/types";

const INITIAL_STATE = {
    sepetData: [],
    sepetUrunCount: 0 
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case SEPET_EKLENDI:
            return { ...state, sepetData: action.sepetData, sepetUrunCount: action.sepetUrunCount + 1};
        default:
            return state;
    }
}