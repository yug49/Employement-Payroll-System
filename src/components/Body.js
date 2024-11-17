import React from 'react'
import Auth from './Auth';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import Admin from './Admin';
import Client from './Client';
import { useSelector } from 'react-redux';


const Body = () => {

  const user = useSelector((store) => store.user);

  let appRouter = null;

  if(user.emailId === ""){
    appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Auth />,
      },
      {
        path: "/sign-in",
        element: <Auth />
      },
      {
        path: "/Client",
        element: <Auth />
      },  
      {
        path: "/Admin",
        element: <Auth />
      },  
  
    ])
  }
  else{
    appRouter = createBrowserRouter([
      {
        path: "/",
        element: <Auth />,
      },
      {
        path: "/sign-in",
        element: <Auth />
      },
      {
        path: "/Client",
        element: <Client />
      },  
      {
        path: "/Admin",
        element: <Admin />
      },  
  
    ])
  }
  
  
  
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;