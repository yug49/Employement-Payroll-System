import { createSlice } from "@reduxjs/toolkit";

const paySlipSlice = createSlice(
    {
        name: "paySlips",
        initialState: {
            tax : 0,
            overTime : 100,
            underTime : 200,
        },
        reducers: {
            updateTax: (state, action) => {
                if(action.payload) state.tax = action.payload;
            },
            updateOverTime: (state, action) => {
                if(action.payload) state.overTime = action.payload;
            },
            updateUnderTime : (state, action) => {
                if(action.payload) state.underTime = action.payload;
                console.log("updated" + state.underTime);
            }
            
        }
    }
)

export const {updateTax, updateOverTime, updateUnderTime} = paySlipSlice.actions;

export default paySlipSlice.reducer;