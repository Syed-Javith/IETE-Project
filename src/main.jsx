import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home.jsx";
import "./index.css";
import Membership from "./components/Membership.jsx";
import About from "./components/About.jsx";
import Executive from "./components/Executive.jsx";
import Events from "./components/Events.jsx";
import Contact from "./components/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: (
      <div className="text-3xl text-center">
        Page not found <br />
        <a href="/" className="text-violet-800">
          Go back home
        </a>
      </div>
    ),
  },
  {
    path: "/membership",
    element: <Membership />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/executive",
    element: <Executive />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
