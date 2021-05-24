import React, { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    /**
     * Increment the counter
     */
    const increment = () => {
        setCounter(counter + 1);
    }

    /**
     * Decrement the counter if it is not 0
     */
    const decrement = () => {
        if (counter !== 0) {
            setCounter(counter - 1);
        }
    }

    return (
        <div>
            <h1>This is a counter app</h1>
            <div className="" id="counter-value">{counter}</div>
            <button className="" id="increment-btn" onClick={increment}>Increment</button>
            <button className="" id="decrement-btn" onClick={decrement}>Decrement</button>
        </div>
    )
}
