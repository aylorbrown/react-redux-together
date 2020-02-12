//  write a counter components that expects four  props
// - count 
// - handleIncrement 
// - handleDecrement 
// - handleReset


import React from 'react';

export default function Counter({
    count, 
    handleIncrement, 
    handleDecrement, 
    handleReset
}) {
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>0</button>
        </div>
    );
}

