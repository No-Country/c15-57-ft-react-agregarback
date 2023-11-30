import React from 'react'
import { Outlet } from "react-router-dom";

export const MainLayout = () => {

    return (
        <div>
            <nav></nav>
            {Outlet}
            <footer></footer>
        </div>

    )
}

