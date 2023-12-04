import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "./Router"
import { makeServer } from "./Store/MirageConf"

makeServer()

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)