import React from 'react'
import Auth from './Auth';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, useNavigate } from "react-router-dom";
import Admin from './Admin';
import Client from './Client';
import { useSelector } from 'react-redux';
import NotEmployee from './NotEmployee';
import NotAdmin from './NotAdmin';
import { adminList } from '../utils/adminList';


const Body = () => {

  const user = useSelector((store) => store.user);

  let appRouter = null;

  const checkAdmin = (email) => {
    
  }

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
  else if(adminList.includes(user.emailId)){
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
        element: <NotEmployee />
      },  
      {
        path: "/Admin",
        element: <Admin />
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
        element: <NotAdmin />
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