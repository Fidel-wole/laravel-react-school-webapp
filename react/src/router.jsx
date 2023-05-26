import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./admin/superadmin/Dashboard";
import { Schedule } from "./admin/superadmin/Schedule";
import { Students } from "./admin/superadmin/Students";
import Login from "./pages/login/Login";
import DefaultLayout from "./admin/superadmin/components/DefaultLayout";
import { Home } from "./pages/home/Home";
import {AddTeacher} from "./admin/superadmin/AddTeacher"
const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/",
                element: <Dashboard />,
            },
            {
                path: "/schedule",
                element: <Schedule />,
            },
            {
                path: "/students",
                element: <Students />,
            },
        ],
    },
    {
        path: "/home",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
{
    path:'/signup',
    element:<AddTeacher/>
}
    // {
    //     path:'/guest',
    //     element:<GuestLayout/>,
    //     children:[
    //         {
    //             path:'login',
    //             element:<Login/>
    //         }
    //     ]
    // }
]);

export default router;
