import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '../MainLayout'

import  {Contact,Home, Login, NotFound, Register, Store} from "../Routes"
import LandingPage from '../Routes/LandingPage/Presentation/LandingPage'

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
     /*
     {
       path: '/Register',
       element: <Register />
      }
      ,
      */
      {
        path: '/Store',
        element: <Store />
      },
      {
        path: '/:id',
        element: <LandingPage />
      },
      {
        path: 'toDonate/:id',
        element: <div className='w-full h-[340px] flex justify-center items-center text-[72px] font-bold' > envia ala pagina de donar</div>
      },
      {
        path: 'to-products/:id',
        element: <div className='w-full h-[340px] flex justify-center items-center text-[72px] font-bold' > envia ala pagina de ver mas productos</div>
      },
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