import { useState, useEffect } from "react";

export function CurrentTime() {
    const [date, setDate] = useState(new Date());

    useEffect (() =>{
            const intervalId =  setInterval(() => {
                // console.log("date is updated.")
                setDate(new Date())
            }, 1000);
            return () => {
                // console.log("date is clear.")
                clearInterval(intervalId);
            }
        },[])

    return (
        <>
        <p>Current Time : {date.toLocaleTimeString()}</p>
        </>
    )

    
}