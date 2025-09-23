import { useState } from "react";
import { Button } from "./Button";

export function Counter() {
    const [counter, setCounter] = useState(0);

    function handleIncrementCounter() {
        setCounter(counter +1)
    }
    function handleDecrementCounter() {
        setCounter(counter -1)
    }
    function handleResetCounter() {
        setCounter(0)
    }
    return (
        <>
        <p> {counter} </p>
        <Button title="Increment" onClick={handleIncrementCounter} />
        <Button title="Decrement" onClick={handleDecrementCounter} />
        <Button title="Reset" onClick={handleResetCounter} />
        </>
    )
}