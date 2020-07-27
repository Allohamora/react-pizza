import { createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "redux/store";

export const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        incrementAction: state => state + 1,
        decrementAction: state => state - 1
    },
});

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export const { incrementAction, decrementAction } = counterSlice.actions;
export const asyncIncrementAction = (): AppThunk => async dispatch => {
    await delay(1000);
    dispatch(incrementAction());
}