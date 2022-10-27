import { createBrowserRouter } from "react-router-dom";
import Main from "../../leyout/Main";
import Blog from "../../pages/Blog/Blog";
import CheckOut from "../../pages/Courses/CheckOut/CheckOut";
import CourseDetails from "../../pages/Courses/CourseDetails/CourseDetails";
import Courses from "../../pages/Courses/Courses";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import Login from "../../pages/LoginOrRegister/Login/Login";
import SignUp from "../../pages/LoginOrRegister/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signUp',
                element:<SignUp></SignUp>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            },
           
           
            {
                path: '/courses',
                element:<Courses></Courses>,
                loader: () => fetch('https://server-site-joy5k.vercel.app/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://server-site-joy5k.vercel.app/courses/${params.id}`)
            }, {
                path: '/checkOut/:id',
                element:<PrivateRoute> <CheckOut></CheckOut></PrivateRoute>,
                loader: ({params}) => fetch(`https://server-site-joy5k.vercel.app/courses/${params.id}`)
            }
        ]
    }
])