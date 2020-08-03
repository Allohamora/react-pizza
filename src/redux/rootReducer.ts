import { combineReducers } from "redux";
import { counterSlice } from "./slices/counter";
import { pizzaSlice } from "./slices/pizza";

export const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    pizza: pizzaSlice.reducer
})

export type RootState = ReturnType<typeof rootReducer>;