import { SEPET_EKLENDI } from "./types";


export const sepeteEklendi = (sepetData, sepetUrunCount) => {
    return {
        type: SEPET_EKLENDI,
        sepetData,
        sepetUrunCount
    };
};