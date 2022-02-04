import { PICKER_SELECTED } from "../actions/types";

const INITIAL_STATE = {
    selectedPicker: ""
};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case PICKER_SELECTED:
            return { ...state, selectedPicker: selectedPicker};
        default:
            return state;
    }
}