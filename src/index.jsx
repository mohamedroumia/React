import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { AlertClock } from "./component/AlertClock";
import { Home } from "./component/Home";
import { Welcome } from "./component/Welcome";
import "./index.css";

const root = document.getElementById("root");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
  {
    path: "/alertClock",
    element: <AlertClock />,
  },
]);

ReactDOM.createRoot(root).render(<RouterProvider router={router} />);
