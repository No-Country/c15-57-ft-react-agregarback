import ReactDOM from 'react-dom/client'

import {RouterProvider} from 'react-router-dom'

import {router} from './Router'
import ContentProvider from './Store/contextStore/ContentContext'
import UserProvider from './Store/contextStore/UserContext'
import ECommerceProvider from './Store/contextStore/ECommerceContext'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";
import { makeServer } from './Store/Server/MirageConf'

makeServer()
ReactDOM.createRoot(document.getElementById('root')).render(
    <ContentProvider>
        <ECommerceProvider>
            <UserProvider>
                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <RouterProvider router={router}/>
                </DevSupport>
            </UserProvider>
        </ECommerceProvider>
    </ContentProvider>
)
