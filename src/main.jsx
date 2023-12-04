import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'

import { router } from './Router'
import { productmakeServer } from './Store/Server/Product'

import ContentProvider from './Store/contextStore/ContentContext'
import UserProvider from './Store/contextStore/UserContext'
import ECommerceProvider from './Store/contextStore/ECommerceContext'

productmakeServer()

ReactDOM.createRoot(document.getElementById('root')).render(
  <ContentProvider>
    <ECommerceProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </ECommerceProvider>
  </ContentProvider>
)
