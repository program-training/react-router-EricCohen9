
import ReactDOM from 'react-dom/client'
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AllUsers } from "./components/Example/GetAllUsers";
import { OneUser } from './components/OneUser/OneUser';
import { ToDos } from './components/ToDos/ToDos';
import { MainPage } from './components/MainPage/MainPage';
import './index.css'

const router = createBrowserRouter([
  {
  path: "MainPage",
  element: <MainPage></MainPage>},
  {
    path:"/",
    element:<AllUsers/>
  },
  {
    path:"OneUser/:id",
    element:<OneUser/>,
    children:[{
      path:"ToDos/:id",
      element:<ToDos></ToDos>
    }]
  },
 ])
 ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
 )