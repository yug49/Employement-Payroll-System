import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice(
    {
        name: "admin",
        initialState: null,
        reducers: {
            addUser: (state, action) => {
                return action.payload;
            },
            removeUser: (state, action) => {
                return null;
            }
        }
    }
)

export const {addAdmin, removeAdmin} = adminSlice.actions;

export default adminSlice.reducer;