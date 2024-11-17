import React from 'react'
import Auth from './Auth';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Admin from './Admin';
import Client from './Client';


const Body = () => {
  
  const appRouter = createBrowserRouter([
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
  
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body;