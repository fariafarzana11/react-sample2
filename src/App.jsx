
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Career from './components/Career/Career'
import ContactDetails from './components/ContactDetails/ContactDetails'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Home></Home>,
      children:[
        {
          path:'/about',
          element: <About></About>
        },
        {
          path:'/contact',
          loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Contact></Contact>
        },
        {
          path:'/career',
          element: <Career></Career>
        },
        {
          path:'/contact/:userId',
          loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users`),
          element: <ContactDetails></ContactDetails>
        },
      ]
    },
    
  ])

  return (
     <div>
      <RouterProvider router={router}></RouterProvider>
     </div>
  )
}

export default App
