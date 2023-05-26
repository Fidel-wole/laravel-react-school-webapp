import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import { ContextProvider } from './admin/context/ContextProvider.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <RouterProvider router={router} />
    </ContextProvider>
  </React.StrictMode>,
)