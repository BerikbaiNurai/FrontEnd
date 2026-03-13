import { useState, useCallback } from "react";
import { Button } from "./Button";

export function ParentComponent(){
    
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log("button clicked");
    }, []);

    const handleIncrement = useCallback(() => {
        setCount((c) => c + 1);
    }, []);
    
    return (
        <div>
            <p>Count: {count}</p>

            <Button onClick={handleClick} label="Click me" />
            <Button onClick={handleIncrement} label = "Increment" />
        </div>
    );
}