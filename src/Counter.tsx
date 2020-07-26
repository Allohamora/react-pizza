import React from 'react';
import { useCounter } from 'useCounter';

interface CounterProps {

};

export const Counter: React.FC<CounterProps> = props => {
    const { count, increment, decrement, asyncIncrement } = useCounter();

    return (
        <div>
            <div className="count" >Counter: {count}</div>
            <button className="increment" onClick={increment} >increment</button>
            <button className="decrement" onClick={decrement} >decrement</button>
            <button className="asyncIncrement" onClick={asyncIncrement} >asyncIncrement</button>
        </div>
    );
};
