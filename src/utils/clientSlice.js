import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const clientSlice = createSlice(
    {
        name: "clients",
        initialState: {
            employees : []
        },
        reducers: {
            addEmployee: (state, action) => {
                console.log(action);
                state.employees.push(action.payload);
                console.log("emp added");
                console.log(state.employees);
            },
            removeEmployee: (state) => {
                state.employees.length = 0;
            }
        }
    }
)

export const {addEmployee, removeEmployee} = clientSlice.actions;

export default clientSlice.reducer;