import { createSlice } from "@reduxjs/toolkit";

const leaveSlice = createSlice(
    {
        name: "leaves",
        initialState: {
            empID : null,
            from : null,
            to : null,
            reason : "",
            status : "Pending"
        },
        reducers: {
            approveRequests : (state) => {
                state.status = "Approved";
            },
            declineRequests : (state) => {
                state.status = "Declined";
            },
            requestEmpId : (state, action) => {
                state.empID = action.payload;
            },
            requestFrom : (state, action) => {
                state.from = action.payload;
            },
            requestTo : (state, action) => {
                state.to = action.payload;
            },
            requestReason : (state, action) => {
                state.reason = action.payload;
            },
            requestStatus : (state) => {
                state.status = "Pending";
            },
            deleteRequest : (state) => {
                state.empID = null;
                state.from = null;
                state.to = null;
                state.reason = "";
                state.status = "Pending";
            }
        }
    }
)

export const {deleteRequest, declineRequests, approveRequests, requestEmpId, requestFrom, requestReason, requestStatus, requestTo} = leaveSlice.actions;

export default leaveSlice.reducer;