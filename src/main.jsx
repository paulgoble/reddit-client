import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PostListWrapper from './components/PostListWrapper'

import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from './api/apiSlice'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: "/r/:endpoint",
        element: <PostListWrapper />
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApiProvider api={apiSlice}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ApiProvider>
)
