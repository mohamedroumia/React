
import { Counter } from './component/counter.jsx';
import { Welcome } from './component/Welcome.jsx';
export function App() {
    return (
        <div>
            <h1> My Awessome Application</h1>
            <hr/>
            <Welcome name="Mohamed" age={33}/>
            <Counter />
        </div>
    )
}