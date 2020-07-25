import React, { useState } from 'react';

interface CounterProps {

};

export const Counter: React.FC<CounterProps> = props => {
    const [count, setCount] = useState(0);

    const addHanlder = () => setCount(count + 1);
    const removeHandler = () => setCount(count - 1);

    return (
        <div>
            <div>Counter: {count}</div>
            <button className="add" onClick={addHanlder} >Add</button>
            <button className="remove" onClick={removeHandler} >Remove</button>
        </div>
    );
};
