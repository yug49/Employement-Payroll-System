import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice"
import paySlipReducer from "./paySlipSlice"
import adminReducer from "./adminSlice"
import leaveReducer from "./leaveSlice"
import userReducer from "./userSlice"
import salaryReducer from "./salarySlice";

const appStore = configureStore(
    {
        reducer: {
            client : clientReducer,
            admin : adminReducer,
            paySlip : paySlipReducer,
            leaves : leaveReducer,
            user : userReducer,
            salary: salaryReducer,
        },
    }
)

export default appStore;