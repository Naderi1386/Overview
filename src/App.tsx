import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Layout from "./components/ui/Layout";
import NoMatch from "./pages/NoMatch";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/overview",
        element: <Overview />,
      },
      {
        path: "*",
        element: <NoMatch />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
