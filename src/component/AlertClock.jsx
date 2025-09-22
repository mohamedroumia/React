import { Button } from "./Button";

export function AlertClock () {

    function handleShowTime() {
        const now = new Date().toLocaleTimeString();
        alert("the current time is " + now)
    }

    return (
        <>
            <p> click the button to show the current time</p>
            <Button onClick={handleShowTime} title="click me!" />
        </>
    )

}