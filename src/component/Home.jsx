import { AlertClock } from "./AlertClock.jsx";
import { Container } from "./Container.jsx";
import classes from "./Home.module.css";
import { Welcome } from "./Welcome.jsx";
export function Home() {
  return (
    <Container title={"Home Page"}>
      <h1 className={classes.myApp}> My Awessome Application</h1>
      <hr />
      <Welcome name="Mohamed" age={33} />
      <AlertClock />
    </Container>
  );
}
