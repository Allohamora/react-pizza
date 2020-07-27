import React from 'react';
import { useReduxCounter } from 'useReduxCounter';

interface ReduxCounterProps {

};

export const ReduxCounter: React.FC<ReduxCounterProps> = props => {

    const { counter, increment, decrement, asyncIncrement } = useReduxCounter();

    return (
        <div>
            <div>ReduxCounter: {counter}</div>
            <button onClick={increment} >increment</button>
            <button onClick={decrement} >decrement</button>
            <button onClick={asyncIncrement} >asyncIncrement</button>
        </div>
    );
};
