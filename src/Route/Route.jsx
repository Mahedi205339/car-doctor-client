import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUP from "../pages/SignUp/SignUp";
import BookService from "../pages/BookService/BookService";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUP></SignUP>
            },
            {
                path: '/bookings',
                element:<PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: 'book/:id',
                element:<PrivateRoute><BookService></BookService></PrivateRoute>,
                loader :({params})=>fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]

    }
])

export default router