import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login.jsx";
import Browse from "./Browse.jsx";
import { useDispatch } from "react-redux";
import Demo from "./Demo.jsx";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/demo",
      element: <Demo />,
    },
  ]);

  const dispatch = useDispatch();

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
