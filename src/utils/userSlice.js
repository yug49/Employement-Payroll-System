import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: "user",
        initialState: {
            emailId: "",
            password: ""
        },
        reducers: {
            addUserEmail: (state, action) => {
                state.emailId = action.payload;
                state.password = action.payload;
            },
            addUserPassword: (state, action) => {
                state.password = action.payload;
            },
            removeUser: (state) => {
                state.emailId = "";
                state.password = "";
            }
        }
    }
)

export const {addUserEmail, addUserPassword, removeUser} = userSlice.actions;

export default userSlice.reducer;