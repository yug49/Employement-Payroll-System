import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const salarySlice = createSlice(
    {
        name: "salary",
        initialState: {
            salary : [5000],
            employee : ["employee@company.com"]
        },
        reducers: {
            addSalary: (state, action) => {
                state.salary.push(action.payload);
            },
            addEmployee: (state, action) => {
                state.employee.push(action.payload);
            }
        }
    }
)

export const {addSalary, addEmployee} = salarySlice.actions;

export default salarySlice.reducer;