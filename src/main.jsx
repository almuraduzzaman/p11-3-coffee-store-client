import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import App from './App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: ()=> fetch('http://localhost:5000/coffees')
  },
  {
    path: "addCoffee",
    element:<AddCoffee/>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee/>,
    loader: ({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
