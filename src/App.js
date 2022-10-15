import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/Layout/Main";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
    //errorElement: <ErrorPage />,
  }
]);

function App() {
  return (
    <Main>
      <Sidebar />
      <RouterProvider router={router} />
    </Main>
  );
}

export default App;
