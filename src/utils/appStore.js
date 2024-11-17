import { configureStore } from "@reduxjs/toolkit";
import clientReducer from "./clientSlice"
import paySlipReducer from "./paySlipSlice"
import adminReducer from "./adminSlice"
import leaveReducer from "./leaveSlice"
import { addUser, removeUser } from "./clientSlice";

const appStore = configureStore(
    {
        reducer: {
            client : clientReducer,
            admin : adminReducer,
            paySlip : paySlipReducer,
            leaves : leaveReducer
        },
    }
)

export default appStore;