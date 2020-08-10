import { add, remove, clear, deleteAction, createUniqueID, cartSlice } from "../../../src/redux/slices/cart";
import { createStore } from "redux";

const pizza = {
    id: 0,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    name: "Пепперони Фреш с перцем",
    type: 0,
    size: 30,
    price: 803,
};

const pizza2 = {
    id: 2,
    imageUrl: "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
    name: "Пепперони Фреш с перцем",
    type: 0,
    size: 30,
    price: 803,
}

describe("cartSlice", () => {
    let store = createStore(cartSlice.reducer);

    beforeEach(() => {
        store = createStore(cartSlice.reducer);
    });

    it("by default count === 0 and total === 0", () => {
        const cart = store.getState();

        expect(cart.total).toBe(0);
        expect(cart.count).toBe(0);
    });

    it("add action add item to cart", () => {
        store.dispatch( add(pizza) );

        const cart = store.getState();

        expect( cart.count ).toBe(1);
        expect( cart.total ).toBe(pizza.price);
        expect( Object.keys(cart.items) ).toHaveLength(1);
    });

    it("if added already in cart, him count++", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza) );

        const cart = store.getState();

        expect( cart.count ).toBe(2);
        expect( cart.total ).toBe( pizza.price * 2 );
        expect( Object.keys(cart.items) ).toHaveLength(1);
    });

    it("if add different pizzas, created two different items in cart", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza2) );

        const cart = store.getState();

        expect( cart.count ).toBe(2);
        expect( cart.total ).toBe( pizza.price + pizza2.price );
        expect( Object.keys(cart.items) ).toHaveLength(2);
    });

    it("deleteAction delete all pizzas with /uniqueId/ from cart", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza2) );

        const cartBefore = store.getState();

        expect( cartBefore.count ).toBe(2);
        expect( Object.keys(cartBefore.items) ).toHaveLength(2);

        store.dispatch( deleteAction( createUniqueID(pizza) ) );

        const cartAfter = store.getState();

        expect( cartAfter.count ).toBe(1);
        expect( Object.keys(cartAfter.items) ).toHaveLength(1);
    });

    it("remove action remove one pizza from cart", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza) );

        const id = createUniqueID(pizza);

        const cartBefore = store.getState();
        expect( cartBefore.items[id].count ).toBe(2);

        store.dispatch( remove(createUniqueID(pizza)) );

        const cartAfter = store.getState();
        expect( cartAfter.items[id].count ).toBe(1);
    });

    it("clear action clear cart state", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza2) );

        const cartBefore = store.getState();
        expect( Object.keys(cartBefore.items) ).toHaveLength(2);
        expect( cartBefore.count ).toBe(2);

        store.dispatch(clear());

        const cartAfter = store.getState();
        expect( Object.keys(cartAfter.items) ).toHaveLength(0);
        expect( cartAfter.count ).toBe(0);
    })
})
