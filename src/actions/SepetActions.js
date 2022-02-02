import { SEPET_EKLENDI } from "./types";

export const sepeteEklendi = (sepetData) => {
    return (dispatch) => {
        dispatch({
            type: SEPET_EKLENDI,
            sepetData,
            sepeUrunCount

        });
    };
};