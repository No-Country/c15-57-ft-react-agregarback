import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Loader } from '../components'
import { MainLayout, PrivateLayout } from '../Layouts'

import {
  Animals,
  InfoAnimals,
  WhoWeAre,
  VulnerableSpecies,
  Store,
  Register,
  Login,
  NotFound,
  User,
  MyVolunteers,
  MyPurchases,
  ResetPassword,
  Donations,
  ShippingInformation,
  ShoppingCart,
  Thanks,
  ShoppingSuccessful,
  EcosystemPage
} from '../Routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<Loader />}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <Animals />
          </Suspense>
        )
      },
      {
        path: '/WhoWeAre',
        element: (
          <Suspense fallback={<Loader />}>
            <WhoWeAre />
          </Suspense>
        )
      },
      {
        path: '/VulnerableSpecies',
        element: (
          <Suspense fallback={<Loader />}>
            <VulnerableSpecies />
          </Suspense>
        )
      },
      {
        path: '/Donations',
        element: (
          <Suspense fallback={<Loader />}>
            <Donations />
          </Suspense>
        )
      },
      {
        path: '/Thanks',
        element: (
          <Suspense fallback={<Loader />}>
            <Thanks />
          </Suspense>
        )
      },
      {
        path: '/Store',
        element: (
          <Suspense fallback={<Loader />}>
            <Store />
          </Suspense>
        )
      },
      {
        path: '/Register',
        element: (
          <Suspense fallback={<Loader />}>
            <Register />
          </Suspense>
        )
      },
      {
        path: '/Login',
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        )
      },
      {
        path: '/Shipping-information',
        element: (
          <Suspense fallback={<Loader />}>
            <ShippingInformation />
          </Suspense>
        )
      },
      {
        path: '/Reset-password',
        element: (
          <Suspense fallback={<Loader />}>
            <ResetPassword />
          </Suspense>
        )
      },
      {
        path: '/ShoppingCart',
        element: (
          <Suspense fallback={<Loader />}>
            <ShoppingCart />
          </Suspense>
        )
      },
      {
        path: '/Animals/',
        element: (
          <Suspense fallback={<Loader />}>
            <InfoAnimals />
          </Suspense>
        )
      },
      {
        path: '/Animals/:animal',
        element: (
          <Suspense fallback={<Loader />}>
            <InfoAnimals />
          </Suspense>
        )
      },
      {
        path: '/Ecosystems/',
        element: (
          <Suspense fallback={<Loader />}>
            <EcosystemPage />
          </Suspense>
        )
      },
      {
        path: '/Ecosystems/:ecosystem',
        element: (
          <Suspense fallback={<Loader />}>
            <EcosystemPage />
          </Suspense>
        )
      },
      {
        path: '/ShoppingSuccessful',
        element: (
          <Suspense fallback={<Loader />}>
            <ShoppingSuccessful />
          </Suspense>
        )
      },

      //  Private Routes
      {
        path: '/User',
        errorElement: <NotFound />,
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <User />
              </Suspense>
            )
          }
        ]
      },
      {
        path: '/MyVolunteers',
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <MyVolunteers />
              </Suspense>
            )
          }
        ]
      },
      {
        path: '/MyPurchases',
        element: (
          <Suspense fallback={<Loader />}>
            <PrivateLayout />
          </Suspense>
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<Loader />}>
                <MyPurchases />
              </Suspense>
            )
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
