import { useState, useCallback } from "react"

export const useCounter = () => {
    const [count, setCount] = useState(0);

    // c == counter;
    const increment = useCallback(() => setCount(c => c + 1), []);
    const decrement = useCallback(() => setCount(c => c - 1), []);
    const asyncIncrement = useCallback(() => setTimeout(() => setCount(c => c + 1), 1000), []);

    return {count, increment, decrement, asyncIncrement};
}