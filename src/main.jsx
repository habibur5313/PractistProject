import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import Home from './assets/Component/Home/Home';
import Dashboard from './assets/Component/Dashboard/Dashboard';
import BooksDetails from './assets/Component/Home/BooksDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div className='flex flex-col justify-center items-center min-h-screen'><h1 className='text-4xl font-bold text-red-600'>Page Not Found</h1><p>404</p></div>,

    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/books/:bookId',
        loader: () => fetch('/booksData.json'),
        element: <BooksDetails></BooksDetails>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
