import { createSlice } from "@reduxjs/toolkit";

export interface Item {
    id: number,
    name: string,
    imageUrl: string,
    price: number,
    type: number,
    size: number,
}

export interface CartItem extends Item {
    count: number,
}

interface Items {
    [uniqueID: string]: CartItem
}

interface InitialState {
    items: Items,
    count: number,
    total: number,
}

const initialState: InitialState = {
    items: {},
    count: 0,
    total: 0,
};

const recalculate = (state: InitialState) => {
    const values = Object.values(state.items);
    state.count = values.length;
    state.total = values.reduce((acum, cur) => acum + cur.price * cur.count, 0);
}

export const createUniqueID = (item: Item) => {
    const { id, size, type } = item;
    const uniqueID = `${id}_${size}_${type}`;

    return uniqueID;
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action: { payload: string | Item, }) => {
            const { payload } = action;

            if( typeof payload === "string" ) {
                const item = state.items[payload];
                item.count += 1;
            } else {
                const uniqueID = createUniqueID(payload);
                state.items[uniqueID] = {...payload, count: 1};
            }

            recalculate(state);
            return state;
        },
        remove: (state, action: { payload: string }) => {
            const { payload } = action;

            const item = state.items[payload];

            item.count -= 1;
            
            if( !item.count ) {
                delete state.items[payload]
            }

            recalculate(state);

            return state;
        },
        clear: (state, action: { payload: string }) => {
            const { payload } = action;
            
            delete state.items[payload];

            recalculate(state);

            return state;
        }
    }
});

export const { add, remove, clear } = cartSlice.actions; 