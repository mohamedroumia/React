
import { Counter } from './component/counter.jsx';
import { Welcome } from './component/Welcome.jsx';
import { AlertClock } from './component/AlertClock.jsx';
import { CurrentTime } from './component/CurrentTime.jsx';
import { MyForm } from './component/MyForm.jsx';
export function App() {
    return (
        <div>
            <h1> My Awessome Application</h1>
            <hr/>
            <Welcome name="Mohamed" age={33}/>
            <Counter />
            <AlertClock/>
            <CurrentTime />
            <MyForm />
        </div>
    )
}