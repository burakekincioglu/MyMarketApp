import { PICKER_SELECTED } from "./types";


export const pickerSelected = (selectedPicker) => {
    return {
        type: PICKER_SELECTED,
        selectedPicker
        
    };
};