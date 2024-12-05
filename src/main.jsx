import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'




// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello from routing</div>
//   },
//   {
//     path: '/about',
//     element: <div>Hello from about routing</div>
//   },
//   {
//     path: '/contact',
//     element: <div>Hello from contact routing</div>
//   },
// ])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <App />
  </StrictMode>,
)
