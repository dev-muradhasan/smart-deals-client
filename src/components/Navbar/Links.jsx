import { NavLink } from "react-router";

export const links = <>
    <li><NavLink className={({ isActive }) =>
        `font-medium ${isActive ? "text-primary" : "text-gray-700"}`
    } to={'/'}>Home</NavLink></li>
    <li><NavLink className={({ isActive }) =>
        `font-medium ${isActive ? "text-primary" : "text-gray-700"}`
    } to={'/allProducts'}>AllProducts</NavLink></li>
    <li><NavLink className={({ isActive }) =>
        `font-medium ${isActive ? "text-primary" : "text-gray-700"}`
    } to={'/myProducts'}>My Products</NavLink></li>
    <li><NavLink className={({ isActive }) =>
        `font-medium ${isActive ? "text-primary" : "text-gray-700"}`
    } to={'/myBids'}>My Bids</NavLink></li>
    <li><NavLink className={({ isActive }) =>
        `font-medium ${isActive ? "text-primary" : "text-gray-700"}`
    } to={'/createProducts'}>Create Products</NavLink></li>
</>