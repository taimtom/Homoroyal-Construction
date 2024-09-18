import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Homepage from "./pages/homepage/Homepage";
import Quote from "./pages/Quote/Quote";
import Services from "./pages/services/index"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/quote", element: <Quote /> },
      {path: "/services", element: <Services/>}
    ],
  },
]);
function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
