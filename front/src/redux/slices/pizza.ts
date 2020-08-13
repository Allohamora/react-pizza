import { createSlice } from "@reduxjs/toolkit";
import { Pizzas, Pizza } from "services/api";

interface InitialState {
    pizzas: Pizzas | null,
    sorted: Pizzas | null,
    activeCategory: number | "ALL",
    activeSort: number,
}

export const initialState: InitialState = {
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

const filterPizzas = (pizzas: InitialState["pizzas"], category: InitialState["activeCategory"]) => {
    if( category === "ALL" ) return pizzas;

    return pizzas.filter( pizza => pizza.category === category );
}

const sortPizzas = (pizzas: InitialState["pizzas"], sort: InitialState["activeSort"]) => {
    // sort mutating array
    return [...pizzas].sort(sortHandlers[sort]);
}

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setPizzas: (state, action: { payload: Pizzas }) => {
            const { payload } = action;
            const { activeCategory, activeSort } = state;

            state.pizzas = payload;
            state.sorted = sortPizzas( filterPizzas(payload, activeCategory), activeSort );
            
            return state;
        },
        allCategory: state => {
            state.sorted = sortPizzas( state.pizzas, state.activeSort );
            state.activeCategory = "ALL";

            return state;
        },
        byCategory: (state, action: { payload: number }) => {
            const { pizzas, activeSort } = state;

            // filter by category, and sort by activeSort
            state.sorted = sortPizzas( filterPizzas( pizzas, action.payload ), activeSort );
            state.activeCategory = action.payload;

            return state
        },
        sort: (state, action: { payload: number }) => {
            const { sorted } = state;

            state.sorted = sortPizzas(sorted, action.payload);
            state.activeSort = action.payload;

            return state;
        }
    }
});

export const { setPizzas, allCategory, byCategory, sort } = pizzaSlice.actions;