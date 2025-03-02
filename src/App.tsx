import Header from "./components/Header";
import Home from "../src/pages/Home.tsx";
import Footer from "./components/Footer";
import {productsData} from '@/contect/data.ts'
import InsideProduct from '@/components/InsideProduct';
import Products from "./components/Products";

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
      <ScrollRestoration/>
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
      {
        path:"product/:id",
        element:<InsideProduct/>

      }
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
