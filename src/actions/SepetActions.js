import { SEPET_EKLENDI } from "./types";


export const sepeteEklendi = (sepetData) => {
    return {
        type: SEPET_EKLENDI,
        sepetData
        
    };
};