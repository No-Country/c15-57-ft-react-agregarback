import ContentProvider from './Store/contextStore/ContentContext'
import ECommerceProvider from './Store/contextStore/ECommerceContext'
import ReactDOM from 'react-dom/client'
import UserProvider from './Store/contextStore/UserContext'
import { RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { makeServer } from './Store/Server/MirageConf'
import { router } from './Router'

makeServer()
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContentProvider>
      <ECommerceProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ECommerceProvider>
    </ContentProvider>
  </StrictMode>
)
