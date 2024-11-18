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
                state.employees.push(action.payload);
            },
            removeEmployee: (state) => {
                state.employees.length = 0;
            }
        }
    }
)

export const {addEmployee, removeEmployee} = clientSlice.actions;

export default clientSlice.reducer;