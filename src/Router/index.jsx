import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { MainLayout, PrivateLayout } from '../Layouts'

import { Animals, WhoWeAre, VulnerableSpecies, Store, Register, Login, NotFound, User, MyVolunteers, MyPurchases, ResetPassword, Donations, ShippingInformation, ShoppingCart } from '../Routes'

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
        path: '/WhoWeAre',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <WhoWeAre />
          </Suspense>)
      },
      {
        path: '/Donations',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <Donations />
          </Suspense>)
      },
      {
        path: '/VulnerableSpecies',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <VulnerableSpecies />
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
      {
        path: '/Shipping-information',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <ShippingInformation />
          </Suspense>)
      },
      {
        path: '/Reset-password',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <ResetPassword />
          </Suspense>)
      },
      {
        path: '/ShoppingCart',
        element: (
          <Suspense fallback={<div style={{ textAlign: 'center' }}>Loading..</div>}>
            <ShoppingCart />
          </Suspense>)
      },

      /*
      * Private Routes
      */
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
