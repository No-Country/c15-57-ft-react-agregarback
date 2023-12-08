import { Suspense } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { MainLayout, PrivateLayout } from '../Layouts'

import { Donations, Animals, Volunteers, Login, NotFound, Register, Store, loaderStoreItems, User, MyVolunteers, MyPurchases } from "../Routes"

import { InfoPageContainer, loaderItem } from "../components"

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
        <MainLayout />
      </Suspense>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
            <Animals />
          </Suspense>
        )
      },
      {
        path: '/Donations',
        element: (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
          <Donations />
        </Suspense>)
      },
      {
        path: '/Volunteers',
        element: (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
          <Volunteers />
        </Suspense>)
      },
      {
        path: '/Store',
        element: (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
          <Store />
        </Suspense>),
        loader: loaderStoreItems
      },
      {
        path: '/Store/:id',
        element: (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
          <InfoPageContainer />
        </Suspense>),
        loader: loaderItem
      },
      {
        path: '/Login',
        element:
          (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
            <Login />
          </Suspense>)
      },
      {
        path: '/User',
        errorElement: <NotFound />,
        element:
          (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
            <PrivateLayout />
          </Suspense>
          ),
        children: [
          {
            index: true,
            element:
              (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
                <User />
              </Suspense>
              )
          },
        ]
      },
      {
        path: '/MyVolunteers',
        element:
          (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
            <PrivateLayout />
          </Suspense>
          ),
        children: [
          {
            index: true,
            element:
              (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
                <MyVolunteers />
              </Suspense>
              )
          },
        ]
      },
      {
        path: '/MyPurchases',
        element:
          (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
            <PrivateLayout />
          </Suspense>
          ),
        children: [
          {
            index: true,
            element:
              (<Suspense fallback={<div style={{ textAlign: "center" }}>Loading..</div>}>
                <MyPurchases />
              </Suspense>
              ),

          },
        ]
      },
    ]
  }
])
/* 
 {
    path: '/Store',
    element: <Store />
  },
  {
    path: '/reset-password',
    element: <ResetPassword />
  }
  */