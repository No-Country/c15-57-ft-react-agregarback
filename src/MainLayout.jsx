import React from 'react';
import { Outlet } from "react-router-dom";
import { Header, Footer } from './components';
import "./index.css"

export const MainLayout = () => {

    return (
        <div>
            <nav>
                <Header />
            </nav>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

