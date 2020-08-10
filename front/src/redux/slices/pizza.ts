import { createSlice } from "@reduxjs/toolkit";
import { Pizzas, Pizza } from "services/api";

interface InitialState {
    pizzas: Pizzas | null,
    sorted: Pizzas | null,
    activeCategory: number | "ALL",
    activeSort: number,
}

const initialState: InitialState = {
    pizzas: null,
    sorted: null,
    activeCategory: "ALL",
    activeSort: 0,
}

export const sortHandlers = [
    // sort by rating
    (a: Pizza, b: Pizza) => b.rating - a.rating,

    // sort by price
    (a: Pizza, b: Pizza) => a.price - b.price,

    // sort by alph
    (a: Pizza, b: Pizza) => a.name.localeCompare(b.name)
]

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setPizzas: (state, action: { payload: Pizzas }) => {
            state.pizzas = action.payload;
            // if action.payload instead [...action.payload] typeError in tests
            state.sorted = [...action.payload].sort(sortHandlers[state.activeSort]);

            return state;
        },
        allCategory: state => {
            state.sorted = state.pizzas;
            state.activeCategory = "ALL";
            return state;
        },
        byCategory: (state, action: { payload: number }) => {
            state.sorted = state.pizzas.filter(pizza => pizza.category === action.payload);
            state.activeCategory = action.payload;
            return state
        },
        sort: (state, action: { payload: number }) => {
            state.sorted = state.sorted.sort(sortHandlers[action.payload]);
            state.activeSort = action.payload;
            return state;
        }
    }
});

export const { setPizzas, allCategory, byCategory, sort } = pizzaSlice.actions;