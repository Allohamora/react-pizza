import { Pizza } from "services/api";
import { useState } from "react";

export const usePizza = (pizza: Pizza) => {
    const { sizes, types } = pizza;

    const [activeSize, setActiveSize] = useState(sizes[0]);
    const [activeType, setActiveType] = useState(types[0]);

    return { activeType, setActiveType, activeSize, setActiveSize };
}