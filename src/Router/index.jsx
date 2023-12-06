import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '../MainLayout'

import Home from '../Routes/Home'
import Contact from '../Routes/Contact'
import Login from '../Routes/Login/Presentation/Login'
import Register from '../Routes/Register/Presentation/Register'
import ResetPassword from '../Routes/ResetPassword/Presentation/ResetPassword'

import { NotFound } from '../Routes/NotFound'

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
        path: '/reset-password',
        element: <ResetPassword />
      }

    ]
  }

])
