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
    state.count = values.reduce((acum, cur) => acum + cur.count, 0);
    state.total = values.reduce((acum, cur) => acum + cur.price * cur.count, 0);
}

export const createPizzaId = (item: Item) => {
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

            // if add by id
            if( typeof payload === "string" ) {
                const item = state.items[payload];
                item.count++;
            } else {
                // if add without id
                const pizzaId = createPizzaId(payload);
                const item = state.items[pizzaId];

                if( !item ) {
                    state.items[pizzaId] = {...payload, count: 1};
                } else {
                    item.count++;
                }
                
            }

            recalculate(state);
            return state;
        },
        remove: (state, action: { payload: string }) => {
            const { payload } = action;

            const item = state.items[payload];

            if( item.count === 1 ) return state;

            item.count -= 1;

            recalculate(state);

            return state;
        },
        deleteAction: (state, action: { payload: string }) => {
            const { payload } = action;
            
            delete state.items[payload];

            recalculate(state);

            return state;
        },
        clear: state => {
            state.items = {};
            recalculate(state);

            return state;
        }
    }
});

export const { add, remove, clear, deleteAction } = cartSlice.actions; 