import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layouts/main.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Shared/Login/Login';
import Signup from './Pages/Shared/Signup/Signup';
import UsersContext from './Pages/Shared/Userscontext/UsersContext';
import PrivateRoutes from './Pages/PrivateRoutes/PrivateRoutes';
import AssignTasks from './Pages/AssignTasks/AssignTasks';
import UsersProfile from './Pages/Shared/UsersProfile/UsersProfile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,

      },
      {
        path: "/login",
        element: <Login/>,

      },
      {
        path: "/signup",
        element: <Signup/>,

      },
      {
        path: "/usersprofile",
        element: <UsersProfile/>,

      },
      {
        path: "/assigntasks",
        element:  (
          <PrivateRoutes>
          <AssignTasks/>
          </PrivateRoutes>
        ),

      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <UsersContext>
  {/*   <App /> */}
  <RouterProvider router={router} />
  </UsersContext>
  </React.StrictMode>,
)
