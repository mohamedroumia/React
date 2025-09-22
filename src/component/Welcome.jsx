import { HelloWorld } from "./HelloWorld";

export function Welcome({name, age}){
    return (
        <div>
            {name ? <h2>Welcome {name}</h2> : <HelloWorld/>}
            {age && <p>your are {age} years old.</p>}
        </div>
    )
}