import React from 'react'
import ReactDOM from 'react-dom/client'
import Users from './Users.jsx'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserDetail from './UserDetail.jsx'
import Photos from './Photos.jsx'
import Contact from './Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element: <Users />
      },
      {
        path: '/photos',
        loader: () => fetch('https://jsonplaceholder.typicode.com/photos'),
        element: <Photos/>
      },
      {
        path: '/contact',
        element: <Contact/>
      }
    ]
  },
  {
    path: '/user/:userId',
    element: <UserDetail/>,
    loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
