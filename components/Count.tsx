'use client'
import { useState } from "react";

const Count = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Count;