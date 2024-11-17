import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice(
    {
        name: "user",
        initialState: {
            emailId: "",
            password: ""
        },
        reducers: {
            addUser: (state, action) => {
                state.emailId = action.payload.emailId;
                state.password = action.payload.password;
            },
            removeUser: (state) => {
                state.emailId = "";
                state.password = "";
            }
        }
    }
)

export const {addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;