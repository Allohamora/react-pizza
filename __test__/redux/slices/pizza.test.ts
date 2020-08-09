import { setPizzas, allCategory, byCategory, sort, pizzaSlice, sortHandlers } from "../../../src/redux/slices/pizza";
import { createStore } from "redux";

const pizzas = [
    {
        "id": 0,
        "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/f035c7f46c0844069722f2bb3ee9f113_584x584.jpeg",
        "name": "Пепперони Фреш с перцем",
        "types": [0, 1],
        "sizes": [26, 30, 40],
        "price": 803,
        "category": 0,
        "rating": 4
    },
    {
        "id": 1,
        "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/2ffc31bb-132c-4c99-b894-53f7107a1441.jpg",
        "name": "Сырная",
        "types": [0],
        "sizes": [26, 40],
        "price": 245,
        "category": 1,
        "rating": 6
    },
    {
        "id": 2,
        "imageUrl": "https://dodopizza.azureedge.net/static/Img/Products/Pizza/ru-RU/6652fec1-04df-49d8-8744-232f1032c44b.jpg",
        "name": "Цыпленок барбекю",
        "types": [0],
        "sizes": [26, 40],
        "price": 295,
        "category": 1,
        "rating": 4
    }
]

describe("pizzaSlice", () => {
    let store = createStore(pizzaSlice.reducer);

    beforeEach( () => {
        store = createStore(pizzaSlice.reducer);
    } );

    it("by default state = { pizzas: null, sorted: null, activeCategory: 'ALL', activeSort: 0 }", () => {
        const pizza = store.getState();

        expect( pizza.pizzas ).toBe(null);
        expect( pizza.sorted ).toBe(null);
        expect( pizza.activeCategory ).toBe( "ALL" );
        expect( pizza.activeSort ).toBe(0);
    });

    it("setPizzas(pizzas) set pizzas to pizzas and set sorted pizzas to sorted", () => {
        const pizzaBefore = store.getState();

        expect( pizzaBefore.pizzas ).toBe(null);
        expect( pizzaBefore.sorted ).toBe(null);

        store.dispatch( setPizzas(pizzas) );

        const pizzaAfter = store.getState();

        expect( pizzaAfter.pizzas ).toEqual(pizzas);
        expect( pizzaAfter.sorted ).toEqual([...pizzas].sort(sortHandlers[0]));
    });

    it("byCategory(0) setActiveCategory to 0 and sort pizzas", () => {
        store.dispatch( setPizzas(pizzas) );
        store.dispatch( byCategory(0) );

        const pizza = store.getState();
        expect( pizza.pizzas ).toEqual(pizzas);
        expect( pizza.activeCategory ).toBe(0);
        expect( pizza.sorted ).toEqual( pizzas.filter( pizza => pizza.category === 0 ) );
    });

    it("Allcategory() setActiveCategory to 'ALL' and sort pizzas", () => {
        store.dispatch( setPizzas(pizzas) );
        store.dispatch( byCategory(0) );

        const pizzaBefore = store.getState();
        expect(pizzaBefore.activeSort).toBe(0);

        store.dispatch(allCategory());

        const pizzaAfter = store.getState();
        expect(pizzaAfter.activeCategory).toBe("ALL");
        expect(pizzaAfter.pizzas).toEqual(pizzas);
        expect(pizzaAfter.sorted).toEqual(pizzas);
    });

    it("sort(1) setActiveSort = 1 and sort pizzas by price", () => {
        store.dispatch( setPizzas(pizzas) );

        const pizzaBefore = store.getState();
        expect(pizzaBefore.activeSort).toBe(0);

        store.dispatch(sort(1));

        const pizzaAfter = store.getState();
        expect(pizzaAfter.activeSort).toBe(1);
        expect(pizzaAfter.sorted).toEqual([...pizzas].sort(sortHandlers[1]));
    });
})