import { combineReducers } from "redux";
import { pizzaSlice } from "./slices/pizza";
import { cartSlice } from "./slices/cart";

export const rootReducer = combineReducers({
    pizza: pizzaSlice.reducer,
    cart: cartSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>;