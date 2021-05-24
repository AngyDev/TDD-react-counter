import React, { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h1>This is a counter app</h1>
            <div className="" id="counter-value">{counter}</div>
            <button className="" id="increment-btn" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="" id="decrement-btn" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    )
}
