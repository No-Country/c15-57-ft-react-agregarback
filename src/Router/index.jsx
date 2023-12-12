import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { MainLayout, PrivateLayout } from '../Layouts'

import { Donations, Animals, Volunteers, Login, NotFound, Register, Store, User, MyVolunteers, MyPurchases, ResetPassword } from '../Routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <Animals />
          </Suspense>
        )
      },
      {
        path: '/Donations',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <Donations />
          </Suspense>)
      },
      {
        path: '/Volunteers',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <Volunteers />
          </Suspense>)
      },
      {
        path: '/Store',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <Store />
          </Suspense>)
      },
      {
        path: '/Register',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <Register />
          </Suspense>)
      },
      {
        path: '/Login',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <Login />
          </Suspense>)
      },

      /*
      * Private Routes
      */

      {
        path: '/Reset-password',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <ResetPassword />
          </Suspense>)
      },
      {
        path: '/User',
        errorElement: <NotFound />,
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <PrivateLayout />
          </Suspense>),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
                <User />
              </Suspense>)
          }
        ]
      },
      {
        path: '/MyVolunteers',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <PrivateLayout />
          </Suspense>),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
                <MyVolunteers />
              </Suspense>
            )
          }
        ]
      },
      {
        path: '/MyPurchases',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <PrivateLayout />
          </Suspense>),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
                <MyPurchases />
              </Suspense>)
          }
        ]
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
