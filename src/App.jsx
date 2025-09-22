
import { Welcome } from './component/Welcome.jsx';
import { AlertClock } from './component/AlertClock.jsx';
export function App() {
    return (
        <div>
            <h1> My Awessome Application</h1>
            <hr/>
            <Welcome name="Mohamed" age={33}/>
            <AlertClock />
        </div>
    )
}