import { createBrowserRouter } from "react-router-dom";
import Main from "../../leyout/Main";
import Blog from "../../pages/Blog/Blog";
import Courses from "../../pages/Courses/Courses";
import FAQ from "../../pages/FAQ/FAQ";
import Home from "../../pages/Home/Home";
import Login from "../../pages/LoginOrRegister/Login/Login";
import SignUp from "../../pages/LoginOrRegister/SignUp/SignUp";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: '/faq',
                element:<FAQ></FAQ>
            },
            {
                path: '/courses',
                element:<Courses></Courses>
            }
        ]
    }
])