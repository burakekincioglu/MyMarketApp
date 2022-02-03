import { SEPET_EKLENDI } from "../actions/types";

const INITIAL_STATE = {
    sepetData: [] 
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case SEPET_EKLENDI:
            return { ...state, sepetData: [...state.sepetData, action.sepetData]};
        default:
            return state;
    }
}