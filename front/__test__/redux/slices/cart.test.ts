import { add, remove, clear, deleteAction, createPizzaId, cartSlice } from "redux/slices/cart";
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

    it("add(pizza): add pizza to cart", () => {
        store.dispatch( add(pizza) );

        const cart = store.getState();

        expect( cart.count ).toBe(1);
        expect( cart.total ).toBe(pizza.price);
        expect( Object.keys(cart.items) ).toHaveLength(1);
    });

    it("if pizza already in cart, her count++", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza) );

        const cart = store.getState();

        expect( cart.count ).toBe(2);
        expect( cart.total ).toBe( pizza.price * 2 );
        expect( Object.keys(cart.items) ).toHaveLength(1);
    });

    it("if added different pizzas, created two different pizzaId in cart", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza2) );

        const cart = store.getState();

        expect( cart.count ).toBe(2);
        expect( cart.total ).toBe( pizza.price + pizza2.price );
        expect( Object.keys(cart.items) ).toHaveLength(2);
    });

    it("delete(pizzaId): delete pizza by id from cart", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza2) );

        const cartBefore = store.getState();

        expect( cartBefore.count ).toBe(2);
        expect( Object.keys(cartBefore.items) ).toHaveLength(2);

        store.dispatch( deleteAction( createPizzaId(pizza) ) );

        const cartAfter = store.getState();

        expect( cartAfter.count ).toBe(1);
        expect( Object.keys(cartAfter.items) ).toHaveLength(1);
    });

    it("remove(pizzaId): remove one pizza from cart", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza) );

        const id = createPizzaId(pizza);

        const cartBefore = store.getState();
        expect( cartBefore.items[id].count ).toBe(2);

        store.dispatch( remove(id) );

        const cartAfter = store.getState();
        expect( cartAfter.items[id].count ).toBe(1);
    });

    it("remove(pizzaId): if pizzaId contains 1 pizza, remove don't work", () => {
        store.dispatch( add(pizza) );
        store.dispatch( add(pizza) );

        const id = createPizzaId(pizza);

        const cartBefore = store.getState();
        expect( cartBefore.items[id].count ).toBe(2);

        store.dispatch(remove(id));
        store.dispatch(remove(id));

        const cartAfter = store.getState();
        expect( cartAfter.items[id].count ).toBe(1);
    })

    it("clear(): change cart state to initial", () => {
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
