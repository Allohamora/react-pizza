import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rootReducer, RootState } from "./rootReducer";

export const createStore = () => configureStore({
    reducer: rootReducer
});

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>