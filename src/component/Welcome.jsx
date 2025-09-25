import { HelloWorld } from "./HelloWorld";

export function Welcome({ name, age }) {
  const styles = {
    border: "1px solid #333",
    backgroundColor: "#f4f4f4",
    padding: "10px",
    margin: "10px 0",
  };
  return (
    <div style={styles}>
      {name ? <h2>Welcome {name}</h2> : <HelloWorld />}
      {age && <p>your are {age} years old.</p>}
    </div>
  );
}
