import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'vite/modulepreload-polyfill'
import {createHashRouter, RouterProvider} from "react-router-dom";
import { Home } from './pages/home/_Home.jsx'
import { NewList } from './pages/new_list/_NewList.jsx'
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      }, {
        path: "/grocery_list/new",
        element: <NewList />
      }, {
        path: "/grocery_list/:id",
        element: <h1>I am on the the list page</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
