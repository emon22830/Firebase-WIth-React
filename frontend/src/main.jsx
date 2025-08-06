import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRoute, RouterProvider} from "react-router-dom";
import Main from './components/layouts/Main.jsx';
import Home from './components/Home/home.jsx';

const router = createBrowserRoute([
{
  path: "/",
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path: 'login',
      element: <Login></Login>
    }
  ]
}



])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
