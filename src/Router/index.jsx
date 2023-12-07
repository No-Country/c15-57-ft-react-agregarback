import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from '../MainLayout'
import { Contact, Home, Login, NotFound, Register, Store, ResetPassword } from '../Routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/Contact',
        element: <Contact />
      },
      {
        path: '/Login',
        element: <Login />
      },

      {
        path: '/Register',
        element: <Register />
      },

      {
        path: '/Store',
        element: <Store />
      },
      {
        path: '/reset-password',
        element: <ResetPassword />
      }
    ]
  }
])

/*
if you wants to add a new route please create a new component
on the  routes file ./Routes

then

add a new object with the path and element properties

    {
        path: '',
        element: <>
      },

      inside the children propertie.

*/
