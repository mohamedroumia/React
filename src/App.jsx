import { AlertClock } from "./component/AlertClock.jsx";
import { InputUseRef } from "./component/InputUseRef.jsx";
import { MyLiat } from "./component/MyList.jsx";
import { Welcome } from "./component/Welcome.jsx";
export function App() {
  return (
    <div>
      <h1> My Awessome Application</h1>
      <hr />
      <Welcome name="Mohamed" age={33} />
      <AlertClock />
      <InputUseRef />
      <MyLiat
        items={[
          { id: 1, name: "Liam" },
          { id: 2, name: "Sophia" },
          { id: 3, name: "Noah" },
          { id: 4, name: "Ava" },
        ]}
      />
    </div>
  );
}
