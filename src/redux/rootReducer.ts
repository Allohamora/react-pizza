import { combineReducers } from "redux";
import { counterSlice } from "./slices/counter";
import { pizzaSlice } from "./slices/pizza";
import { cartSlice } from "./slices/cart";

export const rootReducer = combineReducers({
    counter: counterSlice.reducer,
    pizza: pizzaSlice.reducer,
    cart: cartSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>;