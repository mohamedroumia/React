import { AlertClock } from "./component/AlertClock.jsx";
import { Welcome } from "./component/Welcome.jsx";
export function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1> My Awessome Application</h1>
      <hr />
      <Welcome name="Mohamed" age={33} />
      <AlertClock />
    </div>
  );
}
