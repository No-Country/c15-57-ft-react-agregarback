import ReactDOM from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'

import { router } from "./Router"
import { makeServer } from "./Store/Server/MirageConf"

import ContentProvider from './Store/contextStore/ContentContext'
import UserProvider from './Store/contextStore/UserContext'
import ECommerceProvider from './Store/contextStore/ECommerceContext'

makeServer()

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContentProvider>
        <ECommerceProvider>
            <UserProvider>
                <RouterProvider router={router} />
            </UserProvider>
        </ECommerceProvider>
    </ContentProvider>
)