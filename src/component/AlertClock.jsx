import { Button } from "./Button";

export function AlertClock () {

    function handleShowTime(event) {
        console.log(event.currentTarget.name)
        const now = new Date().toLocaleTimeString();
        alert("the current time is " + now)
    }

    return (
        <>
            <p> click the button to show the current time</p>
            <Button onClick={handleShowTime} title="click me" />
        </>
    )

}