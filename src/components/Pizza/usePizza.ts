import { Pizza } from "services/api";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "redux/slices/cart";

export const usePizza = (pizza: Pizza) => {
    const { sizes, types } = pizza;

    const [activeSize, setActiveSize] = useState(sizes[0]);
    const [activeType, setActiveType] = useState(types[0]);

    const dispatch = useDispatch();

    const addHandler = () => {
        const { id, price, imageUrl, name } = pizza;
        dispatch(add({ id, price, imageUrl, name, type: activeType, size: activeSize }))
    };

    return { activeType, setActiveType, activeSize, setActiveSize, addHandler };
}