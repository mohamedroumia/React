import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./Home";
import { AlertClock } from "./component/AlertClock";
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
