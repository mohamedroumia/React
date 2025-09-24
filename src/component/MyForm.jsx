import { useState, useEffect } from "react";

export function MyForm() {

    const initialState = {
        username: "",
        password: "",
        session: false,
    };
    const [data, setData] = useState(initialState);
    function handleInput(event) {
        const { name, value, checked, type } = event.target;

        setData ((prev)=>{
            return {
                ...prev,
                [name] : type === 'checkbox' ? checked : value,
            }
        })
        
    }

    function handleLogin(event) {
        event.preventDefault();
        console.log(data)
    }

    function handleReset() {
        setData(initialState); 
    }

    return (
        <>
            <form onSubmit={handleLogin} onReset={handleReset}>
                <input name="username" type="text" value={data.username} onChange={handleInput}/>
                <input name="password" type="password" value={data.password} onChange={handleInput}/>
                <input name="session" type="checkbox" value={data.session} onChange={handleInput}/>
                <button type="submit" disabled={!data.username || !data.password} >Lonin</button>
                <button type="reset">Reset</button>
            </form>
        </>
    )
}