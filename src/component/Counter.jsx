import { useState, useEffect } from "react";
import { Button } from "./Button";

export function Counter({initialValue = 0}) {
    const [counter, setCounter] = useState(initialValue);

    // useEffect (() => {
    //     console.log("the value of counter is " + counter);
    //     return () => {
    //         console.log("the value of counter was " + counter);
    //     }
    // },[counter])

    function handleIncrementCounter() {
        setCounter((c) => c + 1)
    }
    function handleDecrementCounter() {
        setCounter((c) => c - 1)
    }
    function handleResetCounter() {
        setCounter(initialValue)
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