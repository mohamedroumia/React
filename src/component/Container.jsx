import { useState } from "react";
import { Button } from "./Button";

export function Container({ children, title }) {
  const [toggleCollpas, setToggleCollpas] = useState(false);
  function handleToggleCollpas() {
    setToggleCollpas((toggle) => !toggle);
  }

  return (
    <div className="app">
      <div className="app-title">
        <h1>{title}</h1>
        <Button title="Toggle Home" onClick={handleToggleCollpas}></Button>
      </div>
      <div className={toggleCollpas ? "app-container" : "app-container-hidden"}>
        {children}
      </div>
    </div>
  );
}
