import Header from "./components/Header";
import Home from "../src/pages/Home";
import Footer from "./components/Footer";
import {productsData} from '@/contect/data.ts'
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  RouterProvider, 
  ScrollRestoration,
} from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/> ,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
    ],
  },
]);

export default function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />

    </div>
  );
}
