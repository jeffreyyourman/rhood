// import axios from "axios";

export function createIndexStore() {
    return {
        earningsResponse: [] as any,
        dividendHistoryResponse: [] as any,
        instrumentResponse: [] as any,
        paymentsResponse: [] as any,
        // startUpServices() {
           
        // }
        // userData: {} as UserDataType,
        // data: {} as IndexResponseDataType,
        // buildFeedback: {} as any,
        // disableInputBox:false as boolean,
        // submitEMSArr: [] as any,
        // newEmsIntent: '' as any,

        // welcomeGreeting() {
        //     const dateObject = new Date();
        //     // const localTime = dateObject.toLocaleTimeString();
        //     const localHours = dateObject.getHours();
        //     // const localDate = dateObject.toLocaleDateString();
        //     let greeting;
        //     if (localHours >= 3 && localHours < 12) {
        //         greeting = `morning`
        //     }
        //     if (localHours >= 12 && localHours < 17) {
        //         greeting = `afternoon`
        //     }
        //     if (localHours >= 17 && localHours < 24) {
        //         greeting = `evening`
        //     }
        //     if (localHours < 3 || localHours >= 24) {
        //         greeting = `evening`
        //     }
        //     return greeting;
        // },
    }
};

export type TIndexStore = ReturnType<typeof createIndexStore>