import React, {useState} from "react";
function StepCounter ({initialValue = 0, step = 1}) {
    const [count, setCount] = useState(initialValue);
    const [history, setHistory] = useState([]);
    const [operationCount, setOperationCount] = useState(0);
    const handleIncrement = () => {
        const newValue = count + step;

        setCount(newValue);
        setHistory([...history, newValue]);
        setOperationCount(operationCount + 1);
    };

    const handleDecrement = () => {
        const newValue = count - step;
        setCount (newValue);
        setHistory([...history, newValue]);
        setOperationCount(operationCount + 1)
    };

    const handleReset = () => {
        setCount (initialValue);
        setHistory([]);
        setOperationCount(0);
    };

    return (
        <div style = {{border: "1px solid black", margin: "10px", padding: "10px"}}>
            <h2>Count: {count}</h2>

            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>

            <p>Total operations: {operationCount}</p>
            <p>History (last 5): {history.slice(-5).join(", ")}</p>
        </div>
    );
}

export default StepCounter;