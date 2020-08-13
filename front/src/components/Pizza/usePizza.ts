import { Pizza } from "services/api";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, createPizzaId } from "redux/slices/cart";
import { RootState } from "redux/rootReducer";

export const usePizza = (pizza: Pizza) => {
    const { sizes, types } = pizza;
    const { id, price, imageUrl, name } = pizza;

    const [activeSize, setActiveSize] = useState(sizes[0]);
    const [activeType, setActiveType] = useState(types[0]);

    const dispatch = useDispatch();
    const items = useSelector((state: RootState) => state.cart.items);

    const item = { id, price, imageUrl, name, type: activeType, size: activeSize }
    const pizzaId = createPizzaId(item);

    const addHandler = () => {
        dispatch(add(item))
    };

    return { activeType, setActiveType, activeSize, setActiveSize, addHandler, count: items[pizzaId]?.count };
}