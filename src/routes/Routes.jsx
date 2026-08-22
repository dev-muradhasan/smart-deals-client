import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../components/Home/Home";
import AllProducts from "../components/AllProducts/AllProducts";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import MyProducts from "../components/MyProducts/MyProducts";
import MyBids from "../components/MyBids/MyBids";
import CreateProducts from "../components/CreateProducts/CreateProducts";
import ProductDetails from "../components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/allProducts',
                Component: AllProducts
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/myProducts',
                element: <PrivateRoutes><MyProducts></MyProducts></PrivateRoutes>
            },
            {
                path: '/myBids',
                element: <PrivateRoutes><MyBids></MyBids></PrivateRoutes>
            },
            {
                path: '/createProducts',
                element: <PrivateRoutes><CreateProducts></CreateProducts></PrivateRoutes>
            },
            {
                path: '/products/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`),
                element: <PrivateRoutes><ProductDetails></ProductDetails></PrivateRoutes>
            },
        ]
    },
]);

export default router